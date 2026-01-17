import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import backarrow from "../assets/Backarrow.png";

import img1 from "../assets/futures/Untitled-1.webp";
import img2 from "../assets/futures/Untitled-2.webp";
import img3 from "../assets/futures/Untitled-3.webp";
import img4 from "../assets/futures/Untitled-4.webp";
import img5 from "../assets/futures/day-20.webp";
import img6 from "../assets/futures/day-22.webp";
import img7 from "../assets/futures/day-23.webp";
import img8 from "../assets/futures/day-28.webp";
import img9 from "../assets/futures/day-30.webp";
import img10 from "../assets/futures/future-day-19.webp";

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
];

function ImageFutures() {
  const { id } = useParams();
  const navigate = useNavigate();
  const image = images[id];

  const [startY, setStartY] = useState(null);

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

export default ImageFutures;
