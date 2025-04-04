import React, { useEffect, useState } from 'react'
import Carousel from '../../components/carousel/Carousel'
import BestSellers from '../../components/bestSellers/BestSellers'
import Hotproduct from '../../components/hotProduct/Hotproduct'
import Cateogries from '../../components/categories/Cateogries'
import CategorySearch from '../../components/categorySearch/CategorySearch'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';



const Home = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  // const mockCategories= [
//   {
//     id: 1,
//     Name: "T-Shirts",
//     subCategorie: [
//       "Cartoons",
//       "Films",
//       "Animes",
//       "Jeux vidéo",
//       "Art abstrait",
//       "Polo T-Shirts",
//       "Casual"
//     ],
//     Icon: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     id: 2,
//     Name: "Hoodies",
//     subCategorie: [
//       "Cartoons",
//       "Films",
//       "Animes",
//       "Streetwear",
//       "Casual",
//       "Saisonnier"
//     ],
//     Icon: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     id: 8,
//     Name: "Sweaters",
//     SubCategory: [
//       "Cartoons",
//       "Films",
//       "Streetwear",
//       "Vintage",
//       "Saisonnier",
//       "Casual"
//     ],
//     Icon: "https://images.pexels.com/photos/2613261/pexels-photo-2613261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     id: 10,  // ID unique pour cette catégorie
//     Name: "Survêtements",  // Nom de la catégorie
//     SubCategory: [
//       "Casual",
//       "Sport",
//       "Streetwear",
//       "Saisonnier"
//     ],  // Sous-catégories possibles pour les tracksuits
//     Icon: "https://images.pexels.com/photos/26664909/pexels-photo-26664909/free-photo-of-les-moments.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Icône associée à la catégorie
//   },
  
//   {
//     id: 7,  // ID unique pour cette catégorie
//     Name: "Pantalons",  // Nom de la catégorie
//     SubCategory: [
//       "Jeans",
//       "Chinos",
//       "Jogging",
//       "Formel"
//     ],  // Sous-catégories
//     Icon: "https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Icône associée à la catégorie
//   },
//   {
//     id: 3,
//     Name: "Vestes",
//     subCategorie: [
//       "Films",
//       "Animes",
//       "Logos",
//       "Casual",
//       "Formel",
//       "Détail graphique"
//     ],
//     Icon: "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     id: 9,
//     Name: "Shorts",
//     SubCategory: [
//       "Casual",
//       "Sport",
//       "Vintage",
//       "Saisonnier",
//       "Streetwear"
//     ],
//     Icon: "https://images.pexels.com/photos/18394309/pexels-photo-18394309/free-photo-of-portrait-d-un-jeune-garcon-avec-une-silhouette-sombre-contre-le-mur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     id: 4,
//     Name: "Jupes",
//     subCategorie: [
//       "Motifs floraux",
//       "Casual",
      
//     ],
//     Icon: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   {
//     id: 5,
//     Name: "Robes",
//     subCategorie: [
//       "Casual",
//       "Élégance minimaliste",
//       "Saisonnière",
//       "Art moderne"
//     ],
//     Icon: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   // {
//   //   id: 6,
//   //   Name: "Chemises",
//   //   SubCategory: [
//   //     "Films et séries",
//   //     "Art graphique",
//   //     "Thème cartoon",
//   //     "Vintage"
//   //   ],
//   //   Icon: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400"
//   // },
  
  
  
  
//   {
//     id: 10,
//     Name: "Accessoires",
//     subCategorie: [
//       "Écharpes",
//       "Chapeaux",
//       "Gants",
//       "Bijoux",
//       "Sacs à main"
//     ],
//     Icon: "https://images.pexels.com/photos/30076369/pexels-photo-30076369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   }
// ]
// const [categories, setCategories] = useState([]); // État pour stocker les catégories

