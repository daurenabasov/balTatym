import axios from "axios";
import React, { useEffect, useState } from "react";
import { ALLPRODUCTSAPI } from "../../Constants/api";
import ProductsList from "./ProductList/ProductsList";
import Header from "../Home/HomeComponents/Header/Header";
import s from "./Products.module.scss";
import Footer from "../Home/HomeComponents/Footer/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getCards = async () => {
    try {
      const res = await axios.get(ALLPRODUCTSAPI);
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div>
      <Header />
      <div className={s.productList}>
        {products.map((product) => (
          <ProductsList
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
