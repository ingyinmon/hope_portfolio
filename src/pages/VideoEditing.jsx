import { useParams, useNavigate, useLocation } from "react-router-dom";
import backarrow from "../assets/backarrow.png";

export const VideoEdits = [
  "https://drive.google.com/file/d/1YxeZ1UcQSFRhpBqxm3Lauudxlp6vxoLd/preview",
  "https://drive.google.com/file/d/1oYRuPTNLihZT818RqRUASNKxe-IOQ_oB/preview",
  "https://drive.google.com/file/d/1RLKyTRYV8A9N93Fw3iYgcG6V0uI9ENrt/preview",
  "https://drive.google.com/file/d/1v07E-oe9wrtrXfA8emqk8uGrnlWWccn3/preview",
  "https://drive.google.com/file/d/1ReUIevysCiv-rTkVldsNV71Js2YuRDc2/preview",
  "https://drive.google.com/file/d/1zKpxpU_OzhtjmY3eM6SwBsIhrrKfU8fk/preview",
  "https://drive.google.com/file/d/1FLnuERTaOBSoDvPHqKjpP60MgxQqjLE-/preview",
  "https://drive.google.com/file/d/19_voM-yIj9AArwQ3vkDx-JsQ08UQeiVj/preview",
  "https://drive.google.com/file/d/1wADJW3V2qyHT2JTWkU7nJk5zk4ykG7E3/preview",
  "https://drive.google.com/file/d/1jcVSbSiDIuTu3xiaF8bxsWRx0CuDIJ-R/preview",
  "https://drive.google.com/file/d/1HFXJv8s7bikiGgAXxXORusEh7sweD8jh/preview",
  "https://drive.google.com/file/d/1FwNN7XSSbgfWaTTxsQFni7pUh4Cc63h5/preview",
  "https://drive.google.com/file/d/1Ndi4PjkdZcE8PIV5cvy28x-TJhgNxEwy/preview",
  "https://drive.google.com/file/d/1AZpJtFkzNhVVfMYk0DzMMzONutsfE_Gy/preview",
  "https://drive.google.com/file/d/1v07E-oe9wrtrXfA8emqk8uGrnlWWccn3/preview",
  "https://drive.google.com/file/d/19pRTDi_5C_2ROijaiptC4pX-FcTmCZlm/preview",
];

function VideoEditing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const videoSrc = VideoEdits[Number(id)];

  const from = location.state?.from || "/";

  return (
    <section className="grow relative w-full min-h-smh bg-black flex flex-col">
      <div
        onClick={() => navigate(from)}
        className="h-16 flex items-center px-6 text-white/80 cursor-pointer z-20"
      >
        <img src={backarrow} alt="backarrow" className="w-10" />
        Back
      </div>

      <div className="flex-1 flex items-center justify-center">
        <iframe
          src={videoSrc}
          allow="autoplay; fullscreen; encrypted-media"
          className="
            w-full
            h-[30vh]
            md:w-[70vw]
            md:h-[40vh]
            lg:w-[80vw]
            lg:h-[60vh]
            p-2
            rounded-4xl
            shadow-2xl
            bg-black
          "
        />
      </div>
    </section>
  );
}

export default VideoEditing;
