export function getAllPokemon<t>(url: string): Promise<t> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(e => reject(e))
  })
}

export function getPokemon<t>(url: string): Promise<t> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(e => reject(e))
  })
}
