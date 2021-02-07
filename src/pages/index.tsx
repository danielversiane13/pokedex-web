import { useCallback, useEffect, useState } from 'react'

import Head from 'next/head'

import Button from '~/components/Button'
import Card from '~/components/Card'

import { getAllPokemon, getPokemon } from '~/services/apiPokemon'

interface PokeDataResult {
  name: string
  url: string
}

interface PokeData {
  previous: string | null
  next: string | null
  results: PokeDataResult[]
}

export default function Home() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [previousUrl, setPreviousUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const initialPage = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=33'

  const fetchAllPokemon = useCallback(async url => {
    if (!url) return

    setLoading(true)
    const { previous, next, results } = await getAllPokemon<PokeData>(url)

    const responsePokeData = await Promise.all(
      results.map(r => getPokemon(r.url))
    )

    setPreviousUrl(previous)
    setNextUrl(next)
    setPokemonData(responsePokeData)
    setLoading(false)
  }, [])

  const handleInitialUrl = useCallback(async () => {
    if (loading) return

    return fetchAllPokemon(initialPage)
  }, [fetchAllPokemon, initialPage, loading])

  const handlePreviousUrl = useCallback(async () => {
    if (loading) return

    return fetchAllPokemon(previousUrl)
  }, [fetchAllPokemon, previousUrl, loading])

  const handleNextUrl = useCallback(async () => {
    if (loading) return

    return fetchAllPokemon(nextUrl)
  }, [fetchAllPokemon, nextUrl, loading])

  useEffect(() => {
    async function fetchData() {
      await handleInitialUrl()
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Head>
        <title>Title App</title>
      </Head>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '10px 0px'
        }}
      >
        <Button onClick={handleInitialUrl}>Initial</Button>
        <Button onClick={handlePreviousUrl}>Previous</Button>
        <Button onClick={handleNextUrl}>Next</Button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '0px 10px 10px -10px'
        }}
      >
        {pokemonData.map(p => (
          <Card key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  )
}
