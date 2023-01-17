import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Layout/Navbar/Navbar";
import axios from "axios";
import "./Home.scss";
import { Link } from "react-router-dom";
function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products ").then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="React project" />
      </Helmet>
      <Navbar />
      <section>
        <div className="sectionCards">
          <div className="card">
            {post.map((element) => {
              return (
                <div key={element.id} className="cardBox">
                  <img src={element.image} alt={""}></img>
                  <p>{element.title}</p>
                  <h3>{element.price}$</h3>
                  <Link to={`product/${element.id}`}>
                    <button>Learn more</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
