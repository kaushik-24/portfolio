'use client'
import { useRef, useState } from "react";

type FeaturesProps = {
  children: React.ReactNode;
  className: string;

}

type BentoProps = {
  src: string;
  title: React.ReactNode;
  description: string;
}

const BentoTilt = ({children, className= ''}: FeaturesProps) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: any) => {
    if(!itemRef.current) return;

    const { left, top, width, height} = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)
      scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform)
  }

  const handleMouseLeave = () => {
    setTransformStyle(''); 
  }

  return (
  <div className={className} ref={itemRef}
    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
    style={{transform: transformStyle}}>
      {children}
  </div>
  )
}

const BentoCard = ({src, title, description}: BentoProps) => {
  return (
  <div className="relative size-full" id="features">
      <video 
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover
        object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between 
        p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
          <p className="mt-3  max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
      {title}
  </div>
  )
}
const BentoImg = ({src, title, description}: BentoProps) => {
  return (
  <div className="relative size-full ">
      <img
        src={src}
        className="absolute left-0 top-0 size-full object-cover
        object-center opacity-55"
      />
      <div className="relative z-10 flex size-full flex-col justify-between 
        p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
          <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
      {title}
  </div>
  )
}

const Features = () => {
  return (
  <section className="bg-black pb-52 overflow-hidden">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">Into the nightlife atmoshphere</p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself into the club for an unbelieveable experience with live music and djs. 
        </p>
        </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md
        md:h-[65vh]">
        <BentoCard 
          src="videos/levels-reels-bar-1.mp4"
          title={
          <>b<b>a</b>r and Lou<b>n</b>ge </>}
          description="Variety of drinks, including cocktails, wine and spirits served directly from bartenders and with lounge for relaxed
            space designed for patrons to unwind in a laid-back atmosphere."
        />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 
            md:row-span-2">
            <BentoImg 
              src="img/levels-dj-4.webp"
              title={<>Live <b>m</b>usic & <b>D</b>J's</>}
              description="Featuring live music performances and world-class DJs, 
              it’s a hub for dancing, socializing, and unforgettable experiences."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 
          md:ms-0">
          <BentoImg 
            src="img/levels-bar-1.webp"
            title={<>Refreshmen<b>t</b>s</>}
            description="an array of cocktails, mocktails, spirits, and 
              mixers prepared by skilled bartenders, complemented by 
              light bites, snacks, or small plates."
          />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoImg 
            src="img/levels-stage-1.webp"
            title={<>St<b>a</b>ge</>}
            description="Equipped with cutting-edge sound and lighting systems,
              it delivers an unforgettable, immersive experience that keeps the 
              energy alive all night."
          />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64
                text-black">Free<br /> s-h-o-t-s for the ladies</h1>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
          <video
            src="videos/levels-stage-1.mp4" 
            muted
            loop  
            autoPlay
            className="size-full object-cover object-center"
          />
          </BentoTilt>
        </div>
      </div>
  </section>
  )
}

export default Features