//   const bestSellers = [
//     {
//         UID: "C001",
//         Product: "T-shirt",
//         Description: "Un T-shirt classique et confortable, parfait pour toutes les occasions décontractées. Fabriqué en coton doux pour un confort optimal toute la journée.",
//         Category: "Tops",
//         SubCategory: "Casual Wear",
//         Brand: "AYD",
//         OldPrice: 35.00,
//         Price: 19.99,
//         Stock: 100,
//         Rating: 4.3,
//         Order: 200,
//         Sales: 3000,
//         IsFeatured: true,
//         Image: [
//             "https://timshop.timhortons.ca/cdn/shop/files/693770626664_TShirtIconWhite_Front.png?v=1714573840&width=2048",
//             "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-nz/S001463520/PPAGK-254-kids-Tshirt-marquee-001?cb=c7d589026f2c77059bcbd4f875f3dcf0b1a73a0c",
//             "https://www.exist.com.tn/95266-large_default/t-shirt.jpg"
//         ],
//         Tags: ["Casual", "Cotton", "Summer", "Unisex"],
//         Variants: [
//             {
//                 Size: "S",
//                 Colors: [
//                     { Color: "Red", Quantity: 10 },
//                     { Color: "Blue", Quantity: 15 },
//                     { Color: "Green", Quantity: 5 },
//                 ]
//             },
//             {
//                 Size: "M",
//                 Colors: [
//                     { Color: "Red", Quantity: 8 },
//                     { Color: "Yellow", Quantity: 12 },
//                     { Color: "Purple", Quantity: 7 },
//                 ]
//             },
//             {
//                 Size: "L",
//                 Colors: [
//                     { Color: "Blue", Quantity: 20 },
//                     { Color: "Green", Quantity: 10 },
//                     { Color: "Purple", Quantity: 9 },
//                 ]
//             },
//             {
//                 Size: "XL",
//                 Colors: [
//                     { Color: "Red", Quantity: 5 },
//                     { Color: "Yellow", Quantity: 8 },
//                     { Color: "Purple", Quantity: 6 },
//                 ]
//             }
//         ],
//         CreatedAt: "02 Feb 2024"
//     },
//     {
//       UID: "C003",
//       Product: "Jacket",
//       Description: "Une veste élégante et chaude pour affronter les jours les plus froids avec style. Matériau imperméable et coupe-vent.",
//       Category: "Outerwear",
//       SubCategory: "Winter Wear",
//       Brand: "AYD",
//       OldPrice: 105.00,
//       Price: 89.99,
//       Stock: 40,
//       Rating: 4.6,
//       Order: 90,
//       Sales: 1800,
//       IsFeatured: true,
//       Image: ["https://www.craftclothing.ph/cdn/shop/products/BM12-W-F_1024x1024.png?v=1644291853"],
//       Tags: ["Winter", "Waterproof", "Comfort"],
//       Variants: [
//           {
//               Size: "M",
//               Colors: [
//                   { Color: "Black", Quantity: 10 },
//                   { Color: "Blue", Quantity: 8 }
//               ]
//           },
//           {
//               Size: "L",
//               Colors: [
//                   { Color: "Gray", Quantity: 7 },
//                   { Color: "Navy", Quantity: 5 }
//               ]
//           }
//       ],
//       CreatedAt: "10 Dec 2023"
//   },
//   {
//       UID: "C010",
//       Product: "Blazer",
//       Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
//       Category: "Outerwear",
//       SubCategory: "Formal Wear",
//       Brand: "AYD",
//       OldPrice: 115.00,
//       Price: 99.99,
//       Stock: 30,
//       Rating: 4.7,
//       Order: 70,
//       Sales: 1500,
//       IsFeatured:false,
//       Image: ["https://media.balmain.com/image/upload/f_auto,q_auto,dpr_auto/c_fill,w_375,h_530/sfcc/balmain/hi-res/CF1SG008WB080PAF?_i=AG"],
//       Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//       Variants: [
//         {
//           Size: "S",
//           Colors: [
//             { Color: "Khaki", Quantity: 20 },
//             { Color: "Blue", Quantity: 15 },
//             { Color: "Black", Quantity: 12 },
//           ],
//         },
//         {
//           Size: "M",
//           Colors: [
//             { Color: "Grey", Quantity: 30 },
//             { Color: "Blue", Quantity: 20 },
//             { Color: "White", Quantity: 15 },
//           ],
//         },
//         {
//           Size: "L",
//           Colors: [
//             { Color: "Navy", Quantity: 25 },
//             { Color: "Brown", Quantity: 18 },
//             { Color: "Black", Quantity: 10 },
//           ],
//         },
//         {
//           Size: "XL",
//           Colors: [
//             { Color: "Khaki", Quantity: 15 },
//             { Color: "Grey", Quantity: 12 },
//             { Color: "Blue", Quantity: 8 },
//           ],
//         },
//       ],
//       CreatedAt: "07 Feb 2024",
      
//   },
//   {
//       UID: "C011",
//       Product: "Tracksuit",
//       Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
//       Category: "Activewear",
//       SubCategory: "Sportswear",
//       Brand: "AYD",
//       OldPrice: 75.00,
//       Price: 59.99,
//       Stock: 40,
//       Rating: 4.4,
//       Order: 90,
//       Sales: 1700,
//       IsFeatured:true,
//       Image: ["https://www.hummel.fr/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwf266066e/images/packshot/213323-7010.png?sw=1028&sh=1370&sm=fit&q=90"],
//       Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//       Variants: [
//         {
//           Size: "S",
//           Colors: [
//             { Color: "Khaki", Quantity: 20 },
//             { Color: "Blue", Quantity: 15 },
//             { Color: "Black", Quantity: 12 },
//           ],
//         },
//         {
//           Size: "M",
//           Colors: [
//             { Color: "Grey", Quantity: 30 },
//             { Color: "Blue", Quantity: 20 },
//             { Color: "White", Quantity: 15 },
//           ],
//         },
//         {
//           Size: "L",
//           Colors: [
//             { Color: "Navy", Quantity: 25 },
//             { Color: "Brown", Quantity: 18 },
//             { Color: "Black", Quantity: 10 },
//           ],
//         },
//         {
//           Size: "XL",
//           Colors: [
//             { Color: "Khaki", Quantity: 15 },
//             { Color: "Grey", Quantity: 12 },
//             { Color: "Blue", Quantity: 8 },
//           ],
//         },
//       ],
//       CreatedAt: "07 Feb 2024",
//   },
//   {
//       UID: "C012",
//       Product: "Scarf",
//       Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
//       Category: "Accessories",
//       SubCategory: "Winter Accessories",
//       Brand: "AYD",
//       OldPrice: 14.99,
//       Price: 14.99,
//       Stock: 200,
//       Rating: 4.2,
//       Order: 250,
//       Sales: 3700,
//       IsFeatured:true,
//       Image: ["https://www.french-scarf.com/ar-men-s-silk-scarf-red-charles-336_25771574.png"],
//       Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//       Variants: [
//         {
//           Size: "S",
//           Colors: [
//             { Color: "Khaki", Quantity: 20 },
//             { Color: "Blue", Quantity: 15 },
//             { Color: "Black", Quantity: 12 },
//           ],
//         },
//         {
//           Size: "M",
//           Colors: [
//             { Color: "Grey", Quantity: 30 },
//             { Color: "Blue", Quantity: 20 },
//             { Color: "White", Quantity: 15 },
//           ],
//         },
//         {
//           Size: "L",
//           Colors: [
//             { Color: "Navy", Quantity: 25 },
//             { Color: "Brown", Quantity: 18 },
//             { Color: "Black", Quantity: 10 },
//           ],
//         },
//         {
//           Size: "XL",
//           Colors: [
//             { Color: "Khaki", Quantity: 15 },
//             { Color: "Grey", Quantity: 12 },
//             { Color: "Blue", Quantity: 8 },
//           ],
//         },
//       ],
//       CreatedAt: "07 Feb 2024",
//   }
// ];

