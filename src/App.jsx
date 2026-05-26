import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Header from "./components/Header";
import NotFoundPage from "./pages/not-found";
import CoinDetailPage from "./pages/coin-detail";

const API_URL = import.meta.env.VITE_API_URL;

// "&order=market_cap_desc&per_page=10&page=1&sparkline=false";
// "https://api.coingecko.com/api/v3/coins/categories";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`,
        );
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
  }, [limit]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              coins={coins}
              error={error}
              sortBy={sortBy}
              setSortBy={setSortBy}
              filter={filter}
              limit={limit}
              setLimit={setLimit}
              setFilter={setFilter}
              loading={loading}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coin/:id" element={<CoinDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;

// The way we make request is going to be determine by the environment we are working.
// If you are using React Router 7 - Loaders where you can fetch data rom
// React & Vite, you are going to get your data from the useEffect hook and put the data into state

// Slice() prevent original array from being mutated
