import Video from 'next-video';
  import getStarted from '/videos/bannerVideo.webm';

export default function BannerVideo() {
    return(
      <div className="w-full h-full">
        <Video className="h-full" controls={false} autoPlay={true} playsInline loop muted src={getStarted} />
      </div>
       )
  }