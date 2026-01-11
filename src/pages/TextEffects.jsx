import { images } from "./TextEffectsImages";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import leftArrow from "../assets/left_arrow.png";
import rightArrow from "../assets/right_arrow.png";
import { useNavigate } from "react-router-dom";

function TextEffects() {
  const navigate = useNavigate();
  return (
    <>
      <section className="grow w-full h-[450px] p-4 mt-16">
        <h2 className="mb-4 text-3xl font-bold text-[#fc0058]">Text Effects</h2>
        <div className="flex items-center relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            navigation={{
              prevEl: ".texteffects-prev",
              nextEl: ".texteffects-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                centeredSlides: true,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 5,
                centeredSlides: false,
                spaceBetween: 24,
              },
            }}
            className="h-full px-2 sm:px-10 lg:px-10"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => navigate(`/texteffects/${index}`)}
                  className="
                   w-[220px] h-[330px]
                  lg:w-[250px] lg:h-[350px] rounded-3xl overflow-hidden mx-auto cursor-pointer"
                >
                  <img
                    src={img}
                    alt="design"
                    className="w-full h-full object-cover rounded-3xl mx-auto scale-110 hover:scale-100 transition-transform duration-700 "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="texteffects-prev absolute top-1/2 left-7 -translate-y-1/2 cursor-pointer z-50">
            <img src={leftArrow} alt="prev" className="w-7 h-10" />
          </div>
          <div className="texteffects-next absolute top-1/2 right-7 -translate-y-1/2 cursor-pointer z-50">
            <img src={rightArrow} alt="next" className="w-7 h-10" />
          </div>
        </div>
      </section>
    </>
  );
}

export default TextEffects;
