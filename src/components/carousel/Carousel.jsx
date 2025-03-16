import React, { useState, useEffect } from "react";
import c0 from '../../assets/images/c0.webp';
import c1 from '../../assets/images/c1.webp';
import c2 from '../../assets/images/c2.webp';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    // "https://marketplace.canva.com/EAE8hiyAF3M/1/0/1600w/canva-fashion-style-landscape-banner-mc_7rOFLEMc.jpg",
    // "https://marketplace.canva.com/EAFdLCV6VuU/1/0/1600w/canva-VKnBBA3Gn7U.jpg",
    // "https://marketplace.canva.com/EAFzBsWkufQ/1/0/1600w/canva-Q3yBKYqevwA.jpg"
    c0,
    c1,
    c2
    
    
  ];

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div id="default-carousel" className="relative w-full " onClick={(event) => event.stopPropagation()}>
      {/* Carousel wrapper */}
      <div className="relative h-[700px] overflow-hidden rounded-lg rounded-t-none md:h-[700px]">
            {slides.map((slide, index) => (
                <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                >
                <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="block w-full h-full object-cover"
                    style={{
                    imageRendering: "crisp-edges", // Assure un rendu plus net
                    }}
                />
                </div>
            ))}
            </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-[#011d28]" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
