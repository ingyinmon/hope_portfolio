import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

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
// import img26 from "../assets/social/img26.webp";
// import img27 from "../assets/social/img27.webp";
// import img28 from "../assets/social/img28.webp";
// import img29 from "../assets/social/img29.webp";
// import img30 from "../assets/social/img30.webp";
// import img31 from "../assets/social/img31.webp";
// import img32 from "../assets/social/img32.webp";
// import img33 from "../assets/social/img33.webp";
// import img34 from "../assets/social/img34.webp";
// import img35 from "../assets/social/img35.webp";
// import img36 from "../assets/social/img36.webp";
// import img37 from "../assets/social/img37.webp";
// import img38 from "../assets/social/img38.webp";
// import img39 from "../assets/social/img39.webp";
// import img40 from "../assets/social/img40.webp";
// import img41 from "../assets/social/img41.webp";
// import img42 from "../assets/social/img42.webp";
// import img43 from "../assets/social/img43.webp";
// import img44 from "../assets/social/img44.webp";
// import img45 from "../assets/social/img45.webp";
// import img46 from "../assets/social/img46.webp";
// import img47 from "../assets/social/img47.webp";
// import img48 from "../assets/social/img48.webp";
// import img49 from "../assets/social/img49.webp";
// import img50 from "../assets/social/img50.webp";
// import img51 from "../assets/social/img51.webp";
// import img52 from "../assets/social/img52.webp";
// import img53 from "../assets/social/img53.webp";

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
  // img26,
  // img27,
  // img28,
  // img29,
  // img30,
  // img31,
  // img32,
  // img33,
  // img34,
  // img35,
  // img36,
  // img37,
  // img38,
  // img39,
  // img40,
  // img41,
  // img42,
  // img43,
  // img44,
  // img45,
  // img46,
  // img47,
  // img48,
  // img49,
  // img50,
  // img51,
  // img52,
  // img53,
];

function SocialDesignImages() {
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

export default SocialDesignImages;
