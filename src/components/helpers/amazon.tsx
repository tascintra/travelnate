// https://amazon-api.sellead.com/country
const BASE_URL = 'https://amazon-api.sellead.com'

export const fetchCountries = () => {
  const url = `{$BASE_URL}/country`
  return fetch(url).then(response => response.json())
}