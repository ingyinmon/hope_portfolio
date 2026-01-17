import { VideoEdits } from "./VideoEditing.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import leftArrow from "../assets/left_arrow.png";
import rightArrow from "../assets/right_arrow.png";
import { useNavigate, useLocation } from "react-router-dom";

function Video() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="grow w-full h-[450px] p-4 mt-10">
      <h2 className="mb-10 text-3xl font-bold text-[#fc0058]">Video Editing</h2>
      <div className="flex items-center relative ">
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          loop={true}
          navigation={{
            prevEl: ".video-prev",
            nextEl: ".video-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true, spaceBetween: 24 },
            640: { slidesPerView: 2.5, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="h-full px-2 sm:px-4 lg:px-6"
        >
          {VideoEdits.map((videoUrl, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() =>
                  navigate(`/video/${index}`, {
                    state: { from: location.pathname },
                  })
                }
                className="w-[300px] md:w-[320px] lg:w-[350px] aspect-video rounded-3xl overflow-hidden mx-auto cursor-pointer"
              >
                <iframe
                  src={videoUrl}
                  className="w-full h-full pointer-events-none rounded-3xl object-cover hover:scale-105 transition-transform duration-700"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="video-prev absolute top-1/2 left-7 -translate-y-1/2 cursor-pointer z-50">
          <img src={leftArrow} alt="prev" className="w-13 h-13" />
        </div>
        <div className="video-next absolute top-1/2 right-7 -translate-y-1/2 cursor-pointer z-50">
          <img src={rightArrow} alt="next" className="w-13 h-13" />
        </div>
      </div>
    </section>
  );
}

export default Video;
