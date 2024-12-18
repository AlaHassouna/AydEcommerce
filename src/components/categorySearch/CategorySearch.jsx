import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function CategorySearch({mockCategories}) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    // Simulation d'une récupération des données
    setCategoryList(mockCategories);
  }, []);

  return (
    <div className='my-8 items-center px-5 flex flex-col gap-4'>
      <h2 className='max-w-2xl  text-2xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
        Trouver des <span className='text-[#011d28] dark:text-white'>Catégories</span>
      </h2>
      <h2 className='max-w-2xl  font-light  sm:text-lg md:text-base lg:text-xl text-gray-500 dark:text-gray-400'>
        Parcourez les catégories et trouvez ce qui vous convient
      </h2>

      {/* Barre de recherche */}
     
            {/* <div class="relative flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                </svg>
            
                <input
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-[#011d28] rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Rechercher ..." 
                />
                      
                      
            </div> */}
      

      {/* Affichage des catégories */}
      <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6 gap-4 '>
        {categoryList.length > 0
          ? categoryList.map((item) => (
              <Link
                to={`/search/${item.Name}`}
                key={item.id}
                className='flex flex-col text-center gap-2 items-center p-5 bg-[#011d28] hover:bg-[#011d28e6]  rounded-lg hover:scale-110 transition-all ease-in-out'
              >
                <img
                  src={item.Icon}
                  alt={`${item.Name} Icon`}
                  className='w-10 h-10 filter invert hue-rotate-180'
                />
                <label className='text-white text-sm'>{item.Name}</label>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className='h-[100px] w-[100px] m-2 bg-slate-200 animate-pulse rounded-lg'
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CategorySearch;
