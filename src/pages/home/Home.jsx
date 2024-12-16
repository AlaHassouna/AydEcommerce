import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import BestSellers from '../../components/bestSellers/BestSellers'
import Hotproduct from '../../components/hotProduct/Hotproduct'
import Cateogries from '../../components/categories/Cateogries'



const Home = () => {
  const hotProduct = [
    {
      UID: "C010",
      Product: "T-shirt",
      Description: "A comfortable and stylish t-shirt perfect for casual wear. Crafted with soft fabric, this t-shirt offers both style and comfort for everyday wear.",
      Category: "Tops",
      SubCategory: "Casual Wear",
      Brand: "AYD",
      OldPrice: 40.00,  // Increased the old price for better discount perception
      Price: 25.99,    // Adjusted price for a different price point
      Stock: 150,      // Increased stock availability
      Rating: 4.7,     // Increased rating
      Order: 250,      // Increased order number for better sales performance
      Sales: 5000,     // Increased sales number
      IsFeatured: true,
      Image: [
        "https://timshop.timhortons.ca/cdn/shop/files/693770626664_TShirtIconWhite_Front.png?v=1714573840&width=2048",
        "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-nz/S001463520/PPAGK-254-kids-Tshirt-marquee-001?cb=c7d589026f2c77059bcbd4f875f3dcf0b1a73a0c",
        "https://www.exist.com.tn/95266-large_default/t-shirt.jpg"
      ],
      Tags: ["Casual", "Comfort", "Style", "Everyday", "Menswear", "Trendy"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Red", Quantity: 12 },
            { Color: "Blue", Quantity: 18 },
            { Color: "Green", Quantity: 6 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Red", Quantity: 10 },
            { Color: "Yellow", Quantity: 14 },
            { Color: "Purple", Quantity: 8 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Blue", Quantity: 22 },
            { Color: "Green", Quantity: 12 },
            { Color: "Purple", Quantity: 10 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Red", Quantity: 6 },
            { Color: "Yellow", Quantity: 10 },
            { Color: "Purple", Quantity: 7 },
          ],
        },
      ],
      CreatedAt: "15 Dec 2024", // Updated the creation date
    },
  ];
  
  return (
    // <div>
      
    //   <Carousel/>
    //   <BestSellers/>
    // </div>
    <main class="px-4  w-full mx-auto h-auto ">
      
      <div class=" h-auto mb-4">
        <Carousel />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        
              <div
                class=" rounded-lg dark:border-gray-600 h-[300px]  md:h-[300px] "
              >
                <img src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-lg h-[560px] w-full object-cover" alt="" />
              </div>
        
              <div
                class="rounded-lg  col-span-3    h-full md:h-full"
              >
                  <div className="flex justify-between items-center mb-4">
                  <div>
                    <h1 className="block mb-0 font-medium text-[23px] text-gray-900 dark:text-white">
                      Meilleures ventes
                    </h1>
                    <p className="mt-[-4px] text-xs font-normal text-gray-500 dark:text-gray-300">
                      Ne manquez pas l'offre actuelle jusqu'à la fin de janvier.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="py-2.5 px-5 text-sm font-medium text-gray-900 
                    focus:outline-none bg-white rounded-full border border-gray-200 
                    hover:bg-gray-100 hover:text-[#011d28e6] focus:z-10 focus:ring-4 
                    focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 
                    dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
                    dark:hover:bg-gray-700 flex items-center gap-2"
                  >
                    Voir tout
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </button>
            </div>

            <BestSellers/>

        </div>
        

        
      </div>
      <div class="grid grid-cols-4 gap-4 mb-4">
        <div
          class="rounded-lg border-gray-300 dark:border-gray-600 h-full md:h-full"
        >
          <img src="https://images.pexels.com/photos/3963101/pexels-photo-3963101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-lg h-[475px] w-full'/>
        </div>
        <div
          class="rounded-lg h-full md:h-full col-span-3"
        >
         <Hotproduct hotProduct={hotProduct} />

        </div>
        
      </div>
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
      >

        <Cateogries/>
      </div>
      <div
        class="rounded-lg  h-full mb-4"
      >
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72 col-span-3"
        ></div>
        
      </div>
    </main>
  )
}

export default Home