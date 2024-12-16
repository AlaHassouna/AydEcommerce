import React from 'react'
import ProductCart from './ProductCart';


   const BestSellers = () => {
    const products = [
        {
            UID: "C001",
            Product: "T-shirt",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
            Category: "Tops",
            SubCategory: "Casual Wear",
            Brand: "AYD",
            OldPrice: 35.00,
            Price: 19.99,
            Stock: 100,
            Rating: 4.3,
            Order: 200,
            Sales: 3000,
            IsFeatured:true,
            Image: [
                "https://timshop.timhortons.ca/cdn/shop/files/693770626664_TShirtIconWhite_Front.png?v=1714573840&width=2048",
                "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-nz/S001463520/PPAGK-254-kids-Tshirt-marquee-001?cb=c7d589026f2c77059bcbd4f875f3dcf0b1a73a0c",
                "https://www.exist.com.tn/95266-large_default/t-shirt.jpg"
            ]
        },
        {
            UID: "C002",
            Product: "Jeans",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
            Category: "Bottoms",
            SubCategory: "Denim",
            Brand: "AYD",
            OldPrice: 65.00,
            Price: 49.99,
            Stock: 60,
            Rating: 4.5,
            Order: 150,
            Sales: 2500,
            IsFeatured:false,
            Image: ["https://www.wibra.fr/wp-content/uploads/sites/5/2023/07/06932687-000-01.png"]
        },
        {
            UID: "C003",
            Product: "Jacket",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
            Category: "Outerwear",
            SubCategory: "Winter Wear",
            Brand: "AYD",
            OldPrice: 105.00,
            Price: 89.99,
            Stock: 40,
            Rating: 4.6,
            Order: 90,
            Sales: 1800,
            IsFeatured:true,
            Image: ["https://www.craftclothing.ph/cdn/shop/products/BM12-W-F_1024x1024.png?v=1644291853"]
        },
        {
            UID: "C004",
            Product: "Dress",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
            Category: "Dresses",
            SubCategory: "Evening Wear",
            Brand: "AYD",
            OldPrice: 95.00,
            Price: 69.99,
            Stock: 50,
            Rating: 4.7,
            Order: 120,
            Sales: 2400,
            IsFeatured:false,
            Image: ["https://www.meshki.us/cdn/shop/files/B125-2024.10.28-MESHKI_9306.png?v=1733347943&width=533"]
        },
        {
            UID: "C005",
            Product: "Sweater",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
            Category: "Tops",
            SubCategory: "Knitwear",
            Brand: "AYD",
            OldPrice: 39.99,
            Price: 39.99,
            Stock: 80,
            Rating: 4.4,
            Order: 100,
            Sales: 2000,
            IsFeatured:true,
            Image: ["https://fjallraven.com.au/cdn/shop/products/Ovik_Nordic_Sweater_M_82020-020_A_MAIN_FJR.png?v=1702871491"]
        },
        {
            UID: "C006",
            Product: "Shorts",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa pariatur eius illum numquam sed vitae modi, vel impedit amet officia provident in facere! Reiciendis ratione impedit eligendi amet laudantium?",
            Category: "Bottoms",
            SubCategory: "Casual Wear",
            Brand: "AYD",
            OldPrice: 45.99,
            Price: 24.99,
            Stock: 120,
            Rating: 4.3,
            Order: 130,
            Sales: 2200,
            IsFeatured:false,
            Image: ["https://s7d2.scene7.com/is/image/FoxRacing/32240001_1?$dw_detn1$&fmt=webp-alpha"]
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
            Image: ["https://cdn.shopify.com/s/files/1/0528/3407/4795/files/packshot_2_206610_1000_Front_1_FQMINDY-SKIRT_20Black_6af0436f-493e-4d28-b03c-0d5425b32de6_540x.png?v=1729064444"]
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
            Image: ["https://timshop.timhortons.ca/cdn/shop/files/693770626480_HoodieAlwaysFreshBlack_Front.png?v=1714573073&width=2048"]
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
            Image: ["https://owayo-cdn.com/cdn-cgi/image/format=auto,fit=contain,width=490/newhp/img/productHome/productSeitenansicht/productservice/poloshirt_classic_herren/st3000_blm.png"]
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
            Image: ["https://media.balmain.com/image/upload/f_auto,q_auto,dpr_auto/c_fill,w_375,h_530/sfcc/balmain/hi-res/CF1SG008WB080PAF?_i=AG"]
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
            Image: ["https://www.hummel.fr/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwf266066e/images/packshot/213323-7010.png?sw=1028&sh=1370&sm=fit&q=90"]
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
            Image: ["https://www.french-scarf.com/ar-men-s-silk-scarf-red-charles-336_25771574.png"]
        }
    ];
  return (
    <div>
    
    
    
    <ProductCart products={products} />
   
    </div>
  )
}


export default BestSellers