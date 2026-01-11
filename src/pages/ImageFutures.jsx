import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

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
    <div className="grow w-full h-[90vh] bg-black/30 backdrop-blur-md flex items-center justify-center p-3">
      <img
        src={image}
        alt="Design"
        draggable={false}
        onMouseDown={(e) => setStartY(e.clientY)}
        onMouseUp={(e) => {
          if (e.clientY < startY) {
            navigate("/design");
          }
        }}
        onTouchStart={(e) => setStartY(e.touches[0].clientY)}
        onTouchEnd={() => navigate("/design")}
        className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl cursor-pointer select-none"
      />
    </div>
  );
}

export default ImageFutures;
