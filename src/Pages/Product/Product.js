import axios from "axios";
import Helmet from "react-helmet";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";
import "./Product.scss";
function Product() {
  let { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);
  return (
    <>
  <Helmet>
    <title>Product</title>
    <meta name="description" content="React project" />
  </Helmet>
      <Navbar /> <br />
      <div className="main_product_div">
        <div className="product_div">
          <div className="product_card">
            <img src={post.image} alt={""}/>
            <p>{post.title}</p>
            <h3>{post.price}$</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
