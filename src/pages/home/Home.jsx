import React, { useEffect, useState } from "react";
import Products from "../../components/products/Products";
import axios from "../../api";
import Banner from "../../components/Banner/Banner";
const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("/products?limit=9")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Banner />
      <Products title="Mahsulotlar" data={products} />
    </div>
  );
};

export default Home;
