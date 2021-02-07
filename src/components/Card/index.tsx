import Image from '../Image'
import {
  Container,
  Detail,
  PokemonName,
  PokeType,
  PokeTypeName,
  PokeId
} from './style'

// const colors = {
//   fire: '#a94646',
//   grass: '#0f8817',
//   electric: '#d8c254',
//   water: '#51c7ff',
//   ground: '#dc8f42',
//   rock: '#5f5f28',
//   fairy: '#e8bfef',
//   poison: '#9551bf',
//   bug: '#e8cda9',
//   dragon: '#35549c',
//   psychic: '#eaeda1',
//   flying: '#F5F5F5',
//   fighting: '#E6E0D4',
//   normal: '#F5F5F5'
// }

const colors = {
  normal: '#bbbbaf',
  poison: '#aa5da1',
  psychic: '#fa65b5',
  grass: '#8cd74f',
  ground: '#eecf5e',
  ice: '#97f3ff',
  fire: '#f75343',
  rock: '#cebd72',
  dragon: '#8a76ff',
  water: '#56adff',
  bug: '#c2d21e',
  dark: '#8c6854',
  fighting: '#a85644',
  ghost: '#7773d3',
  steal: '#c4c2db',
  flying: '#79a4ff',
  electric: '#fee840',
  fairy: '#f9adff'
}

export default function Card({ pokemon }) {
  return (
    <Container>
      <PokeId>
        <span>{'# ' + pokemon.id.toString().padStart(3, '0')}</span>
      </PokeId>
      <div style={{ padding: '10px' }}>
        <Detail>
          <PokemonName>{pokemon.name}</PokemonName>
          <Image
            src={pokemon.sprites.other['official-artwork'].front_default}
            colorScheme={colors[pokemon.types[0].type.name]}
          />
          <PokeType>
            {pokemon.types.map((t: { type: { name: string } }, key: number) => (
              <PokeTypeName
                colorScheme={colors[t.type.name]}
                key={key + pokemon.name}
              >
                {t.type.name}
              </PokeTypeName>
            ))}
          </PokeType>
        </Detail>
      </div>
    </Container>
  )
}
