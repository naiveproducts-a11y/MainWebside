import { Box } from '@mui/material';
import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import bannerTablet from '../assets/banner/2.jpg';
import vdoCover from '../assets/VDO Cover Naive.mp4';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <Box component="section" className="w-full flex flex-col">
      <Box
        className="w-full h-full relative overflow-hidden"
      >
        <picture>
          <img
            src={bannerTablet}
            alt="Laboratory Banner"
            className="w-full h-full object-cover"
          />
        </picture>
      </Box>

      <Box className="w-full h-[400px] md:h-[600px] lg:h-[760px] bg-slate-900 overflow-hidden relative">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={vdoCover}
          autoPlay
          muted={isMuted}
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Floating Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 text-white backdrop-blur-md border border-white/30 transition-all duration-300 active:scale-95 shadow-lg group"
          aria-label={isMuted ? "Unmute Video" : "Mute Video"}
        >
          {isMuted ? (
            <VolumeX size={20} className="transition-transform group-hover:scale-105" />
          ) : (
            <Volume2 size={20} className="transition-transform group-hover:scale-105" />
          )}
        </button>
      </Box>
    </Box>
  );
}
