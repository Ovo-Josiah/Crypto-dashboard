import { useState, useEffect } from "react";
import CoinCard from "./components/CoinCard";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
// "https://api.coingecko.com/api/v3/coins/categories";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch(API_URL)
    //   .then((res) => {
    //     if (!res.ok) throw new Error("failed to fetch data");
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setCoins(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     setLoading(false);
    //   });
    const fetchCoins = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("failed to fetch data");
        const data = await res.json();
        console.log(data);
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      {loading && <p> Loading...</p>}
      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <main className="grid">
          {coins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </main>
      )}
    </div>
  );
};

export default App;

// The way we make request is going to be determine by the environment we are working.
// If you are using React Router 7 - Loaders where you can fetch data rom
// React & Vite, you are going to get your data from the useEffect hook and put the data into state
