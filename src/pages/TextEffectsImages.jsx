import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import img1 from "../assets/text_effects/844ce169-8980-4cd3-961c-3352991c7001-0.webp";
import img2 from "../assets/text_effects/844ce169-8980-4cd3-961c-3352991c7001-1.webp";
import img3 from "../assets/text_effects/844ce169-8980-4cd3-961c-3352991c7001-2.webp";
import img4 from "../assets/text_effects/844ce169-8980-4cd3-961c-3352991c7001-3.webp";
import img5 from "../assets/text_effects/Glow_text_effect.webp";
import img6 from "../assets/text_effects/grain.webp";
import img7 from "../assets/text_effects/photo_2025-12-08_13-54-15.webp";
import img8 from "../assets/text_effects/photo_2025-12-08_13-54-29.webp";
import img9 from "../assets/text_effects/photo_2025-12-08_13-54-32.webp";
import img10 from "../assets/text_effects/photo_2025-12-08_13-54-36.webp";
import img11 from "../assets/text_effects/photo_2025-12-08_16-16-38.webp";
import img12 from "../assets/text_effects/twirl.webp";

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

function TextEffectsImages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const image = images[id];

  const [startY, setStartY] = useState(null);

  return (
    <div className="grow w-full h-[90vh] bg-black/30 backdrop-blur-md flex items-center justify-center p-4">
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

export default TextEffectsImages;
