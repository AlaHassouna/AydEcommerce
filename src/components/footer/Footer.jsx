import React from 'react'
import logo from '../../assets/images/logo1.png';
import logoWhite from '../../assets/images/logowhite.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <img src={logo} alt="" className='w-12'/>
            
      </a>
      <p class="my-6 text-gray-500 dark:text-gray-400">Attire Your Desire with the finest fashion, designed to inspire confidence, elevate your style, and bring your dreams to life.</p>
      
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <li className="mt-2 lg:mt-0">
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
            to="/products/?trie=newest"
           
            className="mr-4 hover:underline md:mr-6 "
          >
            Nouveautés
          </Link>
        </li>
        <li className="mt-2 lg:mt-0">
          <Link
            to="/products/?trie=topRated"
            
            className="mr-4 hover:underline md:mr-6 "
          >
            Meilleures évaluations
          </Link>
        </li>
        <li className="mt-2 lg:mt-0">
          <Link
            to="/products/?trie=bestSellers"
            
            className="mr-4 hover:underline md:mr-6 "
          >
            Bestsellers
          </Link>
        </li>
        
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025-2026 <a href="#" class="hover:underline">AYD</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}

export default Footer