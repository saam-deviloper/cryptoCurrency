import axios from "axios";
//url

const BASE_URL =
`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;

export const api = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
