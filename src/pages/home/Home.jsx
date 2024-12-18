import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import BestSellers from '../../components/bestSellers/BestSellers'
import Hotproduct from '../../components/hotProduct/Hotproduct'
import Cateogries from '../../components/categories/Cateogries'
import CategorySearch from '../../components/categorySearch/CategorySearch'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'



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
  const mockCategories = [
    { id: 1, Name: 'T-Shirts', Icon: 'https://cdn-icons-png.flaticon.com/512/79/79693.png' },
    { id: 2, Name: 'Jeans', Icon: 'https://cdn-icons-png.flaticon.com/512/664/664466.png' },
    { id: 3, Name: 'Shoes', Icon: 'https://cdn-icons-png.flaticon.com/512/6000/6000380.png' },
    { id: 4, Name: 'Jackets', Icon: 'https://cdn-icons-png.flaticon.com/512/3531/3531671.png' },
    { id: 5, Name: 'Accessories', Icon: 'https://cdn-icons-png.flaticon.com/512/7695/7695937.png' },
    { id: 6, Name: 'Hats', Icon: 'https://cdn-icons-png.flaticon.com/512/864/864744.png' },
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
      <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-4 mb-4">
          {/* Image Section */}
          <div className="flex justify-center items-center rounded-lg dark:border-gray-600 h-[300px] sm:h-[400px] lg:h-full w-full">
            <img
              src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="rounded-lg max-h-full w-full object-cover"
              alt=""
            />
          </div>
          {/* Content Section */}
          <div className="rounded-lg col-span-3 h-full">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4 md:mt-4 flex-wrap">
              <div>
                <h1 className="block mb-0 font-medium text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-white">
                  Meilleures ventes
                </h1>
                <p className="mt-[-4px] text-xs sm:text-sm lg:text-base font-normal text-gray-500 dark:text-gray-300">
                  Ne manquez pas l'offre actuelle jusqu'à la fin de janvier.
                </p>
              </div>

              <button
                type="button"
                className="py-2 px-4 sm:py-2.5 sm:px-5 text-xs sm:text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-[#011d28e6] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center gap-2 mt-4 sm:mt-0"
              >
                Voir tout
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800 dark:text-white"
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

            {/* Best Sellers Component */}
            <BestSellers />
          </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="rounded-lg border-gray-300 dark:border-gray-600 h-[300px] sm:h-[400px] lg:h-[300px] md:order-1">
          <img
            src="https://images.pexels.com/photos/3963101/pexels-photo-3963101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-lg h-auto w-full md:h-[475px]"
          />
        </div>
        <div className="rounded-lg h-full md:h-full md:col-span-3 md:order-2">
          <Hotproduct hotProduct={hotProduct} />
        </div>
      </div>
      
      <div
        class="rounded-lg h-full mb-4"
      >
        <CategorySearch mockCategories={mockCategories}/>
        {/* <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Super réduction!</span>  pour votre premier achat.
          </div>
        </div> */}
      </div>
      <div
        class="rounded-lg border-gray-300 dark:border-gray-600 h-full mb-4"
      >
        <Products mockCategories={mockCategories}/>
      </div>
      <div
        class="rounded-lg  h-96 mb-4"
      >
        <Footer/>
      </div>
      
    </main>
  )
}

export default Home