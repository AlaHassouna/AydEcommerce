import React, { useState } from 'react';
import logo from '../../assets/images/logo1.png';
import logoWhite from '../../assets/images/logowhite.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [cart, setCart] = useState(false);
  const [account, setAccount] = useState(false);
  const [menu, setMenu] = useState(false);
  const [allCategories, setAllCategories] = useState(false);
  const [login, setLogin] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  
  const Categories = [
    { name: "Vêtements Hommes", subcategories: ["T-shirts", "Chemises", "Vestes"] },
    { name: "Vêtements Femmes", subcategories: ["Robes", "Blouses"] },
    { name: "Vêtements Enfants", subcategories: [] }, // Pas de sous-catégories
    { name: "Accessoires", subcategories: ["Sacs", "Chapeaux", "Écharpes"] },
   
];

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
              {login !==true? (<><a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm  lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Connexion</a>
                <a href="#" class="rounded-3xl text-white bg-[#011d28] hover:bg-[#011d28e6] focus:ring-4 focus:ring-[#011d28e6] font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Commencer</a>
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
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Account </a></li>
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Orders </a></li>
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Settings </a></li>
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Favourites </a></li>
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Delivery Addresses </a></li>
                     <li><a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Billing Data </a></li>
                   </ul>
               
                   <div class="p-2 text-sm font-medium text-gray-900 dark:text-white">
                     <a href="#" title="" class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Sign Out </a>
                   </div>
                 </div>
               }
               </div> }
                
            </div>
            <div class="hidden  justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <div class="w-full max-w-sm min-w-[200px]">
                    <div class="relative flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                      </svg>
                  
                      <input
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="Rechercher ..." 
                      />
                      
                      
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
                          className="text-white bg-[#011d28] hover:bg-[#011d28e6] focus:ring-2 focus:outline-none focus:ring-[#011d28e6] font-medium rounded-3xl	 text-sm px-5 py-2.5 text-center inline-flex items-center "
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
                    className="absolute mt-2.5 z-10 border-t-white border-2 border-[#011d28] bg-white divide-y divide-gray-100 rounded-b-lg shadow w-60 dark:bg-gray-700"
                  >
                    
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
                        {Categories.map((category, index) => (
                          <li key={index} className="relative group">
                            {category.subcategories && category.subcategories.length > 0 ? (
                              // Afficher une catégorie avec sous-catégories
                              <div>
                                <button
                                  className="flex justify-between items-center w-full px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                                >
                                  {category.name}
                                  <svg class="w-4 h-4 text-[#011d28] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                                  </svg>

                                </button>
                                <ul className="w-full  border-2 border-[#011d28] absolute left-full top-0 hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg rounded-lg">
                                  {category.subcategories.map((subcategory, subIndex) => (
                                    <li key={subIndex}>
                                      <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                      >
                                        {subcategory}
                                      </a>
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
                                {category.name}
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

                            <span class="sr-only">Notifications</span>
                              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#011d28] border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">3</div>
                                
                      </button>
                      {cart &&
                      <div id="myCartDropdown1" class="right-0  divide-y divide-gray-100  overflow-y-auto  dark:divide-gray-600   absolute  z-10 w-[250px] mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800 ">
                        <div class="grid grid-cols-2">
                          <div>
                          <div class="flex items-center gap-2">
                                  <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                                    <img class="h-auto w-full max-h-full dark:hidden" src="https://mms-images-prod.imgix.net/mms/images/catalog/6a62c76ef0978853a20391b6c32da4fe/colors/176100/views/alt/front_medium_extended.png?dpr=1.2&auto=format&nrs=0&w=320" alt="imac image" />
                                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                                  </a>
                                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">T-shirt</a>
                                </div>
                            <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$599</p>
                          </div>
                    
                          <div class="flex items-center justify-end gap-6">
                            <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
                    
                            <button data-tooltip-target="tooltipRemoveItem1a" type="button" class="text-[#551121] hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                              <span class="sr-only"> Remove </span>
                              <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                              </svg>
                            </button>
                            <div id="tooltipRemoveItem1a" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                              Remove item
                              <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                          </div>
                        </div>
                        <div class="grid grid-cols-2">
                          <div>
                          <div class="flex items-center gap-2">
                                  <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                                    <img class="h-auto w-full max-h-full dark:hidden" src="https://www.wibra.fr/wp-content/uploads/sites/5/2023/07/06932687-000-01.png" alt="imac image" />
                                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                                  </a>
                                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Jeans</a>
                                </div>
                            <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$599</p>
                          </div>
                    
                          <div class="flex items-center justify-end gap-6">
                            <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
                    
                            <button data-tooltip-target="tooltipRemoveItem1a" type="button" class="text-[#551121] hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                              <span class="sr-only"> Remove </span>
                              <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                              </svg>
                            </button>
                            <div id="tooltipRemoveItem1a" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                              Remove item
                              <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                          </div>
                        </div>
                        <div class="grid grid-cols-2">
                          <div>
                          <div class="flex items-center gap-2">
                                  <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                                    <img class="h-auto w-full max-h-full dark:hidden" src="https://mms-images-prod.imgix.net/mms/images/catalog/6a62c76ef0978853a20391b6c32da4fe/colors/176100/views/alt/front_medium_extended.png?dpr=1.2&auto=format&nrs=0&w=320" alt="imac image" />
                                    <img class="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                                  </a>
                                  <a href="#" class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">Jacket</a>
                                </div>
                            <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">89.99</p>
                          </div>
                    
                          <div class="flex items-center justify-end gap-6">
                            <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
                    
                            <button data-tooltip-target="tooltipRemoveItem1a" type="button" class="text-[#551121] hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                              <span class="sr-only"> Remove </span>
                              <svg class="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                              </svg>
                            </button>
                            <div id="tooltipRemoveItem1a" role="tooltip" class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                              Remove item
                              <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                          </div>
                        </div>
                    
                    
                        
                    
                        <a href="#" title="" class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-[#011d28] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#011d28e6] focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> Proceed to Checkout </a>
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
                    <div class="relative flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                      </svg>
                  
                      <input
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#011d28] rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-[#011d28e6] hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="Rechercher ..." 
                      />
                      
                      
                    </div>
                </div>
              <ul className="flex flex-col  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {["Home", "Nouveautés", "Promotion", "Gift card", "Contact"].map((item, index) => (
                  <li key={index} className="mt-2 lg:mt-0">
                    <Link
                      href="#"
                      title=""
                      className="text-sm font-medium text-gray-900 hover:text-[#011d28c4] dark:text-white dark:hover:text-primary-500"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                
              </ul>
              
              
            </div>

        </div>
    </nav>
</header>
  );
};

export default Header;
