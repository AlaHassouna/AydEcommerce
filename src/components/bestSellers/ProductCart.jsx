
import React, { useRef } from 'react';
import Slider from 'react-slick'; // Import Slider component

const ProductCart = ({ products }) => {
  const sliderRef = useRef(null); // Référence pour accéder au carrousel

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 products at once
    slidesToScroll: 1, // Scroll 3 products at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 products on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 products on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 product on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative mb-4 ">
      {/* Boutons de contrôle sur les côtés */}
      <button
        onClick={() => sliderRef.current.slickPrev()} // Appel de la méthode précédente
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#011d280c] p-3 text-[#011d28] hover:bg-[#011d2814]"
        style={{ transform: 'translateY(-50%)' }}
      >
       <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
        </svg>

      </button>

      <button
        onClick={() => sliderRef.current.slickNext()} // Appel de la méthode suivante
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#011d280c] p-3 text-[#011d28] hover:bg-[#011d2814]"
        style={{ transform: 'translateY(-50%)' }}
      >
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
    </svg>

      </button>

      {/* Composant Slider */}
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div
            key={product.UID}
            className="h-[500px] w-33 px-3 gap-x-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            
            <div className="h-56 ">
              <a href="#">
                <img
                  className="mx-auto h-full object-contain"
                  src={product.Image[0]} // Affiche la première image
                  alt={`Image of ${product.Product}`}
                />
              </a>
            </div>
            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                {product.OldPrice > product.Price && (
                  <span className="rounded bg-[#551121] px-2.5 py-0.5 text-xs font-medium text-white dark:bg-primary-900 dark:text-primary-300">
                    {Math.round(((product.OldPrice - product.Price) * 100) / product.OldPrice)}% de réduction
                  </span>
                )}
                <div class="flex items-center justify-end gap-1">
              <button type="button" data-tooltip-target="tooltip-quick-look-5" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only"> Quick look </span>
                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                  <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </button>
              <div id="tooltip-quick-look-5" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Quick look
                <div class="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <button type="button" data-tooltip-target="tooltip-add-to-favorites-5" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only"> Add to Favorites </span>
                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                </svg>
              </button>
              <div id="tooltip-add-to-favorites-5" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div class="tooltip-arrow" data-popper-arrow=""></div>
              </div>
              </div>
              </div>

              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                {product.Product}
              </a>

              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(Math.round(product.Rating))].map((_, index) => (
                    <svg
                      key={index}
                      className="h-4 w-4 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {product.Rating} / 5
                </span>
              </div>

              {/* <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {product.OldPrice > product.Price
  ? `${product.Description.slice(0, 60)}...`
  : `${product.Description.slice(0, 100)}...`}
              </p> */}
              <ul class="mt-2 flex items-center gap-4">
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Meilleure Vente</p>
            </li>

            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Meilleur Prix</p>
            </li>
          </ul>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  {/* {product.OldPrice > product.Price && (
                    <div className="text-sm text-gray-500 line-through dark:text-gray-400">
                      {product.OldPrice.toFixed(2)}
                      <span className="ml-1 text-xs">Dt</span>
                    </div>
                  )} */}
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {product.Price.toFixed(2)}
                    <span className="ml-1 text-xs">Dt</span>
                  </div>
                </div>

                  
                <button
                  type="button"
                  className="rounded-lg bg-[#011d28] px-4 py-2 text-white hover:bg-[#011d28e6]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCart;
