import React, { useEffect, useState } from 'react'
import Products from '../../components/products/Products';
// import axios from 'axios';

// import Products 
const ProductsPage = () => {
  const mockCategories= [
    {
      id: 1,
      Name: "T-Shirts",
      subCategorie: [
        "Cartoons",
        "Films",
        "Animes",
        "Jeux vidéo",
        "Art abstrait",
        "Humour",
        "Minimaliste"
      ],
      Icon: "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      Name: "Hoodies",
      subCategorie: [
        "Cartoons",
        "Films",
        "Animes",
        "Streetwear",
        "Vintage",
        "Saisonnier"
      ],
      Icon: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      Name: "Vestes",
      subCategorie: [
        "Films",
        "Animes",
        "Logos",
        "Minimaliste",
        "Détail graphique"
      ],
      Icon: "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      Name: "Jupes",
      subCategorie: [
        "Motifs floraux",
        "Minimaliste",
        "Thème animé",
        "Art abstrait"
      ],
      Icon: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      Name: "Robes",
      subCategorie: [
        "Casual animé",
        "Élégance minimaliste",
        "Saisonnière",
        "Art moderne"
      ],
      Icon: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 6,
      Name: "Chemises",
      SubCategory: [
        "Films et séries",
        "Art graphique",
        "Thème cartoon",
        "Vintage"
      ],
      Icon: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]
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
  
    // const [mockCategories, setCategories] = useState([]); // État pour stocker les catégories
  
  
  // useEffect(() => {
  //   // Fonction pour récupérer les catégories
  //   const fetchCategories = async () => {
  //       try {
  //           const response = await axios.get('https://localhost:7057/api/Category', {
  //               headers: {
  //                   accept: 'application/json',
  //               },
  //           });
  //           setCategories(response.data); // Mettre à jour l'état avec les données récupérées
  //       } catch (error) {
  //           console.error('Erreur lors de la récupération des catégories :', error);
  //       }
  //   };
  
  //   fetchCategories(); // Appel de la fonction
  // }, []);
  useEffect(()=>{
  console.log("mockCategories ",mockCategories)
  },[mockCategories])
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
  useEffect(() => {
    if (products.length > 0) {
      console.log('Products is no longer empty:', products);
      // Vous pouvez exécuter une logique supplémentaire ici
    }
  }, [products]);
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategoryId(openCategoryId === id ? null : id);
  };
  useEffect(() => {
    // Forcer le scroll au top lors de l'ouverture du composant
    window.scrollTo(0, 0);
  }, []); // Le tableau vide garantit que cela ne se produit qu'une seule fois, lors du montage du composant

    return (
    <main class="h-auto pt-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-4">
                          <div
                          class="rounded-lg  h-full"
                          >
                              {/* <aside
                                  id="default-sidebar"
                                  className="hidden lg:block z-40 transition-transform"
                                  aria-label="Sidenav"
                                >
                                            <div className="overflow-y-auto px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                                  <ul className="space-y-2">
                                                    {mockCategories.map((category) => (
                                                      <li key={category.id}>
                                                        <button
                                                          onClick={() => toggleCategory(category.id)}
                                                          className="flex items-center justify-between w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        >
                                                          <span className="ml-3">{category.Name}</span>
                                                          {category.subCategorie?.length > 0 && (
                                                            <svg
                                                              className={`ml-2 w-[16px] h-[16px] text-gray-800 dark:text-white transition-transform duration-300 ${
                                                                openCategoryId === category.id ? "rotate-180" : "rotate-0"
                                                              }`}
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width="24"
                                                              height="24"
                                                              fill="none"
                                                              viewBox="0 0 24 24"
                                                            >
                                                              <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="m19 9-7 7-7-7"
                                                              />
                                                            </svg>
                                                          )}
                                                        </button>

                                                        {openCategoryId === category.id && (
                                                          <ul className="mt-2 space-y-3 pl-6 m-4">
                                                          {category.subCategorie.map((sub, index) => (
                                                            <li
                                                              key={index}
                                                              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
                                                            >
                                                              {sub}
                                                            </li>
                                                          ))}
                                                        </ul>
                                                        )}
                                                      </li>
                                                    ))}
                                                  </ul>
                                            </div>
                              </aside> */}

                          </div>

                          <div
                          class="px-4  w-full relative h-[300px] overflow-hidden rounded-lg rounded-t-none"
                          >
                              <img src="https://marketplace.canva.com/EAE8VK9OL2s/1/0/1600w/canva-4q0cOBFil-w.jpg" 
                              alt="" className='rounded-lg h-full w-full object-cover shadow-xl z-10'/>
                          </div>
                          <div
                          class="rounded-lg   h-full">
                              <Products mockCategories={mockCategories} products={products}/>
                          </div>
                          
                </div>
      
    </main>
  )
}

export default ProductsPage