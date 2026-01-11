import black from "../assets/black.mp4";
import VideoEditing from "./Video";
import Motion from "./Motion";
import Design from "./DesignManipulation";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="relative w-full min-h-[90smh] lg:h-screen ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={black} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/5 "></div>

        <div className="relative w-full flex flex-col justify-around px-6 py-24 md:px-12 md:py-30 py-lg:px-40 lg:py-30">
          <h1 className=" text-5xl md:text-7xl lg:text-9xl font-bold">Wunna</h1>
          <h2 className=" text-lg md:text-3xl lg:text-3xl mt-10">About me</h2>
          <p className=" text-lg md:text-2xl lg:text-2xl mt-3">
            I am a graphic designer, video editor and motion designer.
          </p>
          <div>
            <button className="p-3 bg-[#fc0058] rounded-2xl mt-10 hover:bg-pink-800">
              <Link to="/contact" className="text-sm md:text-lg lg:text-lg">
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </section>
      <Design />
      <Motion />
      <VideoEditing />
    </>
  );
}

export default Home;
