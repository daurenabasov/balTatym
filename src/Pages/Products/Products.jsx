import axios from "axios";
import React, { useEffect, useState } from "react";
import { ALLPRODUCTSAPI } from "../../Constants/api";
import ProductsList from "./ProductList/ProductsList";
import Header from "../Home/HomeComponents/Header/Header";
import s from "./Products.module.scss";
import Footer from "../Home/HomeComponents/Footer/Footer";
import Loader from "../../Components/UI/Loader/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false)

  const getCards = async () => {
    try {
      const res = await axios.get(ALLPRODUCTSAPI);
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 4000);
    getCards();
  }, []);


  return (
    <>
      {loader ? (
        <div>
          <Header />
          <div className={s.productList}>
            {products.map((product, idx) => (
              <ProductsList
                key={idx}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}

    </>
  );
};

export default Products;
