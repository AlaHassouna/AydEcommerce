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
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
      {["Home", "Nouveautés", "Promotion", "Gift card", "Contact"].map((item, index) => (
                  <li key={index} className="mt-2 lg:mt-0">
                    <Link to="#" class="mr-4 hover:underline md:mr-6 ">
                      {item}
                    </Link>
                  </li>
        ))}
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025-2026 <a href="#" class="hover:underline">AYD</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}

export default Footer