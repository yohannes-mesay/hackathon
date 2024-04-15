import { useEffect, useState } from "react";
import Product from "./Pages/Product";
import Service from "./Pages/Service";
import Event from "./Pages/Event";

import { LeftNav } from "./components/LeftNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Buyer from "./Pages/Buyer";
import Seller from "./Pages/Seller";
import SingleItem from "./components/Singleltem.jsx";

const BASE_URL = "http://localhost:3004";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/products`);
        const product = await res.json();
        console.log(product);
        setData(product);
      } catch (err) {
        alert("there is an erro in fetching the data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="App flex">
      <Router>
        <div className="h-screen" style={{ width: "200px" }}>
          <LeftNav />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Products" element={<Product />} />
            <Route path="/Services" element={<Service />} />
            <Route path="/Events" element={<Event />} />
            <Route path="/Buyer" element={<Buyer />} />
            <Route path="/Seller" element={<Seller />} />
            <Route path="/Create" />
            <Route path="/product/details/:id" element={<SingleItem />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
