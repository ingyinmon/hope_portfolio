import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

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
    <div className="w-full min-h-[90smh] bg-black/30 backdrop-blur-md flex items-center justify-center p-3 mt-16 mb-16">
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

export default PodcastaudioImages;
