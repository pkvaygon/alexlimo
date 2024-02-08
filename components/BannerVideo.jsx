"use client";
import 'next-cloudinary/dist/cld-video-player.css';
import getStarted from '@/public/chicagovideo.mp4';
import { CldVideoPlayer } from 'next-cloudinary';
export default function BannerVideo() {
  
    return(
      <div className="w-full h-screen">
        {/* <video className="w-full h-full object-cover brightness-50" controls={false} autoPlay loop muted preload="auto playsInline">
        <source src="https://www.b-coleman.com/wp-content/uploads/2022/06/ver2-temp-skylinevid-home.mp4" type="video/mp4" />
        </video> */}
        <CldVideoPlayer
        width="100%"
          height="100%"
        className="vjs-tech"
          controls={false}
          muted={true}
          autoplay
        sound={0}
        loop={true}
        src="https://res.cloudinary.com/dxvf93ovn/video/upload/v1706931839/chicagovideo_rjuqc6.mp4"
        />
      </div>
       )
  }