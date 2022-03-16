const baseUrl = 'https://www.dnd5eapi.co'

export function getClassList() {
  return fetch(`${baseUrl}/api/classes`)
  .then(res => res.json())
}

// fetch to https://www.dnd5eapi.co/api/classes/whateverClass
export function getDetails(apiUrl) {
  return fetch(`${baseUrl}${apiUrl}`)
  .then(res => res.json())
}