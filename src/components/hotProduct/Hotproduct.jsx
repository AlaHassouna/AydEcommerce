import React, { useEffect, useState } from "react";

const Hotproduct = ({ hotProduct }) => {
  const product = hotProduct[0];
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date().getTime() + 3600000; // 1 heure (en millisecondes)
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
   


<section className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
  <div className="grid max-w-screen-xl px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 mx-auto md:gap-4 lg:gap-8 grid-cols-1 md:grid-cols-12">
    {/* Texte */}
    <div className="mr-auto place-self-center md:col-span-6 lg:col-span-7 md:p-4">
      <h1 className="max-w-2xl mb-4 text-xl sm:text-3xl md:text-2xl lg:text-5xl font-extrabold tracking-tight leading-none dark:text-white">
        <div className="flex items-center space-x-2">
          {product.OldPrice > product.Price && (
            <div className="flex items-baseline text-xs sm:text-lg md:text-base text-gray-500 line-through dark:text-gray-400">
              {product.OldPrice.toFixed(2)}
              <span className="ml-1 text-xs align-top">Dt</span>
            </div>
          )}
          <div className="flex items-baseline text-lg sm:text-3xl md:text-xl lg:text-4xl font-bold text-[#551121] dark:text-white">
            {product.Price.toFixed(2)}
            <span className="ml-1 text-xs align-top">Dt</span>
          </div>
        </div>
      </h1>
      <h1 className="max-w-2xl mb-4 text-2xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {product.Product}
          </h1>
      <p className="max-w-2xl mb-6 font-light sm:text-lg md:text-base lg:text-xl text-gray-500 dark:text-gray-400">
        {product.Description}
      </p>

      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div
          className="bg-gradient-to-br from-[#011d28] to-blue-500 h-2 rounded-full"
          style={{ width: "70%" }}
        ></div>
      </div>

      {/* Timer */}
      <div className="flex space-x-2 mt-6 justify-center items-center text-base sm:text-2xl md:text-lg font-semibold">
        <div className="text-center flex items-center space-x-2">
          <span className="bg-blue-100 text-[#011d28] font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="text-gray-800 dark:text-gray-300">:</span>
        </div>
        <div className="text-center flex items-center space-x-2">
          <span className="bg-blue-100 text-[#011d28] font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="text-gray-800 dark:text-gray-300">:</span>
        </div>
        <div className="text-center flex items-center">
          <span className="bg-blue-100 text-[#011d28] font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
      <p className="text-center text-xs sm:text-sm md:text-base text-gray-500 mt-4 dark:text-gray-400">
        Il reste jusqu'à la fin de l'offre
      </p>
    </div>

    {/* Image */}
    <div className="md:col-span-6 lg:col-span-5 flex justify-center items-center md:p-0">
      <img
        src="https://cdn.engelbert-strauss.ch/assets/mf/images/Original/product/8.Release.3106120/T-Shirt_e_s_industry-202069-0-637605562398892502.png"
        alt="mockup"
        className="w-3.5/4 max-w-xs sm:max-w-md md:max-w-sm lg:max-w-lg"
      />
    </div>
  </div>
</section>
  );
};

export default Hotproduct;