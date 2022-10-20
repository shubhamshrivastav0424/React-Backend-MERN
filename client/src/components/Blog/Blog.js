import React, { useState, useEffect } from "react";
import "../Blog/styles/blog.css";
import rythm from "../Blog/rythm.svg";
import share from "../Blog/share.svg";
import Facedata from "./Facedata";
import fb from "../Blog/fb.png";
import insta from "../Blog/insta.png";
import wa from "../Blog/wa.png";
import twitter from "../Blog/twitter.png";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  const fetchData = async () => {
    let res = await axios("https://mernstack-react-app.herokuapp.com/allblogs");
    setData(res.data);
    check();
  };

  const check = () => {
    const newd = data.filter((item) => {
      return item._id === id;
    });
    setResult(newd);
  };

  useEffect(() => {
    fetchData();
  }, [result]);

  return (
    <>
      <div className="blog___wrapper">
        <div className="header_2">
          <Link to="/">
            <div>
              <span>The </span>
              <h1>Siren</h1>
            </div>
          </Link>
          <button>Get Started</button>
        </div>
        <div className="blog_icons">
          <div className="rythm">
            <img src={rythm} alt="abc"></img> <span>9.3 k</span>
          </div>
          <div className="share">
            <img src={share} alt="abc"></img>
            <span> Share this article</span>
          </div>
        </div>
        <div className="blog_right">
          <div className="blog_right_heading">
            {result.length ? result[0].blogTitle : ""}
          </div>
          <div className="face_data_div">
            <Facedata
              name={"Dmitry Nozhenko"}
              date="Jan 28, 2019 · 10 min read"
            />
            <div className="social_icons">
              <img src={fb} alt="abc"></img>
              <img src={insta} alt="abc"></img>
              <img src={wa} alt="abc"></img>
              <img src={twitter} alt="abc"></img>
            </div>
          </div>
          <div className="react_img">
            <img src={result.length ? result[0].imgUrl : ""} alt="abc"></img>
          </div>
          <div className="react_content">
            <div className="react_content_1">
              <p>{result.length ? result[0].blogContent : ""}</p>
            </div>
          </div>
          <div className="code_img">
            <img src={result.length ? result[0].imgUrl2 : ""} alt="abc"></img>
          </div>
          <div className="rythm_div">
            <div className="rythm">
              <img src={rythm} alt="abc"></img> <span>9.3 k claps</span>
            </div>
          </div>
          <div className="face_data_parent">
            <Facedata
              name="Dmitry Nozhenko"
              date="Jan 28, 2019 · 10 min read"
              written="Written By"
            />
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default Blog;