// const newProducts = [
  
//   {
//       UID: "C002",
//       Product: "Jeans",
//       Description: "Un jean robuste et tendance, parfait pour compléter n'importe quelle tenue. Conçu pour durer et offrir un style intemporel.",
//       Category: "Bottoms",
//       SubCategory: "Denim",
//       Brand: "AYD",
//       OldPrice: 65.00,
//       Price: 49.99,
//       Stock: 60,
//       Rating: 4.5,
//       Order: 150,
//       Sales: 2500,
//       IsFeatured: false,
//       Image: ["https://www.wibra.fr/wp-content/uploads/sites/5/2023/07/06932687-000-01.png"],
//       Tags: ["Denim", "Casual", "Durable"],
//       Variants: [
//           {
//               Size: "28",
//               Colors: [
//                   { Color: "Black", Quantity: 15 },
//                   { Color: "Blue", Quantity: 20 }
//               ]
//           },
//           {
//               Size: "30",
//               Colors: [
//                   { Color: "Blue", Quantity: 10 },
//                   { Color: "Gray", Quantity: 15 }
//               ]
//           }
//       ],
//       CreatedAt: "15 Jan 2024"
//   },
//   {
//       UID: "C003",
//       Product: "Jacket",
//       Description: "Une veste élégante et chaude pour affronter les jours les plus froids avec style. Matériau imperméable et coupe-vent.",
//       Category: "Outerwear",
//       SubCategory: "Winter Wear",
//       Brand: "AYD",
//       OldPrice: 105.00,
//       Price: 89.99,
//       Stock: 40,
//       Rating: 4.6,
//       Order: 90,
//       Sales: 1800,
//       IsFeatured: true,
//       Image: ["https://www.craftclothing.ph/cdn/shop/products/BM12-W-F_1024x1024.png?v=1644291853"],
//       Tags: ["Winter", "Waterproof", "Comfort"],
//       Variants: [
//           {
//               Size: "M",
//               Colors: [
//                   { Color: "Black", Quantity: 10 },
//                   { Color: "Blue", Quantity: 8 }
//               ]
//           },
//           {
//               Size: "L",
//               Colors: [
//                   { Color: "Gray", Quantity: 7 },
//                   { Color: "Navy", Quantity: 5 }
//               ]
//           }
//       ],
//       CreatedAt: "10 Dec 2023"
//   },
//   {
//     UID: "C004",
//     Product: "Dress",
//     Description: "Elegant and stylish evening wear designed to make a statement at any formal or semi-formal occasion. Made from premium fabrics to ensure comfort and sophistication.",
//     Category: "Dresses",
//     SubCategory: "Evening Wear",
//     Brand: "AYD",
//     OldPrice: 95.00,
//     Price: 69.99,
//     Stock: 50,
//     Rating: 4.7,
//     Order: 120,
//     Sales: 2400,
//     IsFeatured: false,
//     Image: ["https://www.meshki.us/cdn/shop/files/B125-2024.10.28-MESHKI_9306.png?v=1733347943&width=533"],
//     Tags: ["Elegant", "Formal", "Evening", "Chic", "Women"],
//     Variants: [
//       {
//         Size: "S",
//         Colors: [
//           { Color: "Black", Quantity: 10 },
//           { Color: "Red", Quantity: 8 },
//           { Color: "Navy Blue", Quantity: 12 },
//         ],
//       },
//       {
//         Size: "M",
//         Colors: [
//           { Color: "Black", Quantity: 12 },
//           { Color: "Emerald Green", Quantity: 10 },
//           { Color: "Maroon", Quantity: 15 },
//         ],
//       },
//       {
//         Size: "L",
//         Colors: [
//           { Color: "Black", Quantity: 8 },
//           { Color: "Red", Quantity: 9 },
//           { Color: "Champagne", Quantity: 7 },
//         ],
//       },
//       {
//         Size: "XL",
//         Colors: [
//           { Color: "Black", Quantity: 6 },
//           { Color: "Silver", Quantity: 5 },
//           { Color: "Gold", Quantity: 4 },
//         ],
//       },
//     ],
//     CreatedAt: "05 Feb 2024",
//   },
  
  
//   {
//     UID: "C007",
//     Product: "Skirt",
//     Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
//     Category: "Bottoms",
//     SubCategory: "Office Wear",
//     Brand: "AYD",
//     OldPrice: 45.00,
//     Price: 29.99,
//     Stock: 70,
//     Rating: 4.5,
//     Order: 80,
//     Sales: 1400,
//     IsFeatured:true,
//     Image: ["https://cdn.shopify.com/s/files/1/0528/3407/4795/files/packshot_2_206610_1000_Front_1_FQMINDY-SKIRT_20Black_6af0436f-493e-4d28-b03c-0d5425b32de6_540x.png?v=1729064444"],
//     Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//     Variants: [
//       {
//         Size: "S",
//         Colors: [
//           { Color: "Khaki", Quantity: 20 },
//           { Color: "Blue", Quantity: 15 },
//           { Color: "Black", Quantity: 12 },
//         ],
//       },
//       {
//         Size: "M",
//         Colors: [
//           { Color: "Grey", Quantity: 30 },
//           { Color: "Blue", Quantity: 20 },
//           { Color: "White", Quantity: 15 },
//         ],
//       },
//       {
//         Size: "L",
//         Colors: [
//           { Color: "Navy", Quantity: 25 },
//           { Color: "Brown", Quantity: 18 },
//           { Color: "Black", Quantity: 10 },
//         ],
//       },
//       {
//         Size: "XL",
//         Colors: [
//           { Color: "Khaki", Quantity: 15 },
//           { Color: "Grey", Quantity: 12 },
//           { Color: "Blue", Quantity: 8 },
//         ],
//       },
//     ],
//     CreatedAt: "07 Feb 2024",
// },

