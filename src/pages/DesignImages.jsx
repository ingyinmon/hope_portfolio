import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import img1 from "../assets/books_cover_design/back.webp";
import img2 from "../assets/books_cover_design/back_showcase.webp";
import img3 from "../assets/books_cover_design/back_showcase2.webp";
import img4 from "../assets/books_cover_design/concept_idea_breakdown_wireframe.webp";
import img5 from "../assets/books_cover_design/concept-idea-breakdown-wireframe1.webp";
import img6 from "../assets/books_cover_design/concept-idea-breakdown-wireframe2.webp";
import img7 from "../assets/books_cover_design/concept-idea-breakdown-wireframe3.webp";
import img8 from "../assets/books_cover_design/design_show.webp";
import img9 from "../assets/books_cover_design/showcase_2.webp";
import img10 from "../assets/books_cover_design/showcase.webp";
import img11 from "../assets/books_cover_design/showcase2_2.webp";
import img12 from "../assets/books_cover_design/breakdown_theory_magazine.webp";

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

function DesignImages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const image = images[id];

  const [startY, setStartY] = useState(null);

  return (
    <div className="grow w-full min-h-[90smh] bg-black/30 backdrop-blur-md flex items-center justify-center p-3 mt-16 mb-16">
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

export default DesignImages;
