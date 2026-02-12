import React, { useEffect, useRef, useState } from 'react';

const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const logos = [
    { name: 'Licious', image: '/images/licious.jpg' },
    { name: 'Uniliver', image: '/images/unilever.jpg' },
    { name: 'The Yellow Chili', image: '/images/theyellowchilli.jpg' },
    { name: 'AVS', image: '/images/avs.jpg' },
    { name: 'Barrack', image: '/images/barrack.jpg' },
    { name: 'cafeunbound', image: '/images/cafeunbound.jpg' },
    { name: 'gobblers', image: '/images/gobblers.jpg' },
    { name: 'handise', image: '/images/handise.jpg' },
    { name: 'kikkoman', image: '/images/kikkoman.jpg' },
    { name: 'knor', image: '/images/knor.jpg' },
    { name: 'missdoozy', image: '/images/missdoozi.jpg' },
    { name: 'momomagiccafe', image: '/images/momomagiccafe.jpg' },
    { name: 'noidawery', image: '/images/noidawery.jpg' },
    { name: 'nutkhut', image: '/images/nutkhut.jpg' },
    { name: 'trueelements', image: '/images/trueelements.jpg' },
    {name:'HandiHighway', image:'/images/handihighway.jpg' },
    {name:'knockit',image:'/images/knockit.jpg' },

  ];

  const doublelogos = [...logos, ...logos];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let translateX = 0;
    const speed = 0.5;

    const slide = () => {
      if (!isPaused) {
        translateX -= speed;
        if (translateX <= -slider.scrollWidth / 2) {
          translateX = 0;
        }
        slider.style.transform = `translateX(${translateX}px)`;
      }
      requestAnimationFrame(slide);
    };

    requestAnimationFrame(slide);
  }, [isPaused]);

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Trusted by Renowned Brands
        </h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="inline-flex"
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {doublelogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-32 h-32 mx-4 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;