// {
//     UID: "C009",
//     Product: "Polo Shirt",
//     Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
//     Category: "Tops",
//     SubCategory: "Smart Casual",
//     Brand: "AYD",
//     OldPrice: 34.99,
//     Price: 34.99,
//     Stock: 90,
//     Rating: 4.6,
//     Order: 140,
//     Sales: 2800,
//     IsFeatured:true,
//     Image: ["https://owayo-cdn.com/cdn-cgi/image/format=auto,fit=contain,width=490/newhp/img/productHome/productSeitenansicht/productservice/poloshirt_classic_herren/st3000_blm.png"],
//     Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//     Variants: [
//       {
//         Size: "S",
//         Colors: [
//           { Color: "Khaki", Quantity: 20 },
//           { Color: "Blue", Quantity: 15 },
//           { Color: "Black", Quantity: 12 },
//         ],
//       },
//       {
//         Size: "M",
//         Colors: [
//           { Color: "Grey", Quantity: 30 },
//           { Color: "Blue", Quantity: 20 },
//           { Color: "White", Quantity: 15 },
//         ],
//       },
//       {
//         Size: "L",
//         Colors: [
//           { Color: "Navy", Quantity: 25 },
//           { Color: "Brown", Quantity: 18 },
//           { Color: "Black", Quantity: 10 },
//         ],
//       },
//       {
//         Size: "XL",
//         Colors: [
//           { Color: "Khaki", Quantity: 15 },
//           { Color: "Grey", Quantity: 12 },
//           { Color: "Blue", Quantity: 8 },
//         ],
//       },
//     ],
//     CreatedAt: "07 Feb 2024",
// },
// {
//     UID: "C010",
//     Product: "Blazer",
//     Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
//     Category: "Outerwear",
//     SubCategory: "Formal Wear",
//     Brand: "AYD",
//     OldPrice: 115.00,
//     Price: 99.99,
//     Stock: 30,
//     Rating: 4.7,
//     Order: 70,
//     Sales: 1500,
//     IsFeatured:false,
//     Image: ["https://media.balmain.com/image/upload/f_auto,q_auto,dpr_auto/c_fill,w_375,h_530/sfcc/balmain/hi-res/CF1SG008WB080PAF?_i=AG"],
//     Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//     Variants: [
//       {
//         Size: "S",
//         Colors: [
//           { Color: "Khaki", Quantity: 20 },
//           { Color: "Blue", Quantity: 15 },
//           { Color: "Black", Quantity: 12 },
//         ],
//       },
//       {
//         Size: "M",
//         Colors: [
//           { Color: "Grey", Quantity: 30 },
//           { Color: "Blue", Quantity: 20 },
//           { Color: "White", Quantity: 15 },
//         ],
//       },
//       {
//         Size: "L",
//         Colors: [
//           { Color: "Navy", Quantity: 25 },
//           { Color: "Brown", Quantity: 18 },
//           { Color: "Black", Quantity: 10 },
//         ],
//       },
//       {
//         Size: "XL",
//         Colors: [
//           { Color: "Khaki", Quantity: 15 },
//           { Color: "Grey", Quantity: 12 },
//           { Color: "Blue", Quantity: 8 },
//         ],
//       },
//     ],
//     CreatedAt: "07 Feb 2024",
    
