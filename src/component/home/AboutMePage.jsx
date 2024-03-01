// AboutMePage.jsx

import React from "react";
import "./AboutMePage.css";

const AboutMePage = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Me</h2>
      <img
        src="https://source.unsplash.com/1200x600/?bali"
        alt="Bali Tourism"
        className="tourism-image"
      />
      <div className="about-paragraph">
        <p>
        Bali, pulau surga di Indonesia, tidak hanya memikat wisatawan dengan keindahan alamnya yang mempesona tetapi juga dengan kekayaan warisan budayanya. Pulau ini terkenal dengan pantainya yang mempesona, seperti Kuta dengan ombaknya yang mengundang para peselancar atau Sanur yang menawarkan pemandangan matahari terbit yang tenang. Keindahan alam juga tercermin dari hamparan sawah hijau subur di Tegallalang dan lembah yang dikelilingi pegunungan. Bali juga merupakan rumah bagi ratusan pura Hindu yang indah, seperti Pura Besakih, tempat ibadah megah di lereng Gunung Agung.        </p>
        <p>
        Namun daya tarik Bali bukan hanya pada alamnya saja. Kekayaan budaya terlihat pada seni tari tradisional seperti Kecak dan Barong yang menceritakan mitos dan legenda Hindu. Setiap festival, seperti Nyepi, memberikan kesempatan bagi wisatawan untuk merasakan ritual dan tradisi unik Bali. Masakan lokal yang lezat, mulai dari bebek betutu hingga lawar, juga menambah cita rasa khas Bali yang tak terlupakan.        </p>
        <p>
        Bali bukan sekedar tujuan liburan; ini adalah pengalaman yang merangkul kedamaian dan keindahan sambil mengeksplorasi akar budaya yang mendalam. Dengan penduduknya yang hangat dan ramah, Bali selalu menyambut setiap pengunjungnya dengan senyuman tulus, menciptakan kenangan indah yang membekas di hati.        </p>
      </div>
    </div>
  );
};

export default AboutMePage;
