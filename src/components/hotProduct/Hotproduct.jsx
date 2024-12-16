import React, { useEffect, useState } from 'react'

const Hotproduct = ({hotProduct}) => {
    const product=hotProduct[0]
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
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            setTimeLeft({ hours, minutes, seconds });
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <section class="bg-white dark:bg-gray-900 rounded-lg shadow-2xl">
              <div class="grid max-w-screen-xl px-20 py-12 mx-auto lg:gap-8  grid-cols-12">
                  <div class="mr-auto place-self-center lg:col-span-7">
                      <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">

                      <div className="flex items-center space-x-2">
                        {product.OldPrice > product.Price && (
                            <div className="flex items-baseline text-lg text-gray-500 line-through dark:text-gray-400">
                            {product.OldPrice.toFixed(2)}
                            <span className="ml-1 text-sm align-top">Dt</span>
                            </div>
                        )}
                        <div className="flex items-baseline text-4xl font-bold text-[#551121] dark:text-white">
                            {product.Price.toFixed(2)}
                            <span className="ml-1 text-sm align-top">Dt</span>
                        </div>
                        </div>


                      </h1>
                      <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{product.Product}</h1>
                        
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                      {product.Description}
                      </p>
                     
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gradient-to-br from-[#011d28] to-blue-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <div className="flex space-x-4 mt-8 justify-center items-center text-4xl font-semibold">
                        <div className="text-center flex items-center space-x-2">
                            <span className="bg-blue-100 text-[#011d28] font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            {String(timeLeft.hours).padStart(2, "0")}
                            </span>
                            <span className="text-gray-800 dark:text-gray-300">:</span>
                        </div>
                        <div className="text-center flex items-center space-x-2">
                            <span className="bg-blue-100 text-[#011d28] font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            {String(timeLeft.minutes).padStart(2, "0")}
                            </span>
                            <span className="text-gray-800 dark:text-gray-300">:</span>
                        </div>
                        <div className="text-center flex items-center">
                            <span className="bg-blue-100 text-[#011d28] font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            {String(timeLeft.seconds).padStart(2, "0")}
                            </span>
                        </div>
                        </div>
                        <p className="max-w-2xl font-light text-gray-500 mt-4 md:text-lg lg:text-xl dark:text-gray-400 text-center">
                        Il reste jusqu'à la fin de l'offre
                        </p>

                  </div>
                  
                  <div class="hidden  lg:mt-0 lg:col-span-5 lg:flex">
                      <img src="https://cdn.engelbert-strauss.ch/assets/mf/images/Original/product/8.Release.3106120/T-Shirt_e_s_industry-202069-0-637605562398892502.png" alt="mockup"/>
                  </div>                
              </div>
          </section>
  )
}

export default Hotproduct