// },
// {
//     UID: "C011",
//     Product: "Tracksuit",
//     Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
//     Category: "Activewear",
//     SubCategory: "Sportswear",
//     Brand: "AYD",
//     OldPrice: 75.00,
//     Price: 59.99,
//     Stock: 40,
//     Rating: 4.4,
//     Order: 90,
//     Sales: 1700,
//     IsFeatured:true,
//     Image: ["https://www.hummel.fr/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwf266066e/images/packshot/213323-7010.png?sw=1028&sh=1370&sm=fit&q=90"],
//     Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//     Variants: [
//       {
//         Size: "S",
//         Colors: [
//           { Color: "Khaki", Quantity: 20 },
//           { Color: "Blue", Quantity: 15 },
//           { Color: "Black", Quantity: 12 },
//         ],
//       },
//       {
//         Size: "M",
//         Colors: [
//           { Color: "Grey", Quantity: 30 },
//           { Color: "Blue", Quantity: 20 },
//           { Color: "White", Quantity: 15 },
//         ],
//       },
//       {
//         Size: "L",
//         Colors: [
//           { Color: "Navy", Quantity: 25 },
//           { Color: "Brown", Quantity: 18 },
//           { Color: "Black", Quantity: 10 },
//         ],
//       },
//       {
//         Size: "XL",
//         Colors: [
//           { Color: "Khaki", Quantity: 15 },
//           { Color: "Grey", Quantity: 12 },
//           { Color: "Blue", Quantity: 8 },
//         ],
//       },
//     ],
//     CreatedAt: "07 Feb 2024",
// },
// {
//     UID: "C012",
//     Product: "Scarf",
//     Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
//     Category: "Accessories",
//     SubCategory: "Winter Accessories",
//     Brand: "AYD",
//     OldPrice: 14.99,
//     Price: 14.99,
//     Stock: 200,
//     Rating: 4.2,
//     Order: 250,
//     Sales: 3700,
//     IsFeatured:true,
//     Image: ["https://www.french-scarf.com/ar-men-s-silk-scarf-red-charles-336_25771574.png"],
//     Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//     Variants: [
//       {
//         Size: "S",
//         Colors: [
//           { Color: "Khaki", Quantity: 20 },
//           { Color: "Blue", Quantity: 15 },
//           { Color: "Black", Quantity: 12 },
//         ],
//       },
//       {
//         Size: "M",
//         Colors: [
//           { Color: "Grey", Quantity: 30 },
//           { Color: "Blue", Quantity: 20 },
//           { Color: "White", Quantity: 15 },
//         ],
//       },
//       {
//         Size: "L",
//         Colors: [
//           { Color: "Navy", Quantity: 25 },
//           { Color: "Brown", Quantity: 18 },
//           { Color: "Black", Quantity: 10 },
//         ],
//       },
//       {
//         Size: "XL",
//         Colors: [
//           { Color: "Khaki", Quantity: 15 },
//           { Color: "Grey", Quantity: 12 },
//           { Color: "Blue", Quantity: 8 },
//         ],
//       },
//     ],
//     CreatedAt: "07 Feb 2024",
// }
// ];
// const bestRating = [
//   {
//       UID: "C001",
//       Product: "T-shirt",
//       Description: "Un T-shirt classique et confortable, parfait pour toutes les occasions décontractées. Fabriqué en coton doux pour un confort optimal toute la journée.",
//       Category: "Tops",
//       SubCategory: "Casual Wear",
//       Brand: "AYD",
//       OldPrice: 35.00,
//       Price: 19.99,
//       Stock: 100,
//       Rating: 4.3,
//       Order: 200,
//       Sales: 3000,
//       IsFeatured: true,
//       Image: [
//           "https://timshop.timhortons.ca/cdn/shop/files/693770626664_TShirtIconWhite_Front.png?v=1714573840&width=2048",
//           "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-nz/S001463520/PPAGK-254-kids-Tshirt-marquee-001?cb=c7d589026f2c77059bcbd4f875f3dcf0b1a73a0c",
//           "https://www.exist.com.tn/95266-large_default/t-shirt.jpg"
//       ],
//       Tags: ["Casual", "Cotton", "Summer", "Unisex"],
//       Variants: [
//           {
//               Size: "S",
//               Colors: [
//                   { Color: "Red", Quantity: 10 },
//                   { Color: "Blue", Quantity: 15 },
//                   { Color: "Green", Quantity: 5 },
//               ]
//           },
//           {
//               Size: "M",
//               Colors: [
//                   { Color: "Red", Quantity: 8 },
//                   { Color: "Yellow", Quantity: 12 },
//                   { Color: "Purple", Quantity: 7 },
//               ]
//           },
//           {
//               Size: "L",
//               Colors: [
//                   { Color: "Blue", Quantity: 20 },
//                   { Color: "Green", Quantity: 10 },
//                   { Color: "Purple", Quantity: 9 },
//               ]
//           },
//           {
//               Size: "XL",
//               Colors: [
//                   { Color: "Red", Quantity: 5 },
//                   { Color: "Yellow", Quantity: 8 },
//                   { Color: "Purple", Quantity: 6 },
//               ]
//           }
//       ],
//       CreatedAt: "02 Feb 2024"
//   },
 
  
//   {
//     UID: "C005",
//     Product: "Sweater",
//     Description: "Cozy and warm knitwear sweater perfect for chilly days. Its versatile design makes it suitable for casual outings or relaxed office wear.",
//     Category: "Tops",
//     SubCategory: "Knitwear",
//     Brand: "AYD",
//     OldPrice: 39.99,
//     Price: 39.99,
//     Stock: 80,
//     Rating: 4.4,
//     Order: 100,
//     Sales: 2000,
//     IsFeatured: true,
//     Image: ["https://fjallraven.com.au/cdn/shop/products/Ovik_Nordic_Sweater_M_82020-020_A_MAIN_FJR.png?v=1702871491"],
//     Tags: ["Casual", "Knitwear", "Winter", "Cozy", "Unisex"],
//     Variants: [
//       {
//         Size: "S",
//         Colors: [
//           { Color: "Grey", Quantity: 15 },
//           { Color: "Beige", Quantity: 12 },
//           { Color: "White", Quantity: 10 },
//         ],
//       },
//       {
//         Size: "M",
//         Colors: [
//           { Color: "Grey", Quantity: 20 },
//           { Color: "Beige", Quantity: 15 },
//           { Color: "Black", Quantity: 8 },
//         ],
//       },
//       {
//         Size: "L",
//         Colors: [
//           { Color: "Grey", Quantity: 25 },
//           { Color: "Navy Blue", Quantity: 10 },
//           { Color: "Olive Green", Quantity: 12 },
//         ],
//       },
//       {
//         Size: "XL",
//         Colors: [
//           { Color: "Charcoal", Quantity: 10 },
//           { Color: "Cream", Quantity: 7 },
//           { Color: "Brown", Quantity: 5 },
//         ],
//       },
//     ],
//     CreatedAt: "06 Feb 2024",
//   },
//   {
//     UID: "C006",
//     Product: "Shorts",
//     Description: "Lightweight and comfortable shorts designed for casual and outdoor activities. Crafted from durable materials to ensure longevity.",
//     Category: "Bottoms",
//     SubCategory: "Casual Wear",
//     Brand: "AYD",
//     OldPrice: 45.99,
//     Price: 24.99,
//     Stock: 120,
//     Rating: 4.3,
//     Order: 130,
//     Sales: 2200,
//     IsFeatured: false,
//     Image: ["https://s7d2.scene7.com/is/image/FoxRacing/32240001_1?$dw_detn1$&fmt=webp-alpha"],
//     Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//     Variants: [
//       {
//         Size: "S",
//         Colors: [
//           { Color: "Khaki", Quantity: 20 },
//           { Color: "Blue", Quantity: 15 },
//           { Color: "Black", Quantity: 12 },
//         ],
//       },
//       {
//         Size: "M",
//         Colors: [
//           { Color: "Grey", Quantity: 30 },
//           { Color: "Blue", Quantity: 20 },
//           { Color: "White", Quantity: 15 },
//         ],
//       },
//       {
//         Size: "L",
//         Colors: [
//           { Color: "Navy", Quantity: 25 },
//           { Color: "Brown", Quantity: 18 },
//           { Color: "Black", Quantity: 10 },
//         ],
//       },
//       {
//         Size: "XL",
//         Colors: [
//           { Color: "Khaki", Quantity: 15 },
//           { Color: "Grey", Quantity: 12 },
//           { Color: "Blue", Quantity: 8 },
//         ],
//       },
//     ],
//     CreatedAt: "07 Feb 2024",
//   },
 
