import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import backarrow from "../assets/backarrow.png";

import img1 from "../assets/logo/banner_icon-01.webp";
import img2 from "../assets/logo/jasmine_logo.webp";
import img3 from "../assets/logo/odyssey_logo_finish-01.webp";
import img4 from "../assets/logo/photo_2024-05-25_13-58-58.webp";
import img5 from "../assets/logo/photo_2025-04-23_10-05-45.webp";
import img6 from "../assets/logo/photo_2025-04-23_10-05-53.webp";
import img7 from "../assets/logo/photo_2025-04-23_10-05-56.webp";
import img8 from "../assets/logo/photo_2025-04-23_10-05-59.webp";
import img9 from "../assets/logo/photo_2025-12-08_13-49-34.webp";
import img10 from "../assets/logo/photo_2025-12-08_13-49-48.webp";
import img11 from "../assets/logo/photo_2025-12-08_13-49-57.webp";
import img12 from "../assets/logo/shwe_eain_thit-01.webp";
import img13 from "../assets/logo/traveller-&-food-volgger-logo.webp";

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
];

function ImageLogo() {
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

export default ImageLogo;
