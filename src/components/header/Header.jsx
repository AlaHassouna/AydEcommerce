import React, { useContext, useState } from 'react';
import logo from '../../assets/images/logo1.png';
import logoWhite from '../../assets/images/logowhite.png';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';


const Header = () => {
  const context= useContext(MyContext)
  const { panier } = useContext(MyContext);
  const { setPanier } = useContext(MyContext);
  console.log("panier ",panier)
  console.log("panier.length ",panier.length)
  const [cart, setCart] = useState(false);
  const [account, setAccount] = useState(false);
  const [menu, setMenu] = useState(false);
  const [allCategories, setAllCategories] = useState(false);
  // const [login, setLogin] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);

  const handleOpenModal = (event, index) => {
    event.stopPropagation();
    setItemIndex(index); // Stocke l'index de l'article
    setShowModal(true);  // Affiche le modal
  };

  const handleAccept = () => {
    setPanier((prev) => {
      const updatedPanier = prev.filter((_, idx) => idx !== itemIndex);
      localStorage.setItem("panier", JSON.stringify(updatedPanier)); // Met à jour le localStorage
      return updatedPanier;
    });
    setShowModal(false); // Ferme le modal
    setItemIndex(null);  // Réinitialise l'index
  };

  const handleDecline = () => {
    setShowModal(false); // Ferme le modal sans suppression
  };
//   const Categories = [
//     { Name: "Vêtements Hommes", subCategorie: ["T-shirts", "Chemises", "Vestes"] },
//     { Name: "Vêtements Femmes", subCategorie: ["Robes", "Blouses"] },
//     { Name: "Vêtements Enfants", subCategorie: [] }, // Pas de sous-catégories
//     { Name: "Accessoires", subCategorie: ["Sacs", "Chapeaux", "Écharpes"] },
   
// ];
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
      "Polo T-Shirts",
      "Casual"
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
      "Casual",
      "Saisonnier"
    ],
    Icon: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    Name: "Sweaters",
    subCategorie: [
      "Cartoons",
      "Films",
      "Streetwear",
      "Vintage",
      "Saisonnier",
      "Casual"
    ],
    Icon: "https://images.pexels.com/photos/2613261/pexels-photo-2613261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 10,  // ID unique pour cette catégorie
    Name: "Survêtements",  // Nom de la catégorie
    subCategorie: [
      "Casual",
      "Sport",
      "Streetwear",
      "Saisonnier"
    ],  // Sous-catégories possibles pour les tracksuits
    Icon: "https://images.pexels.com/photos/26664909/pexels-photo-26664909/free-photo-of-les-moments.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Icône associée à la catégorie
  },
  
  {
    id: 7,  // ID unique pour cette catégorie
    Name: "Pantalons",  // Nom de la catégorie
    subCategorie: [
      "Jeans",
      "Chinos",
      "Jogging",
      "Formel"
    ],  // Sous-catégories
    Icon: "https://images.pexels.com/photos/1895943/pexels-photo-1895943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Icône associée à la catégorie
  },
  {
    id: 3,
    Name: "Vestes",
    subCategorie: [
      "Films",
      "Animes",
      "Logos",
      "Casual",
      "Formel",
      "Détail graphique"
    ],
    Icon: "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 9,
    Name: "Shorts",
    subCategorie: [
      "Casual",
      "Sport",
      "Vintage",
      "Saisonnier",
      "Streetwear"
    ],
    Icon: "https://images.pexels.com/photos/18394309/pexels-photo-18394309/free-photo-of-portrait-d-un-jeune-garcon-avec-une-silhouette-sombre-contre-le-mur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    Name: "Jupes",
    subCategorie: [
      "Motifs floraux",
      "Casual",
      
    ],
    Icon: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    Name: "Robes",
    subCategorie: [
      "Casual",
      "Élégance minimaliste",
      "Saisonnière",
      "Art moderne"
    ],
    Icon: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  // {
  //   id: 6,
  //   Name: "Chemises",
  //   SubCategory: [
  //     "Films et séries",
  //     "Art graphique",
  //     "Thème cartoon",
  //     "Vintage"
  //   ],
  //   Icon: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400"
  // },
  
  
  
  
  {
    id: 10,
    Name: "Accessoires",
    subCategorie: [
      "Écharpes",
      "Chapeaux",
      "Gants",
      "Bijoux",
      "Sacs à main"
    ],
    Icon: "https://images.pexels.com/photos/30076369/pexels-photo-30076369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const toggleCart = () => {
    setCart(!cart);
  };
  const toggleAccount = () => {
    setAccount(!account);
  };
  const toggleAllCategories = () => {
    setAllCategories(!allCategories);
  };
  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
    
  };  
  
  return (
   
    // <header class="shadow-md bg-white dark:bg-gray-800">
    <header class=" bg-white dark:bg-gray-800">
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            
            <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        className="mr-3 h-9 sm:h-12"
                        alt="Flowbite Logo"
                      />
            </Link>
            <div class="flex items-center lg:order-2">
              {context.isLogin !==true? (<>
              <Link to="/login" class="p-2 text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm  lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              Connexion
              </Link>
                <Link to="/register" class="rounded-3xl text-white bg-[#011d28] hover:bg-[#011d28e6] focus:ring-4 focus:ring-[#011d28e6] font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                Commencer
                </Link>
                </>):<div className="relative ">
                 <button id="userDropdownButton1" data-dropdown-toggle="userDropdown1" 
                 type="button" class="inline-flex items-center rounded-lg justify-center p-2 
                  text-sm font-medium leading-none text-gray-900 dark:text-white"
                 onClick={toggleAccount}
                 >
                   <img className="h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>

                 </button>
                 {account && 
                 <div id="userDropdown1" class="right-0 absolute z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
                   <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Profil</a></li>
                     {/* <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Orders </a></li>
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Settings </a></li>
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Favourites </a></li>
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Delivery Addresses </a></li>
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Billing Data </a></li> */}
                   
                     <button onClick={()=>context.setIsLogin(!context.isLogin)} class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Sign Out </button>
                   
                   </ul>
               
                   {/* <div class="p-2 text-sm font-medium text-gray-900 dark:text-white">
                     <button onClick={()=>context.setIsLogin(!context.isLogin)} class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Sign Out </button>
                   </div> */}
                 </div>
               }
               </div> }
                
            </div>
            <div class="hidden  justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <div class="w-full max-w-sm min-w-[200px]">
                    <div class="relative flex items-center">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                      </svg>
                  
                      <input
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="Rechercher ..." 
                      /> */}
                      <div className="p-4 mb-4 text-sm text-[#011d28] rounded-lg  dark:bg-gray-800 " role="alert">
                        <span className="font-medium">Livraison gratuite </span> à partir de 100DT
                      </div>
                      
                    </div>
              </div>
              </div>
            </div>
    </nav>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                {/* Categories */}
                  <div className="flex items-center gap-6">
                    <div className="relative">
                        <button
                          id="dropdownDefaultButton"
                          data-dropdown-toggle="dropdown"
                          className="z-10 text-white bg-[#011d28] hover:bg-[#011d28e6] focus:ring-2 focus:outline-none focus:ring-[#011d28e6] font-medium rounded-3xl	 text-sm px-5 py-2.5 text-center inline-flex items-center "
                          type="button"
                          onClick={toggleAllCategories}
                        >
                          Catégories
                          <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                    {/* Dropdown menu */}
                    {allCategories && (
                    <div
                    id="dropdown"
                    className="absolute z-50 border-t-white border-2 border-[#011d28] bg-white divide-y divide-gray-100 rounded-b-lg shadow w-60 dark:bg-gray-700"
                  >
                    
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
  {mockCategories.map((category, index) => (
    <li key={index} className="relative group">
      {category.subCategorie && category.subCategorie.length > 0 ? (
        // Afficher une catégorie avec sous-catégories
        <div>
          <Link
          
                to="/products"
                onClick={() => toggleAllCategories()}
                state={{ categoryName: category.Name }} // Passez l'état avec categoryName
                  key={category.id}
                
            className="flex justify-between items-center w-full px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
          >
            {category.Name}
            <svg className="w-4 h-4 text-[#011d28] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
            </svg>
          </Link>
          <ul className="w-max max-w-full border-2 border-[#011d28] absolute left-full top-0 hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-x-auto">
            {category.subCategorie.map((subcategory, subIndex) => (
              <li key={subIndex}>
                <Link
                  to="/products"
                  onClick={() => toggleAllCategories()}
                  state={{ categoryName: category.Name ,subCategoryName:subcategory}} // Passez l'état avec categoryName
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {subcategory}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Afficher une catégorie sans sous-catégories
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          {category.Name}
        </a>
      )}
    </li>
  ))}
</ul>

                    
                  </div>
                  )}

                  
            </div>
            </div>
            
           
            <div class="flex items-center lg:order-2">
              
            <div class="flex items-center lg:space-x-2">
                    <div className="relative">
                      <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" 
                      type="button" class="inline-flex items-center rounded-lg justify-center p-2
                        text-sm font-medium leading-none
                        text-gray-900 dark:text-white"
                        onClick={toggleCart}
                        >
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                            </svg>
                            {panier.length>0 &&(
                            
                              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white 
                              bg-[#011d28] border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                                {panier.length}
                                
                                </div>
                                )
                             }   
                      </button>
                        {cart &&
                        <div>
                        {panier && panier.length > 0 ? (
                          <div
                            id="myCartDropdown1"
                            className="right-0 z-50 divide-y divide-gray-100 overflow-y-auto absolute  w-[250px] mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800"
                          >
                            {panier.map((item, index) => (
                              <div className="grid grid-cols-2" key={item.UID || index}>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <a
                                      href="#"
                                      className="flex items-center aspect-square w-10 h-10 shrink-0"
                                    >
                                      <img
                                        className="h-auto w-full max-h-full"
                                        src={item.image} // Affiche la première image du produit
                                        alt={item.Product}
                                      />
                                    </a>
                                    <div className="flex flex-col">
                                        {/* Nom du produit */}
                                        <a
                                          href="#"
                                          className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                                        >
                                          {item.Product}
                                        </a>
                                        
                                        {/* Taille et couleur */}
                                        <div className="mt-1">
                                          <p className="text-xs font-normal leading-none text-gray-500 dark:text-gray-400">
                                            Taille : {item.size}
                                          </p>
                                          <p className="text-xs font-normal leading-none text-gray-500 dark:text-gray-400">
                                            Couleur : {item.color}
                                          </p>
                                        </div>
                                        <p className="mt-0.5 truncate text-xs	 font-normal text-gray-500 dark:text-gray-400">
                                      {item.Price.toFixed(2)}
                                    </p>
                                      </div>
                                    </div>
                                    
                                  </div>
                    
                                  <div className="flex items-center justify-end gap-6">
                                    <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                                      Qty: {item.quantity }
                                    </p>
                  
                                  <div>
                                        {/* Bouton pour ouvrir le modal */}
                                        <button
                                          type="button"
                                          className="text-[#551121] hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                                          onClick={(event) => handleOpenModal(event, index)}
                                        >
                                          <svg
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                                              clipRule="evenodd"
                                            />
                                          </svg>
                                        </button>

                                        {/* Modal */}
                                        {showModal && (
                                          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                                              {/* Header */}
                                              <div className="flex items-center justify-between">
                                                <h2 className="text-lg font-semibold text-gray-800">
                                                  Confirmation de suppression
                                                </h2>
                                                <button
                                                  onClick={handleDecline}
                                                  className="text-gray-400 hover:text-gray-600"
                                                >
                                                  <svg
                                                    className="w-4 h-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                  >
                                                    <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M6 18L18 6M6 6l12 12"
                                                    />
                                                  </svg>
                                                </button>
                                              </div>

                                              {/* Body */}
                                              <div className="mt-4">
                                                <p className="text-sm text-gray-600">
                                                  Êtes-vous sûr de vouloir supprimer cet article ? Cette action
                                                  est irréversible.
                                                </p>
                                              </div>

                                              {/* Footer */}
                                              <div className="mt-6 flex justify-end space-x-2">
                                                <button
                                                  onClick={handleDecline}
                                                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                                >
                                                  Annuler
                                                </button>
                                                <button
                                                  onClick={handleAccept}
                                                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                                >
                                                  I accept
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>

                                </div>
                              </div>
                            ))}
                  
                            <Link
                              to="/checkout"
                             
                              className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg  px-5 py-2.5 text-sm font-medium text-white bg-[#011d28] hover:bg-[#011d28e6] focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                              role="button"
                            >
                              Passer la commande
                            </Link>
                          </div>
                        ) : (
                          
                            <div id="myCartDropdown1" class="right-0  divide-y divide-gray-100  overflow-y-auto  dark:divide-gray-600   absolute  z-10 w-[250px] mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800 ">
                              
                              
                          
                          
                              
                          
                              <p href="#" title="" class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg text-[#011d28] px-5 py-2.5 text-sm font-medium  dark:text-white" > 
                              Votre panier est vide.
                                </p>
                            </div>
                            
                        )}
                      </div>
                        }
                      </div>
                      <button data-collapse-toggle="mobile-menu-2" type="button" 
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden 
                hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false"
                onClick={toggleMenu}
                >
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                      
                 </div>
                
            </div>
            <div
              className={`${
                menu ? "block" : "hidden"
              } lg:flex justify-between items-center w-full lg:w-auto lg:order-1 mt-4`}
              id="mobile-menu-2"
            >
              <div class="lg:hidden w-full max-w-sm min-w-[200px]">
                    {/* <div class="relative flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                      </svg>
                  
                      <input
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#011d28] rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-[#011d28e6] hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="Rechercher ..." 
                      />
                      
                      
                    </div> */}
                </div>
                <ul className="flex flex-col justify-between space-y-2 font-medium lg:flex-row lg:space-x-8 lg:space-y-0 lg:mt-0">
  <li className="mt-2 lg:mt-0">
    <Link
      to="/"
      title="Home"
      className="text-sm font-medium text-gray-900 hover:text-[#011d28c4] dark:text-white dark:hover:text-primary-500"
    >
      Home
    </Link>
  </li>
  <li className="mt-2 lg:mt-0">
    <Link
        to="/products"
            title="Produits"
      className="text-sm font-medium text-gray-900 hover:text-[#011d28c4] dark:text-white dark:hover:text-primary-500"
    >
      Produits
    </Link>
  </li>
  <li className="mt-2 lg:mt-0">
    <Link
      to="/products/?trie=newest"
     
      className="text-sm font-medium text-gray-900 hover:text-[#011d28c4] dark:text-white dark:hover:text-primary-500"
    >
      Nouveautés
    </Link>
  </li>
  <li className="mt-2 lg:mt-0">
    <Link
      to="/products/?trie=topRated"
      
      className="text-sm font-medium text-gray-900 hover:text-[#011d28c4] dark:text-white dark:hover:text-primary-500"
    >
      Meilleures évaluations
    </Link>
  </li>
  <li className="mt-2 lg:mt-0">
    <Link
      to="/products/?trie=bestSellers"
      
      className="text-sm font-medium text-gray-900 hover:text-[#011d28c4] dark:text-white dark:hover:text-primary-500"
    >
      Bestsellers
    </Link>
  </li>
 
</ul>

              
              
            </div>

        </div>
    </nav>
</header>
  );
};

export default Header;
