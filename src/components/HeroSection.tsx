import { Box } from '@mui/material';
import bannerTablet from '../assets/banner/2.jpg';
import vdoCover from '../assets/VDO Cover Naive.mp4';

export default function HeroSection() {
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
          className="absolute inset-0 w-full h-full object-cover"
          src={vdoCover}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </Box>
    </Box>
  );
}
