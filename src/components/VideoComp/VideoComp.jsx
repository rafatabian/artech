
import "./VideoComp.css"
import { useRef } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import back_video from "../../assets/videos/artech_main_video.mp4"

export default function Layout() {

      const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // speed
    }
  }, []);

  return (
    <div className="layout">
      <video
      ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="none" // helps load immediately
      >
        <source src={back_video} type="video/mp4" />
      </video>

      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
}
