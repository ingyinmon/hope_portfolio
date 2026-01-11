import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Design from "./pages/Design";
import Motion from "./pages/Motion";
import Video from "./pages/Video";
import Error from "./pages/Error";
import DesignImages from "./pages/DesignImages";
import MotionVideoes from "./pages/MotionVideoes";
import VideoEditing from "./pages/VideoEditing";
import ImageLogo from "./pages/ImageLogo";
import PodcastaudioImages from "./pages/PodcastaudioImages";
import ImageManipulation from "./pages/ImageManipulation";
import ImageFutures from "./pages/ImageFutures";
import SocialDesignImages from "./pages/SocialDesignImages";
import TextEffectsImages from "./pages/TextEffectsImages";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/design" element={<Design />} />
            <Route path="/motion" element={<Motion />} />
            <Route path="/video" element={<Video />} />
            <Route path="/design/:id" element={<DesignImages />} />
            <Route path="/motion/:id" element={<MotionVideoes />} />
            <Route path="/video/:id" element={<VideoEditing />} />
            <Route path="/logo/:id" element={<ImageLogo />} />
            <Route path="/podcast/:id" element={<PodcastaudioImages />} />
            <Route path="/manipulation/:id" element={<ImageManipulation />} />
            <Route path="/future/:id" element={<ImageFutures />} />
            <Route path="/social/:id" element={<SocialDesignImages />} />
            <Route path="/texteffects/:id" element={<TextEffectsImages />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
