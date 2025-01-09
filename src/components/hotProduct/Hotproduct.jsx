import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hotproduct = ({ hotProduct }) => {
 
// console.log("hotProduct ",hotProduct)
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
   

<Link to={`/hotProduct/${hotProduct.UID}`} state={{ hotProduct }}>
  <section className="bg-white border border-gray-200 dark:bg-gray-900 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
  style={{
      backgroundImage: 'linear-gradient(#ffffff, #fff0f0)',
    }}>
    <div className="grid max-w-screen-xl px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 mx-auto md:gap-4 lg:gap-8 grid-cols-1 md:grid-cols-12">
      
      {/* Texte */}
      <div className="mr-auto place-self-center md:col-span-6 lg:col-span-7 md:p-4">
        <div className="flex items-center space-x-2 mb-4">
          {hotProduct.OldPrice > hotProduct.Price && (
            <span className="text-gray-500 line-through dark:text-gray-400 text-xs sm:text-lg">
              {hotProduct.OldPrice}
              <span className="ml-1 text-xs align-top">Dt</span>
            </span>
          )}
          <span className="text-lg sm:text-3xl font-bold text-[#551121] dark:text-white">
            {hotProduct.Price}
            <span className="ml-1 text-xs align-top">Dt</span>
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold dark:text-white mb-4">
          {hotProduct.Product}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          {hotProduct.Description}
        </p>
        
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div
            className="bg-gradient-to-br from-[#011d28] to-blue-500 h-2 rounded-full animate-pulse"
            style={{ width: "70%" }}
          ></div>
        </div>
        
        <div className="flex space-x-2 mt-6 justify-center items-center text-base font-semibold">
          <div className="text-center">
            <span className="bg-blue-100 text-[#011d28] px-3 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
          </div>
          <span className="text-gray-800 dark:text-gray-300">:</span>
          <div className="text-center">
            <span className="bg-blue-100 text-[#011d28] px-3 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
          </div>
          <span className="text-gray-800 dark:text-gray-300">:</span>
          <div className="text-center">
            <span className="bg-blue-100 text-[#011d28] px-3 py-2 rounded dark:bg-blue-900 dark:text-blue-300">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-4 dark:text-gray-400">
          Il reste jusqu'à la fin de l'offre
        </p>
      </div>
      
      {/* Image */}
      <div className="md:col-span-6 lg:col-span-5 flex justify-center items-center md:p-0">
        <img
          src={hotProduct.Image[0]}
          alt="Product Image"
          className="w-3.5/4 max-w-xs rounded-lg  transition transform hover:scale-110"
        />
      </div>
    </div>
  </section>
</Link>

  );
};

export default Hotproduct;