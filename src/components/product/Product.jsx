import React, { useContext, useEffect, useState } from 'react'
import Rating from './rating/Rating';
import { useLocation } from 'react-router-dom';
import { MyContext } from '../../App';
// onClick={context.addToCart(product,selectedSize,selectedColor)}
import { useParams } from 'react-router-dom'; 

// import axios from 'axios';


const Product = () => {
  const { addToCart } = useContext(MyContext);
  const { id } = useParams();// Récupère l'ID depuis l'URL
  // const [product, setProduct] = useState(); // État pour les données du produit
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [error, setError] = useState(null); // État pour les erreurs
//   useEffect(() => {
//     const fetchProduct = async () => {
//         try {
//             const response = await axios.get(`https://localhost:7057/api/Products/${id}`, {
//                 headers: {
//                     accept: 'application/json', // Specify the content type expected from the API
//                 },
//             });
//             console.log("response.data", response.data);
//             setProduct(response.data); // Store the data in the state
//         } catch (error) {
//             setError(error.message); // Handle errors
//         }
//     };

//     fetchProduct(); // Call the async function
// }, [id]); // Dependency array ensures the effect runs when `id` changes

const location = useLocation();
const product = location.state?.product;
console.log("product",product)

const [quantity, setQuantity] = useState(1);
const [selectedColor, setSelectedColor] = useState(null);
const [selectedSize, setSelectedSize] = useState(null);
// Ajoutez un état pour l'image sélectionnée
const [selectedImage, setSelectedImage] = useState(null);
useEffect(() => {
  console.log("selectedColor ",selectedColor )
  // Se déplace en haut de la page lorsque le composant est monté

}, [selectedColor]);
useEffect(() => {
// Assurez-vous que product est défini avant d'accéder aux propriétés
if (product && product.Image && product.Image.length > 0) {
  setSelectedImage(product.Image[0]);
}

// Vérifiez également les propriétés pour éviter des erreurs si product ou variants n'est pas défini
if (product && product.Variants && product.Variants.length > 0) {
  setSelectedColor(product.Variants[0]?.Colors[0]?.Color);
  setSelectedSize(product.Variants[0]?.Size);
}
}, [product]);
console.log("product ",product)
  const handleAddToCart = () => {
    // console.log("product ",product)
    const cartItem = {
      id: product?.UID,
      name: product?.Product,
      price: product?.Price,
      image: selectedImage, // Ajout de l'image sélectionnée
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      OldPrice: product?.OldPrice,
        };
    // console.log("cartItem ",cartItem)

    addToCart(cartItem); // Appel de la méthode addToCart avec l'élément du panier
  };
  useEffect(() => {
    
    // Se déplace en haut de la page lorsque le composant est monté
    window.scrollTo(0, 0);
  }, []);

  

  // Fonction pour trouver la quantité maximale pour la couleur et la taille sélectionnées
  const getMaxQuantity = () => {
    const variant = product?.Variants.find((v) => v.Size === selectedSize);
    const colorVariant = variant?.Colors.find((c) => c.Color === selectedColor);
    return colorVariant ? colorVariant.Quantity : 0;
  };

  const handleIncrease = () => {
    if (quantity < getMaxQuantity()) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleColorChange = (color) => {
    setSelectedColor(color);
    setQuantity(1); // Réinitialiser la quantité à 1 lorsqu'une nouvelle couleur est choisie
  };
  
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setQuantity(1); // Réinitialiser la quantité à 1 lorsqu'une nouvelle taille est choisie
  };
   // Trouver les couleurs disponibles pour la taille sélectionnée
   const colorsForSelectedSize = selectedSize
   ? product?.Variants.find((variant) => variant.Size === selectedSize)?.Colors || []
   : [];
   const [zoomStyle, setZoomStyle] = useState({
    backgroundPosition: 'center',
    backgroundSize: '80%', // Taille du zoom
  });

  // Fonction pour gérer le zoom basé sur la position du curseur
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calcul de la position du fond pour zoomer au niveau du curseur
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setZoomStyle({
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      backgroundSize: '200%', // Zoom sur l'image
    });
  };

  // Réinitialiser le zoom lorsque la souris quitte l'image
  const handleMouseLeave = () => {
    setZoomStyle({
      backgroundPosition: 'center',
      backgroundSize: '80%', // Retour à la taille normale
    });
  };
  return (
    <div class="font-sans bg-white">
            <div class="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                    <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">

                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                    <div
                      className="relative w-3/4 mx-auto overflow-hidden"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        height: '400px', // Vous pouvez ajuster la taille selon vos besoins
                        backgroundImage: `url(${selectedImage})`,
                        backgroundPosition: zoomStyle.backgroundPosition,
                        backgroundSize: zoomStyle.backgroundSize,
                        backgroundRepeat: 'no-repeat',
                        cursor: 'zoom-in',
                      }}
                    >
                      <img
                        src={selectedImage}
                        alt="Product"
                        className="w-full h-full object-cover opacity-0" // Image invisible en fond pour le zoom
                      />
                    </div>
                     {/* Miniatures d'images */}
                    <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                      {product?.Image.map((image, index) => (
                        <div
                          key={index}
                          className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer"
                          onClick={() => setSelectedImage(image)} // Change l'image sélectionnée lorsqu'on clique
                        >
                          <img
                            src={image}
                            alt={`Product ${index + 1}`}
                            className="w-full h-full object-contain transition-transform duration-300 transform hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                    </div>
                    </div>

                    <div class="lg:col-span-2">
                    <div class="flex items-center justify-between gap-6 mb-6">
                            <div class="text">
                                <h2 class="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">{product?.Product}
                                </h2>
                            </div>
                            <button class="group transition-all duration-500 p-0.5">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle
                                        class="fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100"
                                        cx="30" cy="30" r="30" fill="" />
                                    <path
                                        class="stroke-[#011d28] transition-all duration-500 group-hover:stroke-[#011d28e6]"
                                        d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
                                        stroke="" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    <div class="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                      
                            <div class="flex items-center">
                                <h5 class="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
                                {product?.Price}
                                <span className="ml-1 text-xs">Dt</span>
                                 </h5>
                                 {product?.OldPrice > product?.Price && (
                                <span class="ml-3 font-semibold text-lg text-[#c5274c]">{Math.round(((product?.OldPrice - product?.Price) * 100) / product?.OldPrice)}% réduction</span>
                                 )}
                                </div>
                            <svg class="mx-5 max-[400px]:hidden" xmlns="http://www.w3.org/2000/svg" width="2"
                                height="36" viewBox="0 0 2 36" fill="none">
                                <path d="M1 0V36" stroke="#E5E7EB" />
                            </svg>
                            <button class="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12657_16865)">
                                        <path
                                            d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                                            fill="white" />
                                        <g clip-path="url(#clip1_12657_16865)">
                                            <path
                                                d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                                                fill="white" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12657_16865">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_12657_16865">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span class="text-base font-medium text-white">{product?.Rating}</span>
                            </button>
                        </div>
                        <div>
      {/* Titre Taille */}
      <p className="font-medium text-lg text-gray-900 mb-2">Taille</p>
      {/* Boutons de tailles */}
<div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-3 mb-3 min-[400px]:mb-8">
  {product?.Variants.map((variant, index) => (
    <button
      key={index}
      onClick={() => handleSizeChange(variant.Size)} // Mise à jour de l'état lors du clic
      className={`border border-gray-200 whitespace-nowrap text-gray-900 text-sm leading-6 py-2.5 rounded-full px-5 text-center w-full font-semibold shadow-sm shadow-transparent transition-all duration-300 ${
        selectedSize === variant.Size
          ? "bg-gray-100 border-gray-400"
          : "hover:bg-gray-50 hover:shadow-gray-300"
      }`}
    >
      {variant.Size}
    </button>
  ))}
</div>

      {/* Couleurs */}
{selectedSize && (
  <>
    <p className="font-medium text-lg text-gray-900 mb-2">Couleurs disponibles</p>
    <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6">
      {colorsForSelectedSize.map((color, index) => (
        <button
          key={index}
          onClick={() => handleColorChange(color.Color)} // Mise à jour de l'état lors du clic
          className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500 focus:border-emerald-500"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill={color.Color.toLowerCase()} />
          </svg>
          <span className="sr-only">{color.Color}</span>
        </button>
      ))}
    </div>
  </>
)}
    </div>
                        <div class="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                        <div className="flex items-center space-x-4">
      {/* Bouton de diminution */}
      <button
        className="group py-[14px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300"
        onClick={handleDecrease}
      >
        <svg className="stroke-black group-hover:stroke-black" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 11H5.5" stroke="#000" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </button>

      {/* Champ d'input pour la quantité */}
      <input
        type="number"
        className="font-semibold border-0 text-gray-900 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-900 text-center hover:text-indigo-600 outline-0"
        value={quantity}
        readOnly
      />

      {/* Bouton d'augmentation */}
      <button
        className="group py-[14px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300"
        onClick={handleIncrease}
      >
        <svg className="stroke-black group-hover:stroke-black" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5.5V16.5M16.5 11H5.5" stroke="#000" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </button>
    </div>
                            <button
                            onClick={handleAddToCart}
                                class="group py-3 px-5 rounded-full bg-indigo-50 text-[#011d28] font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-200 hover:bg-indigo-100">
                                <svg class="stroke-[#011d28] transition-all duration-500 group-hover:stroke-[#011d28e6]"
                                    width="22" height="22" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                                        stroke="" stroke-width="1.6" stroke-linecap="round" />
                                </svg>
                                Add to cart</button>
                        </div>
                        <button
                            class="text-center w-full px-5 py-4 rounded-[100px] bg-[#011d28] flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-[#011d28e6] hover:shadow-indigo-300">
                            Acheter maintenant
                        </button>
                    </div>
                </div>

                <div class="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <h3 class="text-xl font-bold text-gray-800">Description</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {product?.Description}
                      </p> 
                
                    <Rating/>
                </div>
            </div>
        </div>
  )
}

export default Product