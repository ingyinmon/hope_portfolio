import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import backarrow from "../assets/backarrow.png";

import img1 from "../assets/manipulation/img1.webp";
import img2 from "../assets/manipulation/img2.webp";
import img3 from "../assets/manipulation/img3.webp";
import img4 from "../assets/manipulation/img4.webp";
import img5 from "../assets/manipulation/img5.webp";
import img6 from "../assets/manipulation/img6.webp";
import img7 from "../assets/manipulation/img7.webp";
import img8 from "../assets/manipulation/img8.webp";
import img9 from "../assets/manipulation/img9.webp";
import img10 from "../assets/manipulation/img10.webp";
import img11 from "../assets/manipulation/img11.webp";
import img12 from "../assets/manipulation/img12.webp";
import img13 from "../assets/manipulation/img13.webp";
import img14 from "../assets/manipulation/img14.webp";
import img15 from "../assets/manipulation/img15.webp";
import img16 from "../assets/manipulation/img16.webp";
import img17 from "../assets/manipulation/img17.webp";
import img18 from "../assets/manipulation/img18.webp";

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
];

function ImageManipulation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const image = images[id];

  const [startY, setStartY] = useState(null);

  return (
    <section className="grow relative w-full  bg-black flex flex-col">
      <div
        onClick={() => navigate("/")}
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

export default ImageManipulation;
