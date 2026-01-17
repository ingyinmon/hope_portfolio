import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import backarrow from "../assets/Backarrow.png";

import img1 from "../assets/social/img1.webp";
import img2 from "../assets/social/img2.webp";
import img3 from "../assets/social/img3.webp";
import img4 from "../assets/social/img4.webp";
import img5 from "../assets/social/img5.webp";
import img6 from "../assets/social/img6.webp";
import img7 from "../assets/social/img7.webp";
import img8 from "../assets/social/img8.webp";
import img9 from "../assets/social/img9.webp";
import img10 from "../assets/social/img10.webp";
import img11 from "../assets/social/img11.webp";
import img12 from "../assets/social/img12.webp";
import img13 from "../assets/social/img13.webp";
import img14 from "../assets/social/img14.webp";
import img15 from "../assets/social/img15.webp";
import img16 from "../assets/social/img16.webp";
import img17 from "../assets/social/img17.webp";
import img18 from "../assets/social/img18.webp";
import img19 from "../assets/social/img19.webp";
import img20 from "../assets/social/img20.webp";
import img21 from "../assets/social/img21.webp";
import img22 from "../assets/social/img22.webp";
import img23 from "../assets/social/img23.webp";
import img24 from "../assets/social/img24.webp";
import img25 from "../assets/social/img25.webp";

export const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
];

function SocialDesignImages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const image = images[id];

  return (
    <section className="grow relative w-full  bg-black flex flex-col">
      <div
        onClick={() => navigate("/design")}
        className="h-16 flex items-center px-6 text-white/80 cursor-pointer z-20"
      >
        <img src={backarrow} alt="backarrow" className="w-10" />
        Back
      </div>
      <div className="grow w-full h-[80vh] bg-black/30 backdrop-blur-md flex items-center justify-center p-3">
        <img
          src={image}
          alt="Design"
          className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl cursor-pointer select-none"
        />
      </div>
    </section>
  );
}

export default SocialDesignImages;
