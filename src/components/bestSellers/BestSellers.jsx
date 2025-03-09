import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';
// import axios from 'axios';


   const BestSellers = ({nbslidesToShow,products}) => {
    // const products = [
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
    //         UID: "C002",
    //         Product: "Jeans",
    //         Description: "Un jean robuste et tendance, parfait pour compléter n'importe quelle tenue. Conçu pour durer et offrir un style intemporel.",
    //         Category: "Bottoms",
    //         SubCategory: "Denim",
    //         Brand: "AYD",
    //         OldPrice: 65.00,
    //         Price: 49.99,
    //         Stock: 60,
    //         Rating: 4.5,
    //         Order: 150,
    //         Sales: 2500,
    //         IsFeatured: false,
    //         Image: ["https://www.wibra.fr/wp-content/uploads/sites/5/2023/07/06932687-000-01.png"],
    //         Tags: ["Denim", "Casual", "Durable"],
    //         Variants: [
    //             {
    //                 Size: "28",
    //                 Colors: [
    //                     { Color: "Black", Quantity: 15 },
    //                     { Color: "Blue", Quantity: 20 }
    //                 ]
    //             },
    //             {
    //                 Size: "30",
    //                 Colors: [
    //                     { Color: "Blue", Quantity: 10 },
    //                     { Color: "Gray", Quantity: 15 }
    //                 ]
    //             }
    //         ],
    //         CreatedAt: "15 Jan 2024"
    //     },
    //     {
    //         UID: "C003",
    //         Product: "Jacket",
    //         Description: "Une veste élégante et chaude pour affronter les jours les plus froids avec style. Matériau imperméable et coupe-vent.",
    //         Category: "Outerwear",
    //         SubCategory: "Winter Wear",
    //         Brand: "AYD",
    //         OldPrice: 105.00,
    //         Price: 89.99,
    //         Stock: 40,
    //         Rating: 4.6,
    //         Order: 90,
    //         Sales: 1800,
    //         IsFeatured: true,
    //         Image: ["https://www.craftclothing.ph/cdn/shop/products/BM12-W-F_1024x1024.png?v=1644291853"],
    //         Tags: ["Winter", "Waterproof", "Comfort"],
    //         Variants: [
    //             {
    //                 Size: "M",
    //                 Colors: [
    //                     { Color: "Black", Quantity: 10 },
    //                     { Color: "Blue", Quantity: 8 }
    //                 ]
    //             },
    //             {
    //                 Size: "L",
    //                 Colors: [
    //                     { Color: "Gray", Quantity: 7 },
    //                     { Color: "Navy", Quantity: 5 }
    //                 ]
    //             }
    //         ],
    //         CreatedAt: "10 Dec 2023"
    //     },
    //     {
    //       UID: "C004",
    //       Product: "Dress",
    //       Description: "Elegant and stylish evening wear designed to make a statement at any formal or semi-formal occasion. Made from premium fabrics to ensure comfort and sophistication.",
    //       Category: "Dresses",
    //       SubCategory: "Evening Wear",
    //       Brand: "AYD",
    //       OldPrice: 95.00,
    //       Price: 69.99,
    //       Stock: 50,
    //       Rating: 4.7,
    //       Order: 120,
    //       Sales: 2400,
    //       IsFeatured: false,
    //       Image: ["https://www.meshki.us/cdn/shop/files/B125-2024.10.28-MESHKI_9306.png?v=1733347943&width=533"],
    //       Tags: ["Elegant", "Formal", "Evening", "Chic", "Women"],
    //       Variants: [
    //         {
    //           Size: "S",
    //           Colors: [
    //             { Color: "Black", Quantity: 10 },
    //             { Color: "Red", Quantity: 8 },
    //             { Color: "Navy Blue", Quantity: 12 },
    //           ],
    //         },
    //         {
    //           Size: "M",
    //           Colors: [
    //             { Color: "Black", Quantity: 12 },
    //             { Color: "Emerald Green", Quantity: 10 },
    //             { Color: "Maroon", Quantity: 15 },
    //           ],
    //         },
    //         {
    //           Size: "L",
    //           Colors: [
    //             { Color: "Black", Quantity: 8 },
    //             { Color: "Red", Quantity: 9 },
    //             { Color: "Champagne", Quantity: 7 },
    //           ],
    //         },
    //         {
    //           Size: "XL",
    //           Colors: [
    //             { Color: "Black", Quantity: 6 },
    //             { Color: "Silver", Quantity: 5 },
    //             { Color: "Gold", Quantity: 4 },
    //           ],
    //         },
    //       ],
    //       CreatedAt: "05 Feb 2024",
    //     },
    //     {
    //       UID: "C005",
    //       Product: "Sweater",
    //       Description: "Cozy and warm knitwear sweater perfect for chilly days. Its versatile design makes it suitable for casual outings or relaxed office wear.",
    //       Category: "Tops",
    //       SubCategory: "Knitwear",
    //       Brand: "AYD",
    //       OldPrice: 39.99,
    //       Price: 39.99,
    //       Stock: 80,
    //       Rating: 4.4,
    //       Order: 100,
    //       Sales: 2000,
    //       IsFeatured: true,
    //       Image: ["https://fjallraven.com.au/cdn/shop/products/Ovik_Nordic_Sweater_M_82020-020_A_MAIN_FJR.png?v=1702871491"],
    //       Tags: ["Casual", "Knitwear", "Winter", "Cozy", "Unisex"],
    //       Variants: [
    //         {
    //           Size: "S",
    //           Colors: [
    //             { Color: "Grey", Quantity: 15 },
    //             { Color: "Beige", Quantity: 12 },
    //             { Color: "White", Quantity: 10 },
    //           ],
    //         },
    //         {
    //           Size: "M",
    //           Colors: [
    //             { Color: "Grey", Quantity: 20 },
    //             { Color: "Beige", Quantity: 15 },
    //             { Color: "Black", Quantity: 8 },
    //           ],
    //         },
    //         {
    //           Size: "L",
    //           Colors: [
    //             { Color: "Grey", Quantity: 25 },
    //             { Color: "Navy Blue", Quantity: 10 },
    //             { Color: "Olive Green", Quantity: 12 },
    //           ],
    //         },
    //         {
    //           Size: "XL",
    //           Colors: [
    //             { Color: "Charcoal", Quantity: 10 },
    //             { Color: "Cream", Quantity: 7 },
    //             { Color: "Brown", Quantity: 5 },
    //           ],
    //         },
    //       ],
    //       CreatedAt: "06 Feb 2024",
    //     },
    //     {
    //       UID: "C006",
    //       Product: "Shorts",
    //       Description: "Lightweight and comfortable shorts designed for casual and outdoor activities. Crafted from durable materials to ensure longevity.",
    //       Category: "Bottoms",
    //       SubCategory: "Casual Wear",
    //       Brand: "AYD",
    //       OldPrice: 45.99,
    //       Price: 24.99,
    //       Stock: 120,
    //       Rating: 4.3,
    //       Order: 130,
    //       Sales: 2200,
    //       IsFeatured: false,
    //       Image: ["https://s7d2.scene7.com/is/image/FoxRacing/32240001_1?$dw_detn1$&fmt=webp-alpha"],
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
    //     },
    //     {
    //       UID: "C007",
    //       Product: "Skirt",
    //       Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
    //       Category: "Bottoms",
    //       SubCategory: "Office Wear",
    //       Brand: "AYD",
    //       OldPrice: 45.00,
    //       Price: 29.99,
    //       Stock: 70,
    //       Rating: 4.5,
    //       Order: 80,
    //       Sales: 1400,
    //       IsFeatured:true,
    //       Image: ["https://cdn.shopify.com/s/files/1/0528/3407/4795/files/packshot_2_206610_1000_Front_1_FQMINDY-SKIRT_20Black_6af0436f-493e-4d28-b03c-0d5425b32de6_540x.png?v=1729064444"],
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
    //       UID: "C008",
    //       Product: "Hoodie",
    //       Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
    //       Category: "Outerwear",
    //       SubCategory: "Casual Wear",
    //       Brand: "AYD",
    //       OldPrice: 49.99,
    //       Price: 49.99,
    //       Stock: 50,
    //       Rating: 4.8,
    //       Order: 200,
    //       Sales: 4000,
    //       IsFeatured:false,
    //       Image: ["https://timshop.timhortons.ca/cdn/shop/files/693770626480_HoodieAlwaysFreshBlack_Front.png?v=1714573073&width=2048"],
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
    //       UID: "C009",
    //       Product: "Polo Shirt",
    //       Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
    //       Category: "Tops",
    //       SubCategory: "Smart Casual",
    //       Brand: "AYD",
    //       OldPrice: 34.99,
    //       Price: 34.99,
    //       Stock: 90,
    //       Rating: 4.6,
    //       Order: 140,
    //       Sales: 2800,
    //       IsFeatured:true,
    //       Image: ["https://owayo-cdn.com/cdn-cgi/image/format=auto,fit=contain,width=490/newhp/img/productHome/productSeitenansicht/productservice/poloshirt_classic_herren/st3000_blm.png"],
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
  // Vérifier si `products` est non vide
// useEffect(() => {
//   if (products.length > 0) {
//     console.log('Products is no longer empty:', products);
//     // Vous pouvez exécuter une logique supplémentaire ici
//   }
// }, [products]);
  return (
    <div>
    
    
    
    <ProductCart products={products} nbslidesToShow={nbslidesToShow} />
   
    </div>
  )
}


export default BestSellers