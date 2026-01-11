import tiktok from "../assets/tiktok.png";
import youtube from "../assets/youtube.png";
import fb from "../assets/fb.png";
function Footer() {
  return (
    <>
      <div
        className="relative w-full h-[380px] text-white flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #000000, #3a1621, #71203b, #ad2655, #ee286d)",
        }}
      >
        <h2 className="text-4xl lg:text-5xl text-amber-300 font-lonelone">
          ပြီး​တော့လည်းပြီးတာပါပဲ
        </h2>
        <div className="absolute flex gap-10 mt-14">
          <a href="https://www.tiktok.com/@panadoras?">
            <img
              src={tiktok}
              alt="tiktok"
              className="w-7 h-7 transition-transform duration-300 hover:scale-125 hover:rotate-12 "
            />
          </a>
          <a href="https://www.youtube.com/@Wunna-zh8ib">
            <img
              src={youtube}
              alt="youtube"
              className="w-7 h-7 transition-transform duration-300 hover:scale-125 hover:rotate-12"
            />
          </a>
          <a href="https://www.facebook.com/share/1QSsD3EkVQ/">
            <img
              src={fb}
              alt="facebook"
              className="w-7 h-7 transition-transform duration-300 hover:scale-125 hover:rotate-12"
            />
          </a>
        </div>
        <p className="mt-50">&copy; 2025 All Reserved Rights.</p>
      </div>
    </>
  );
}

export default Footer;