// {
//     UID: "C008",
//     Product: "Hoodie",
//     Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
//     Category: "Outerwear",
//     SubCategory: "Casual Wear",
//     Brand: "AYD",
//     OldPrice: 49.99,
//     Price: 49.99,
//     Stock: 50,
//     Rating: 4.8,
//     Order: 200,
//     Sales: 4000,
//     IsFeatured:false,
//     Image: ["https://timshop.timhortons.ca/cdn/shop/files/693770626480_HoodieAlwaysFreshBlack_Front.png?v=1714573073&width=2048"],
//     Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//     Variants: [
//       {
//         Size: "S",
//         Colors: [
//           { Color: "Khaki", Quantity: 20 },
//           { Color: "Blue", Quantity: 15 },
//           { Color: "Black", Quantity: 12 },
//         ],
//       },
//       {
//         Size: "M",
//         Colors: [
//           { Color: "Grey", Quantity: 30 },
//           { Color: "Blue", Quantity: 20 },
//           { Color: "White", Quantity: 15 },
//         ],
//       },
//       {
//         Size: "L",
//         Colors: [
//           { Color: "Navy", Quantity: 25 },
//           { Color: "Brown", Quantity: 18 },
//           { Color: "Black", Quantity: 10 },
//         ],
//       },
//       {
//         Size: "XL",
//         Colors: [
//           { Color: "Khaki", Quantity: 15 },
//           { Color: "Grey", Quantity: 12 },
//           { Color: "Blue", Quantity: 8 },
//         ],
//       },
//     ],
//     CreatedAt: "07 Feb 2024",
// },

// {
//     UID: "C010",
//     Product: "Blazer",
//     Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
//     Category: "Outerwear",
//     SubCategory: "Formal Wear",
//     Brand: "AYD",
//     OldPrice: 115.00,
//     Price: 99.99,
//     Stock: 30,
//     Rating: 4.7,
//     Order: 70,
//     Sales: 1500,
//     IsFeatured:false,
//     Image: ["https://media.balmain.com/image/upload/f_auto,q_auto,dpr_auto/c_fill,w_375,h_530/sfcc/balmain/hi-res/CF1SG008WB080PAF?_i=AG"],
//     Tags: ["Casual", "Outdoor", "Comfort", "Breathable", "Unisex"],
//     Variants: [
//       {
//         Size: "S",
//         Colors: [
//           { Color: "Khaki", Quantity: 20 },
//           { Color: "Blue", Quantity: 15 },
//           { Color: "Black", Quantity: 12 },
//         ],
//       },
//       {
//         Size: "M",
//         Colors: [
//           { Color: "Grey", Quantity: 30 },
//           { Color: "Blue", Quantity: 20 },
//           { Color: "White", Quantity: 15 },
//         ],
//       },
//       {
//         Size: "L",
//         Colors: [
//           { Color: "Navy", Quantity: 25 },
//           { Color: "Brown", Quantity: 18 },
//           { Color: "Black", Quantity: 10 },
//         ],
//       },
//       {
//         Size: "XL",
//         Colors: [
//           { Color: "Khaki", Quantity: 15 },
//           { Color: "Grey", Quantity: 12 },
//           { Color: "Blue", Quantity: 8 },
//         ],
//       },
//     ],
//     CreatedAt: "07 Feb 2024",
    
// },

// ];


const[newProducts,setNewProducts]=useState([])

useEffect(() => {
  // Fonction pour récupérer les catégories
  const fetchNewProducts = async () => {
      try {
          const response = await axios.get(`${API_URL}/produitsPaginate?pageSize=10&page=1&sortBy=newest`, {
              headers: {
                  accept: 'application/json',
              },
          });
          setNewProducts(response.data.products); // Mettre à jour l'état avec les données récupérées
      } catch (error) {
          console.error('Erreur lors de la récupération des catégories :', error);
      }
  };

  fetchNewProducts(); // Appel de la fonction
}, []);
// useEffect(()=>{
// console.log("newProducts ",newProducts)
// },[newProducts])
const[bestSellers,setBestSellers]=useState([])
useEffect(() => {
    // Fonction pour récupérer les catégories
    const fetchBestSellers = async () => {
        try {
            const response = await axios.get(`${API_URL}/produitsPaginate?pageSize=10&page=1&sortBy=bestSellers`, {
                headers: {
                    accept: 'application/json',
                },
            });
            setBestSellers(response.data.products); // Mettre à jour l'état avec les données récupérées
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories :', error);
        }
    };
  
    fetchBestSellers(); // Appel de la fonction
  }, []);
  // useEffect(()=>{
  // console.log("bestSellers ",bestSellers)
  // },[bestSellers])
