import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import backarrow from "../assets/backarrow.png";

import v1 from "../assets/motion_for_portfolio/3d_ball&glowing_torus_technic.mp4";
import v2 from "../assets/motion_for_portfolio/5_6262742764941743497.mp4";
import v3 from "../assets/motion_for_portfolio/cosmetic_design1.mp4";
import v4 from "../assets/motion_for_portfolio/facebook_like_&_follow_animation.mp4";
import v5 from "../assets/motion_for_portfolio/facebook.mp4";
import v6 from "../assets/motion_for_portfolio/final_project.mp4";
// import v7 from "../assets/motion_for_portfolio/future_31_animation.mp4";
import v8 from "../assets/motion_for_portfolio/glow_text_animation.mp4";
import v9 from "../assets/motion_for_portfolio/happy_birthday_for_tiktok.mp4";
import v10 from "../assets/motion_for_portfolio/hope_animation.mp4";
import v11 from "../assets/motion_for_portfolio/list.mp4";
import v12 from "../assets/motion_for_portfolio/logo_animation_official.mp4";
import v13 from "../assets/motion_for_portfolio/Main _motion_road_animation.mp4";
import v14 from "../assets/motion_for_portfolio/Main.mp4";
import v15 from "../assets/motion_for_portfolio/manifying_animation.mp4";
import v16 from "../assets/motion_for_portfolio/Neon-Text-Animation.mp4";
import v17 from "../assets/motion_for_portfolio/Render_comp.mp4";
import v18 from "../assets/motion_for_portfolio/SHE_animation.mp4";
import v19 from "../assets/motion_for_portfolio/sneaker_ads_motion.mp4";
// import v20 from "../assets/motion_for_portfolio/song_animation1.mp4";
import v21 from "../assets/motion_for_portfolio/square_motion_complex.mp4";
import v22 from "../assets/motion_for_portfolio/text_animation.mp4";
import v23 from "../assets/motion_for_portfolio/tiktok_showcase.mp4";
import v24 from "../assets/motion_for_portfolio/video_2025-12-08_20-21-02.mp4";
import v25 from "../assets/motion_for_portfolio/video_2025-12-08_20-21-37.mp4";
import v26 from "../assets/motion_for_portfolio/video_2025-12-08_20-21-41.mp4";
import v27 from "../assets/motion_for_portfolio/video_2025-12-08_20-21-47.mp4";
// import v28 from "../assets/motion_for_portfolio/viral_song_edit.mp4";

export const videos = [
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  // v7,
  v8,
  v9,
  v10,
  v11,
  v12,
  v13,
  v14,
  v15,
  v16,
  v17,
  v18,
  v19,
  // v20,
  v21,
  v22,
  v23,
  v24,
  v25,
  v26,
  v27,
  // v28,
];

function MotionVideoes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const video = videos[id];

  const [startY, setStartY] = useState(null);

  const from = location.state?.from || "/";

  if (!video) return null;

  return (
    <section className=" grow relative w-full min-h-smh bg-black flex flex-col ">
      <div
        onClick={() => navigate(from)}
        className="h-16 flex items-center px-6 text-white/80 cursor-pointer z-20"
      >
        <img src={backarrow} alt="backarrow" className="w-10" />
        Back
      </div>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute inset-0
          w-full h-full
          object-cover
          scale-110
          md:scale-125
          blur-3xl
          opacity-40
        "
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex  items-center justify-center w-full h-full p-4 ">
        <video
          src={video}
          controls
          autoPlay
          muted
          playsInline
          className="
            max-w-full
            max-h-[70vh]
            object-contain
            rounded-2xl
            shadow-2xl
            cursor-pointer
            select-none
          "
        />
      </div>
    </section>
  );
}

export default MotionVideoes;
