const baseurl = 'https://pokeapi.co/api/v2'

export function getPokemon() {
    return fetch(`${baseurl}/pokemon`)
    .then(res => res.json())
}