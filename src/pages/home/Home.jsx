import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import BestSellers from '../../components/bestSellers/BestSellers'
import Hotproduct from '../../components/hotProduct/Hotproduct'
import Cateogries from '../../components/categories/Cateogries'
import CategorySearch from '../../components/categorySearch/CategorySearch'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'



const Home = () => {
  const products = [
    {
        UID: "C001",
        Product: "T-shirt",
        Description: "Un T-shirt classique et confortable, parfait pour toutes les occasions décontractées. Fabriqué en coton doux pour un confort optimal toute la journée.",
        Category: "Tops",
        SubCategory: "Casual Wear",
        Brand: "AYD",
        OldPrice: 35.00,
        Price: 19.99,
        Stock: 100,
        Rating: 4.3,
        Order: 200,
        Sales: 3000,
        IsFeatured: true,
        Image: [
            "https://timshop.timhortons.ca/cdn/shop/files/693770626664_TShirtIconWhite_Front.png?v=1714573840&width=2048",
            "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-nz/S001463520/PPAGK-254-kids-Tshirt-marquee-001?cb=c7d589026f2c77059bcbd4f875f3dcf0b1a73a0c",
            "https://www.exist.com.tn/95266-large_default/t-shirt.jpg"
        ],
        Tags: ["Casual", "Cotton", "Summer", "Unisex"],
        Variants: [
            {
                Size: "S",
                Colors: [
                    { Color: "Red", Quantity: 10 },
                    { Color: "Blue", Quantity: 15 },
                    { Color: "Green", Quantity: 5 },
                ]
            },
            {
                Size: "M",
                Colors: [
                    { Color: "Red", Quantity: 8 },
                    { Color: "Yellow", Quantity: 12 },
                    { Color: "Purple", Quantity: 7 },
                ]
            },
            {
                Size: "L",
                Colors: [
                    { Color: "Blue", Quantity: 20 },
                    { Color: "Green", Quantity: 10 },
                    { Color: "Purple", Quantity: 9 },
                ]
            },
            {
                Size: "XL",
                Colors: [
                    { Color: "Red", Quantity: 5 },
                    { Color: "Yellow", Quantity: 8 },
                    { Color: "Purple", Quantity: 6 },
                ]
            }
        ],
        CreatedAt: "02 Feb 2024"
    },
    {
        UID: "C002",
        Product: "Jeans",
        Description: "Un jean robuste et tendance, parfait pour compléter n'importe quelle tenue. Conçu pour durer et offrir un style intemporel.",
        Category: "Bottoms",
        SubCategory: "Denim",
        Brand: "AYD",
        OldPrice: 65.00,
        Price: 49.99,
        Stock: 60,
        Rating: 4.5,
        Order: 150,
        Sales: 2500,
        IsFeatured: false,
        Image: ["https://www.wibra.fr/wp-content/uploads/sites/5/2023/07/06932687-000-01.png"],
        Tags: ["Denim", "Casual", "Durable"],
        Variants: [
            {
                Size: "28",
                Colors: [
                    { Color: "Black", Quantity: 15 },
                    { Color: "Blue", Quantity: 20 }
                ]
            },
            {
                Size: "30",
                Colors: [
                    { Color: "Blue", Quantity: 10 },
                    { Color: "Gray", Quantity: 15 }
                ]
            }
        ],
        CreatedAt: "15 Jan 2024"
    },
    {
        UID: "C003",
        Product: "Jacket",
        Description: "Une veste élégante et chaude pour affronter les jours les plus froids avec style. Matériau imperméable et coupe-vent.",
        Category: "Outerwear",
        SubCategory: "Winter Wear",
        Brand: "AYD",
        OldPrice: 105.00,
        Price: 89.99,
        Stock: 40,
        Rating: 4.6,
        Order: 90,
        Sales: 1800,
        IsFeatured: true,
        Image: ["https://www.craftclothing.ph/cdn/shop/products/BM12-W-F_1024x1024.png?v=1644291853"],
        Tags: ["Winter", "Waterproof", "Comfort"],
        Variants: [
            {
                Size: "M",
                Colors: [
                    { Color: "Black", Quantity: 10 },
                    { Color: "Blue", Quantity: 8 }
                ]
            },
            {
                Size: "L",
                Colors: [
                    { Color: "Gray", Quantity: 7 },
                    { Color: "Navy", Quantity: 5 }
                ]
            }
        ],
        CreatedAt: "10 Dec 2023"
    },
    {
      UID: "C004",
      Product: "Dress",
      Description: "Elegant and stylish evening wear designed to make a statement at any formal or semi-formal occasion. Made from premium fabrics to ensure comfort and sophistication.",
      Category: "Dresses",
      SubCategory: "Evening Wear",
      Brand: "AYD",
      OldPrice: 95.00,
      Price: 69.99,
      Stock: 50,
      Rating: 4.7,
      Order: 120,
      Sales: 2400,
      IsFeatured: false,
      Image: ["https://www.meshki.us/cdn/shop/files/B125-2024.10.28-MESHKI_9306.png?v=1733347943&width=533"],
      Tags: ["Elegant", "Formal", "Evening", "Chic", "Women"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Black", Quantity: 10 },
            { Color: "Red", Quantity: 8 },
            { Color: "Navy Blue", Quantity: 12 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Black", Quantity: 12 },
            { Color: "Emerald Green", Quantity: 10 },
            { Color: "Maroon", Quantity: 15 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Black", Quantity: 8 },
            { Color: "Red", Quantity: 9 },
            { Color: "Champagne", Quantity: 7 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Black", Quantity: 6 },
            { Color: "Silver", Quantity: 5 },
            { Color: "Gold", Quantity: 4 },
          ],
        },
      ],
      CreatedAt: "05 Feb 2024",
    },
    {
      UID: "C005",
      Product: "Sweater",
      Description: "Cozy and warm knitwear sweater perfect for chilly days. Its versatile design makes it suitable for casual outings or relaxed office wear.",
      Category: "Tops",
      SubCategory: "Knitwear",
      Brand: "AYD",
      OldPrice: 39.99,
      Price: 39.99,
      Stock: 80,
      Rating: 4.4,
      Order: 100,
      Sales: 2000,
      IsFeatured: true,
      Image: ["https://fjallraven.com.au/cdn/shop/products/Ovik_Nordic_Sweater_M_82020-020_A_MAIN_FJR.png?v=1702871491"],
      Tags: ["Casual", "Knitwear", "Winter", "Cozy", "Unisex"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Grey", Quantity: 15 },
            { Color: "Beige", Quantity: 12 },
            { Color: "White", Quantity: 10 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Grey", Quantity: 20 },
            { Color: "Beige", Quantity: 15 },
            { Color: "Black", Quantity: 8 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Grey", Quantity: 25 },
            { Color: "Navy Blue", Quantity: 10 },
            { Color: "Olive Green", Quantity: 12 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Charcoal", Quantity: 10 },
            { Color: "Cream", Quantity: 7 },
            { Color: "Brown", Quantity: 5 },
          ],
        },
      ],
      CreatedAt: "06 Feb 2024",
    },
    {
      UID: "C006",
      Product: "Shorts",
      Description: "Lightweight and comfortable shorts designed for casual and outdoor activities. Crafted from durable materials to ensure longevity.",
      Category: "Bottoms",
      SubCategory: "Casual Wear",
      Brand: "AYD",
      OldPrice: 45.99,
      Price: 24.99,
      Stock: 120,
      Rating: 4.3,
      Order: 130,
      Sales: 2200,
      IsFeatured: false,
      Image: ["https://s7d2.scene7.com/is/image/FoxRacing/32240001_1?$dw_detn1$&fmt=webp-alpha"],
      Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Khaki", Quantity: 20 },
            { Color: "Blue", Quantity: 15 },
            { Color: "Black", Quantity: 12 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Grey", Quantity: 30 },
            { Color: "Blue", Quantity: 20 },
            { Color: "White", Quantity: 15 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Navy", Quantity: 25 },
            { Color: "Brown", Quantity: 18 },
            { Color: "Black", Quantity: 10 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Khaki", Quantity: 15 },
            { Color: "Grey", Quantity: 12 },
            { Color: "Blue", Quantity: 8 },
          ],
        },
      ],
      CreatedAt: "07 Feb 2024",
    },
    {
      UID: "C007",
      Product: "Skirt",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
      Category: "Bottoms",
      SubCategory: "Office Wear",
      Brand: "AYD",
      OldPrice: 45.00,
      Price: 29.99,
      Stock: 70,
      Rating: 4.5,
      Order: 80,
      Sales: 1400,
      IsFeatured:true,
      Image: ["https://cdn.shopify.com/s/files/1/0528/3407/4795/files/packshot_2_206610_1000_Front_1_FQMINDY-SKIRT_20Black_6af0436f-493e-4d28-b03c-0d5425b32de6_540x.png?v=1729064444"],
      Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Khaki", Quantity: 20 },
            { Color: "Blue", Quantity: 15 },
            { Color: "Black", Quantity: 12 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Grey", Quantity: 30 },
            { Color: "Blue", Quantity: 20 },
            { Color: "White", Quantity: 15 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Navy", Quantity: 25 },
            { Color: "Brown", Quantity: 18 },
            { Color: "Black", Quantity: 10 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Khaki", Quantity: 15 },
            { Color: "Grey", Quantity: 12 },
            { Color: "Blue", Quantity: 8 },
          ],
        },
      ],
      CreatedAt: "07 Feb 2024",
  },
  {
      UID: "C008",
      Product: "Hoodie",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
      Category: "Outerwear",
      SubCategory: "Casual Wear",
      Brand: "AYD",
      OldPrice: 49.99,
      Price: 49.99,
      Stock: 50,
      Rating: 4.8,
      Order: 200,
      Sales: 4000,
      IsFeatured:false,
      Image: ["https://timshop.timhortons.ca/cdn/shop/files/693770626480_HoodieAlwaysFreshBlack_Front.png?v=1714573073&width=2048"],
      Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Khaki", Quantity: 20 },
            { Color: "Blue", Quantity: 15 },
            { Color: "Black", Quantity: 12 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Grey", Quantity: 30 },
            { Color: "Blue", Quantity: 20 },
            { Color: "White", Quantity: 15 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Navy", Quantity: 25 },
            { Color: "Brown", Quantity: 18 },
            { Color: "Black", Quantity: 10 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Khaki", Quantity: 15 },
            { Color: "Grey", Quantity: 12 },
            { Color: "Blue", Quantity: 8 },
          ],
        },
      ],
      CreatedAt: "07 Feb 2024",
  },
  {
      UID: "C009",
      Product: "Polo Shirt",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
      Category: "Tops",
      SubCategory: "Smart Casual",
      Brand: "AYD",
      OldPrice: 34.99,
      Price: 34.99,
      Stock: 90,
      Rating: 4.6,
      Order: 140,
      Sales: 2800,
      IsFeatured:true,
      Image: ["https://owayo-cdn.com/cdn-cgi/image/format=auto,fit=contain,width=490/newhp/img/productHome/productSeitenansicht/productservice/poloshirt_classic_herren/st3000_blm.png"],
      Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Khaki", Quantity: 20 },
            { Color: "Blue", Quantity: 15 },
            { Color: "Black", Quantity: 12 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Grey", Quantity: 30 },
            { Color: "Blue", Quantity: 20 },
            { Color: "White", Quantity: 15 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Navy", Quantity: 25 },
            { Color: "Brown", Quantity: 18 },
            { Color: "Black", Quantity: 10 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Khaki", Quantity: 15 },
            { Color: "Grey", Quantity: 12 },
            { Color: "Blue", Quantity: 8 },
          ],
        },
      ],
      CreatedAt: "07 Feb 2024",
  },
  {
      UID: "C010",
      Product: "Blazer",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
      Category: "Outerwear",
      SubCategory: "Formal Wear",
      Brand: "AYD",
      OldPrice: 115.00,
      Price: 99.99,
      Stock: 30,
      Rating: 4.7,
      Order: 70,
      Sales: 1500,
      IsFeatured:false,
      Image: ["https://media.balmain.com/image/upload/f_auto,q_auto,dpr_auto/c_fill,w_375,h_530/sfcc/balmain/hi-res/CF1SG008WB080PAF?_i=AG"],
      Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Khaki", Quantity: 20 },
            { Color: "Blue", Quantity: 15 },
            { Color: "Black", Quantity: 12 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Grey", Quantity: 30 },
            { Color: "Blue", Quantity: 20 },
            { Color: "White", Quantity: 15 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Navy", Quantity: 25 },
            { Color: "Brown", Quantity: 18 },
            { Color: "Black", Quantity: 10 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Khaki", Quantity: 15 },
            { Color: "Grey", Quantity: 12 },
            { Color: "Blue", Quantity: 8 },
          ],
        },
      ],
      CreatedAt: "07 Feb 2024",
      
  },
  {
      UID: "C011",
      Product: "Tracksuit",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
      Category: "Activewear",
      SubCategory: "Sportswear",
      Brand: "AYD",
      OldPrice: 75.00,
      Price: 59.99,
      Stock: 40,
      Rating: 4.4,
      Order: 90,
      Sales: 1700,
      IsFeatured:true,
      Image: ["https://www.hummel.fr/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwf266066e/images/packshot/213323-7010.png?sw=1028&sh=1370&sm=fit&q=90"],
      Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Khaki", Quantity: 20 },
            { Color: "Blue", Quantity: 15 },
            { Color: "Black", Quantity: 12 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Grey", Quantity: 30 },
            { Color: "Blue", Quantity: 20 },
            { Color: "White", Quantity: 15 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Navy", Quantity: 25 },
            { Color: "Brown", Quantity: 18 },
            { Color: "Black", Quantity: 10 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Khaki", Quantity: 15 },
            { Color: "Grey", Quantity: 12 },
            { Color: "Blue", Quantity: 8 },
          ],
        },
      ],
      CreatedAt: "07 Feb 2024",
  },
  {
      UID: "C012",
      Product: "Scarf",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
      Category: "Accessories",
      SubCategory: "Winter Accessories",
      Brand: "AYD",
      OldPrice: 14.99,
      Price: 14.99,
      Stock: 200,
      Rating: 4.2,
      Order: 250,
      Sales: 3700,
      IsFeatured:true,
      Image: ["https://www.french-scarf.com/ar-men-s-silk-scarf-red-charles-336_25771574.png"],
      Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
      Variants: [
        {
          Size: "S",
          Colors: [
            { Color: "Khaki", Quantity: 20 },
            { Color: "Blue", Quantity: 15 },
            { Color: "Black", Quantity: 12 },
          ],
        },
        {
          Size: "M",
          Colors: [
            { Color: "Grey", Quantity: 30 },
            { Color: "Blue", Quantity: 20 },
            { Color: "White", Quantity: 15 },
          ],
        },
        {
          Size: "L",
          Colors: [
            { Color: "Navy", Quantity: 25 },
            { Color: "Brown", Quantity: 18 },
            { Color: "Black", Quantity: 10 },
          ],
        },
        {
          Size: "XL",
          Colors: [
            { Color: "Khaki", Quantity: 15 },
            { Color: "Grey", Quantity: 12 },
            { Color: "Blue", Quantity: 8 },
          ],
        },
      ],
      CreatedAt: "07 Feb 2024",
  }
];
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
      
      <div class=" h-auto mb-4 "  >
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
        <h2 class="ml-5 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">RÉSERVEZ PAR ICI</h2>

        <Products mockCategories={mockCategories} products={products}/>
      </div>
      
      
    </main>
  )
}

export default Home