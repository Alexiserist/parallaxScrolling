'use client';

import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

export default function ParallaxPage() {
  return (
    <ParallaxBanner
      layers={[
        { image: '/images/banner-background.jpg', speed: -20 },
        {
          speed: -30,
          children: (
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-white font-thin">Hello World!</h1>
            </div>
          ),
        },
        { image: '/images/banner-foreground.png', speed: -20 },
      ]}
      className="h-[100vh]"
    />
  );
}