const[bestRating,setBestRating]=useState([])
useEffect(() => {
    // Fonction pour récupérer les catégories
    const fetchBestRating = async () => {
        try {
            const response = await axios.get(`${API_URL}/produitsPaginate?pageSize=10&page=1&sortBy=topRated`, {
                headers: {
                    accept: 'application/json',
                },
            });
            setBestRating(response.data.products); // Mettre à jour l'état avec les données récupérées
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories :', error);
        }
    };
  
    fetchBestRating(); // Appel de la fonction
  }, []);
  // useEffect(()=>{
  // console.log("bestRating ",bestRating)
  // },[bestRating])
const[mockCategories,setMockCategories]=useState([])

useEffect(() => {
  // Fonction pour récupérer les catégories
  const fetchCategories = async () => {
      try {
          const response = await axios.get(`${API_URL}/categories`, {
              headers: {
                  accept: 'application/json',
              },
          });
          setMockCategories(response.data); // Mettre à jour l'état avec les données récupérées
      } catch (error) {
          console.error('Erreur lors de la récupération des catégories :', error);
      }
  };

  fetchCategories(); // Appel de la fonction
}, []);
// useEffect(()=>{
// console.log("mockCategories ",mockCategories)
// },[mockCategories])
// const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   // Faire la requête API avec Axios
  //   axios
  //     .get('https://localhost:7057/api/Products', {
  //       headers: {
  //         accept: 'application/json', // Vous pouvez également utiliser 'application/json' si vous attendez une réponse en JSON
  //       },
  //     })
  //     .then((response) => {
  //       console.log("response.data ",response.data)
  //       setProducts(response.data); // Stocker les données reçues dans l'état
  //     })
  //     .catch((error) => {
  //       setError(error.message); // En cas d'erreur, définir l'état d'erreur
  //     });
  // }, []);
  // Vérifier si `bestSellers` est non vide
// useEffect(() => {
//   if (bestSellers.length > 0) {
//     console.log('Products is no longer empty bestSellers:', bestSellers);
//     // Vous pouvez exécuter une logique supplémentaire ici
//   }
// }, [bestSellers]);

const [showNotification, setShowNotification] = useState(false);
// const [progress, setProgress] = useState(0);
// useEffect(() => {
//   if (showNotification) {
//     let timer = setInterval(() => {
//       setProgress((oldProgress) => {
//         if (oldProgress === 100) {
//           clearInterval(timer);
//           setShowNotification(false);
//           return 100;
//         }
//         return Math.min(oldProgress + 1, 100);
//       });
//     }, 30); // La barre progresse toutes les 30ms

//     // Cache la notification après 3 secondes
//     setTimeout(() => {
//       setShowNotification(false);
//     }, 3000);
//     setProgress(0);
//   }
// }, [showNotification]);
  useEffect(() => {
    const notification = localStorage.getItem('showNotification') === 'true';
    setShowNotification(notification);

    if (notification) {
      setTimeout(() => {
        setShowNotification(false);
        localStorage.removeItem('showNotification');
      }, 5000);
    }
    localStorage.setItem('showNotification', 'false');
  }, []);

// const [hotProduct, setHotProduct] = useState([]);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   // Faire la requête API avec Axios
  //   axios
  //     .get('https://localhost:7057/api/Products/5', {
  //       headers: {
  //         accept: 'application/json', // Vous pouvez également utiliser 'application/json' si vous attendez une réponse en JSON
  //       },
  //     })
  //     .then((response) => {
  //       console.log("response.data ",response.data)
  //       setHotProduct(response.data); // Stocker les données reçues dans l'état
  //     })
  //     .catch((error) => {
  //       setError(error.message); // En cas d'erreur, définir l'état d'erreur
  //     });
  // }, []);
  // Vérifier si `products` est non vide
// useEffect(() => {
  
//     console.log('hotProduct is no longer empty:', hotProduct);
//     // Vous pouvez exécuter une logique supplémentaire ici
  
// }, [hotProduct]);


// const hotProduct = 
// {
//   UID: "C003",
//   Product: "Jacket",
//   Description: "Une veste élégante et chaude pour affronter les jours les plus froids avec style. Matériau imperméable et coupe-vent.",
//   Category: "Outerwear",
//   SubCategory: "Winter Wear",
//   Brand: "AYD",
//   OldPrice: 105.00,
//   Price: 89.99,
//   Stock: 40,
//   Rating: 4.6,
//   Order: 90,
//   Sales: 1800,
//   IsFeatured: true,
//   Image: ["https://www.craftclothing.ph/cdn/shop/products/BM12-W-F_1024x1024.png?v=1644291853"],
//   Tags: ["Winter", "Waterproof", "Comfort"],
//   Variants: [
//       {
//           Size: "M",
//           Colors: [
//               { Color: "Black", Quantity: 10 },
//               { Color: "Blue", Quantity: 8 }
//           ]
//       },
//       {
//           Size: "L",
//           Colors: [
//               { Color: "Gray", Quantity: 7 },
//               { Color: "Navy", Quantity: 5 }
//           ]
//       }
//   ],
//   CreatedAt: "10 Dec 2023"

