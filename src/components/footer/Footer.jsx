import React from 'react'
import logo from '../../assets/images/logo1.png';
import logoWhite from '../../assets/images/logowhite.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
   



<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <Link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            {/* <img src={logo}  class="h-8" alt="Flowbite Logo" /> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Yostyle</span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                <Link
            to="/"
            title="Home"
            className="mr-4 hover:underline md:mr-6 "
          >
            Home
          </Link>
        </li>
        <li className="mt-2 lg:mt-0">
          <Link
            to="/products"
            title="Produits"
            className="mr-4 hover:underline md:mr-6 "
          >
            Produits
          </Link>
        </li>
        <li className="mt-2 lg:mt-0">
          <Link
            to="/products?gender=femme"
           
            className="mr-4 hover:underline md:mr-6 "
          >
            FEMME
          </Link>
        </li>
        <li className="mt-2 lg:mt-0">
          <Link
            to="/products?gender=homme"
            
            className="mr-4 hover:underline md:mr-6 "
          >
            HOMME
          </Link>
        </li>
       
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Yostyle. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer