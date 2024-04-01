import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const images = [
    "src/assets/rectangle-1.svg",
    "src/assets/rectangle-2.svg",
    "src/assets/rectangle-3.svg",
    "src/assets/rectangle-4.svg",
    "src/assets/rectangle-5.svg",
    "src/assets/rectangle-2.svg",
    "src/assets/rectangle-3.svg",
    "src/assets/rectangle-4.svg",
    "src/assets/rectangle-5.svg",
    "src/assets/rectangle-2.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + direction;
        if (nextIndex >= images.length) {
          nextIndex = images.length - 1;
          setDirection(-1);
        } else if (nextIndex < 0) {
          nextIndex = 0;
          setDirection(1);
        }
        return nextIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [direction, images.length]);

  const imageContainerStyle = {
    width: `${images.length * 100}%`,
    transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
    transition: "transform 1s linear",
  };

  return (
    <div className="flex flex-row items-center justify-center bg-white pb-8 order-2 md:order-1">
      <div className="flex overflow-hidden">
        <div className="flex gap-4" style={imageContainerStyle}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Rectangle ${index + 1}`}
              className="h-full w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