//     };
const[hotProduct,setHotProduct]=useState()
useEffect(() => {
    // Fonction pour récupérer les catégories
    const fetchHotProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/produits/hot`, {
                headers: {
                    accept: 'application/json',
                },
            });
            // console.log("response.data",response.data[0])
            setHotProduct(response.data[0]); // Mettre à jour l'état avec les données récupérées
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories :', error);
        }
    };
  
    fetchHotProducts(); // Appel de la fonction
  }, []);
  // useEffect(()=>{
  // console.log("hotProduct ",hotProduct)
  // },[hotProduct])
    
    const location = useLocation();

    useEffect(() => {
      // Forcer le scroll au top lors du changement de route
      window.scrollTo(0, 0);
    }, [location]); // Le tableau avec `location` permet de déclencher l'effet à chaque changement de route
  return (
    // <div>
      
    //   <Carousel/>
    //   <BestSellers/>
    // </div>
    <main class="px-4  w-full mx-auto h-auto ">
      {showNotification && (
                                        <div
                                          className="fixed z-10 top-4 right-4 bg-gradient-to-r from-[#011d28]  to-[#065875e6] text-white py-4 px-6 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out w-72" // Réduction de la largeur
                                          style={{
                                            opacity: showNotification ? 1 : 0,
                                            transform: showNotification ? 'translateY(0)' : 'translateY(-20px)',
                                          }}
                                        >
                                          {/* Progress Bar */}
                                          {/* <div className="w-full bg-[#011d28] rounded-full h-2 mt-2 overflow-hidden">
                                            <div
                                              className="bg-gradient-to-r from-[#023b52] to-[#3e6d7ee6] h-2 rounded-full shadow-lg"
                                              style={{
                                                width: `${progress}%`,
                                                transition: 'width 0.03s ease-out', // Smooth transition
                                              }}
                                            ></div>
                                          </div> */}
                                          
                                          <div className="flex flex-col items-center space-y-1 mt-3">
                                        <span className="text-sm font-semibold text-center tracking-wide">
                                        Bienvenue parmi nous ! 
                                        </span>
                                        <span className="text-xs font-normal text-center tracking-wide">
                                        Votre commande est finalisée avec succès.
                                        </span>
                                      </div>
                                        </div>
                                      )}
      <div class=" h-auto mb-4 "  >
        <Carousel />
      </div>         
      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-4 gap-0 lg:gap-4 mb-4 ">
          {/* Image Section */}
          
          {/* <div className="flex justify-center items-center rounded-lg dark:border-gray-600 h-[300px] lg:h-full w-full">
          <img
            src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="rounded-lg h-full w-full object-cover shadow-xl z-10"
            alt=""
          />
        </div> */}
            
          {/* Content Section */}
          <div className="rounded-lg col-span-4 h-full ">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4 md:mt-4 flex-wrap">
              <div>
                <h1 className="block mb-0 font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-white">
                  Meilleures ventes
                </h1>
                <p className="mt-[-4px] text-xs sm:text-sm lg:text-base font-normal text-gray-500 dark:text-gray-300">
                Les articles les plus populaires du moment !
                </p>
              </div>

              <Link
                to="/products/?trie=bestSellers"
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
              </Link>
            </div>

            {/* Best Sellers Component */}
            {bestSellers.length>3?
            <BestSellers nbslidesToShow={5} products={bestSellers}/>:

            <BestSellers nbslidesToShow={1} products={bestSellers}/>}
          </div>
      </div>
      
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4  ">
        <div className="hidden rounded-lg border-gray-300 dark:border-gray-600 h-[300px] md:h-[400px]  lg:h-[300px] md:order-1">
          {/* <img
            src="https://images.pexels.com/photos/3963101/pexels-photo-3963101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" rounded-lg h-auto w-full md:h-[475px]"
          /> */}
        </div>
        <div className="rounded-lg h-full md:h-full md:col-span-4 md:order-2">
          {hotProduct && <Hotproduct hotProduct={hotProduct} />}
          {/* <Hotproduct hotProduct={hotProduct} /> */}
        </div>
      </div>
      
      <div
        class="rounded-lg h-full mb-4"
      >
        <CategorySearch mockCategories={mockCategories}/>
        
       
      </div>
      {/* <div
        class="rounded-lg border-gray-300 dark:border-gray-600 h-full mb-4"
      >
        <h2 class="ml-5 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">RÉSERVEZ PAR ICI</h2>

        <Products mockCategories={mockCategories} products={products}/>
      </div> */}
      
      <div
        class="grid grid-cols-1  gap-0 lg:gap-4 mb-4"
      >
        <div className="flex ml-3 justify-between items-center mb-4 md:mt-4 flex-wrap">
              <div>
                <h1 className="block mb-0 font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-white">
                Produits les mieux notés
                </h1>
                <p className="mt-[-4px] text-xs sm:text-sm lg:text-base font-normal text-gray-500 dark:text-gray-300">
                Les favoris de nos clients, testés et approuvés !
                </p>
              </div>

              <Link
                to="products/?trie=topRated"
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
              </Link>
            </div>

            {/* Best Sellers Component */}
            
            {bestRating.length>5?
            <BestSellers nbslidesToShow={5} products={bestRating}/>:

            <BestSellers nbslidesToShow={bestRating.length} products={bestRating}/>}
       
      </div>
      <div
        class="rounded-lg h-full mb-4"
      >
        <div className="flex  ml-3 justify-between items-center mb-4 md:mt-4 flex-wrap">
              <div>
                <h1 className="block mb-0 font-bold  text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-white">
                Les Dernières Nouveautés
                </h1>
                <p className="mt-[-4px] text-xs sm:text-sm lg:text-base font-normal text-gray-500 dark:text-gray-300">
                Les nouveautés sont là ! Soyez les premiers à en profiter.
                </p>
              </div>

              <Link
                to="/products/?trie=newest"
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
              </Link>
            </div>

            {/* Best Sellers Component */}
            
            {newProducts.length>5?
            <BestSellers nbslidesToShow={5} products={newProducts}/>:

            <BestSellers nbslidesToShow={newProducts.length} products={newProducts}/>}
       
      </div>
    </main>
  )
}

export default Home