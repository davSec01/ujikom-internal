import React, { useState, useEffect } from "react";
import "./HomePage.css";
import WisataCard from "./WisataCard";
import Footer from "./Footer";

const HomePage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [wisataData, setWisataData] = useState([]);
  const images = [
    "https://www.tourist-destinations.com/wp-content/uploads/2011/06/I.jpg",
    "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/article/stories/wanderlust/island-hopper-the-best-islands-around-bali/nusa-beach.jpg", 
    "https://wisatafavorit.com/wp-content/uploads/2019/10/wisata-tanah-lot-bali.jpg"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    fetch("http://localhost:4000/wisata_bali")
      .then((response) => response.json())
      .then((data) => setWisataData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        <div
          className="imageContainer"
          style={{
            backgroundImage: `url(${images[imageIndex]})`,
          }}
        ></div>
        <h1 className="heading">Welcome to Pariwisata Bali</h1>
        <p className="paragraph">
          Selamat datang di website resmi wisata bali indonesia.
        </p>
        <a href="./projects">
          <button className="button">Wisata</button>
        </a>
      </div>
      <div className="card-container">
        {wisataData.slice(0, 6).map((wisata) => (
          <WisataCard
            key={wisata.id}
            id={wisata.id}
            name={wisata.name}
            description={wisata.description}
            imageUrl={wisata.imageUrl}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
