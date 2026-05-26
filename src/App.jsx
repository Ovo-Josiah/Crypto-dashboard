import { useState, useEffect } from "react";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
// "https://api.coingecko.com/api/v3/coins/categories";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [laoding, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("failed to fetch data");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
    </div>
  );
};

export default App;

// The way we make request is going to be determine by the environment we are working.
// If you are using React Router 7 - Loaders where you can fetch data rom
// React & Vite, you are going to get your data from the useEffect hook and put the data into state
