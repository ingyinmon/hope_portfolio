import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import backarrow from "../assets/Backarrow.png";

import img1 from "../assets/podcast_audios/freedom_main_poster.webp";
import img2 from "../assets/podcast_audios/photo_2024-05-25_13-58-46.webp";
import img3 from "../assets/podcast_audios/photo_2024-05-25_13-59-01.webp";
import img4 from "../assets/podcast_audios/photo_2025-12-08_13-54-43.webp";
import img5 from "../assets/podcast_audios/photo_2025-12-08_13-57-29.webp";
import img6 from "../assets/podcast_audios/photo_2025-12-08_13-57-45.webp";
import img7 from "../assets/podcast_audios/photo_2025-12-08_13-57-49.webp";
import img8 from "../assets/podcast_audios/photo_2025-12-08_13-57-52.webp";
import img9 from "../assets/podcast_audios/photo_2025-12-08_16-16-26.webp";
import img10 from "../assets/podcast_audios/photo_2025-12-08_16-18-16.webp";
import img11 from "../assets/podcast_audios/wunnasoehtun_FB-WunnaPandora.webp";
import img12 from "../assets/podcast_audios/အဆိပ်ဖြေဆေး-poster.webp";

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
];

function PodcastaudioImages() {
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

export default PodcastaudioImages;
