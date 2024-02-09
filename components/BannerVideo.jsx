"use client";
import 'next-cloudinary/dist/cld-video-player.css';
import { CldVideoPlayer } from 'next-cloudinary';
export default function BannerVideo() {
    return(
      <div className="w-full h-screen">
        <video className="w-full h-full object-cover brightness-50" controls={false} autoPlay  muted preload="auto playsInline">
          {/* <source src="https://firebasestorage.googleapis.com/v0/b/nextstore-a7837.appspot.com/o/localvideo.mp4?alt=media&token=030c4011-2d39-49ac-92b7-a273ba89ca54" type="video/mp4" /> */}
          <source src="/localvideo.mp4" type="video/mp4" />
        </video>
        {/* <CldVideoPlayer
        width="1000"
          height="500"
        className=" object-cover w-full h-full"
          controls={false}
          muted={true}
          autoplay
        sound={0}
        loop={true}
        src="https://res.cloudinary.com/dxvf93ovn/video/upload/v1706931839/chicagovideo_rjuqc6.mp4"
        /> */}
      </div>
       )
  }