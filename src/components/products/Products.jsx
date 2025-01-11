import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Products = ({mockCategories,products}) => {
  const [trier, setTrier] = useState(false);
  const [filters, setFilters] = useState(false);
  const [category, setCategory] = useState(false);
  const [price, setPrice] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [rating, setRating] = useState(false);
  const [sousCategory, setSousCategory] = useState(false);
  // Appliquer handleDeleteFilters lors du premier montage ou rafraîchissement de la page
useEffect(() => {
  handleDeleteFilters(); // Réinitialiser les filtres au chargement de la page
}, []); // Le tableau vide [] signifie que l'effet ne se déclenche qu'une fois, au premier montage
  const handleAddToCart = (product) => {
    // console.log("product ",product)
    const cartItem = {
      id: product.UID,
      name: product.Product,
      price: product.Price,
      image: selectedImage, // Ajout de l'image sélectionnée
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    };
    // console.log("cartItem ",cartItem)

    addToCart(cartItem); // Appel de la méthode addToCart avec l'élément du panier
  };
  const toggleTrier = () => {
    setTrier(!trier);
  };    
  const toggleFilters = () => {
    setFilters(!filters);
  }; 
  const toggleCategory = () => {
    setCategory(!category);
  };
  const togglePrice = () => {
    setPrice(!price);
  };
  const toggleShipping = () => {
    setShipping(!shipping);
  };
  const toggleRating = () => {
    setRating(!rating);
  };
  const toggleSousCategory=()=>{
    setSousCategory(!sousCategory)
  }
  const [selectedOption, setSelectedOption] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Utilisez useEffect pour mettre à jour l'état en fonction des paramètres de l'URL
  


  const [categoryVal, setCategoryVal] = useState([]); // Catégories sélectionnées
  const [subcategory, setSubcategory] = useState([]); // Sous-catégories à afficher
  const [selectSubcategory, setSelectSubcategory] = useState([]); // Sous-catégories sélectionnées
  
// Récupère le nom de la catégorie depuis l'état passé dans le lien
const { categoryName } = location.state || {};  
const { subCategoryName } = location.state || {};  

// État pour les catégories sélectionnées
const [selectedCategories, setSelectedCategories] = useState([]);

// Effectue l'ajout de categoryName à selectedCategories si categoryName n'est pas vide
useEffect(() => {
  if (categoryName && !selectedCategories.includes(categoryName)) {
    setSelectedCategories((prevCategories) => [...prevCategories, categoryName]);
  }
  console.log("selectedCategories",selectedCategories)
  console.log("categoryName",categoryName)

}, [categoryName]);
// Effectue l'ajout de categoryName à selectedCategories si categoryName n'est pas vide
useEffect(() => {
  if (subCategoryName && !selectedCategories.includes(subCategoryName)) {
    setSelectSubcategory((prevSubCategories) => [...prevSubCategories, subCategoryName]);
  }
  console.log("selectedSubCategories",selectSubcategory)
  console.log("subCategoryName",subCategoryName)

}, [subCategoryName]);
const handleCategorySelect = (categoryName) => {
  setSelectedCategories((prevSelectedCategories) => {
    if (prevSelectedCategories.includes(categoryName)) {
      // Si la catégorie est déjà sélectionnée, la retirer
      return prevSelectedCategories.filter((category) => category !== categoryName);
    } else {
      // Sinon, l'ajouter à la liste
      return [...prevSelectedCategories, categoryName];
    }
  });
};

useEffect(() => {
    // Lorsque les catégories sont mises à jour, afficher les sous-catégories associées
    const allSubcategories = selectedCategories
      .map((category) => mockCategories.find((cat) => cat.Name === category)?.subCategorie)
      .flat();
  
    // Utilisation de Set pour garantir l'unicité des sous-catégories
    const uniqueSubcategories = [...new Set(allSubcategories)];
  
    setSubcategory(uniqueSubcategories);
  }, [selectedCategories]);

  const handleSubcategoryChange = (event) => {
    const value = event.target.value; // Valeur de la sous-catégorie
    const isChecked = event.target.checked; // État de la case à cocher
    
    setSelectSubcategory((prev) => {
      if (isChecked) {
        // Ajouter la sous-catégorie sélectionnée
        return [...prev, value];
      } else {
        // Supprimer la sous-catégorie désélectionnée
        return prev.filter((subCat) => subCat !== value);
      }
    });
  }
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleRatingSelect = (rating) => {
    setSelectedRatings((prevRatings) => {
      // Vérifier si la note est déjà sélectionnée
      if (prevRatings.includes(rating)) {
        // Si déjà sélectionnée, la retirer du tableau
        return prevRatings.filter((r) => r !== rating);
      } else {
        // Sinon, l'ajouter au tableau
        return [...prevRatings, rating];
      }
    });
    console.log("selectedRatings",selectedRatings)
  };
  const [minPrice, setMinPrice] = useState(''); // MinPrice sélectionnée
  const [maxPrice, setMaxPrice] = useState(''); // MinPrice sélectionnée

 
  const [filteredProducts, setFilteredProducts] = useState([]); // Initialisation avec une liste vide
  useEffect(() => {
    console.log('Products before filtering:', products);
    console.log('Filters:', { selectedCategories, selectSubcategory, minPrice, maxPrice });
  
    if (!products || products.length === 0) {
      console.log('Products list is empty or undefined');
      setFilteredProducts([]);
      return;
    }
   
    const filtered = products.filter(product => {
      // Vérifie si le produit correspond aux catégories sélectionnées
      const matchesCategory = selectedCategories.length > 0
        ? selectedCategories.includes(product.Category)
        : true;  // Si aucune catégorie n'est sélectionnée, tout est accepté
  
      // Vérifie si le produit correspond aux sous-catégories sélectionnées
      const matchesSubcategory = selectSubcategory.length > 0
        ? selectSubcategory.includes(product.SubCategory)
        : true;  // Si aucune sous-catégorie n'est sélectionnée, tout est accepté
  
      // Vérifie si le produit correspond à la plage de prix
      // Vérifie si le produit correspond au minPrice
    const matchesMinPrice = minPrice !== ''
    ? product.Price >= minPrice
    : true;

  // Vérifie si le produit correspond au maxPrice
  const matchesMaxPrice = maxPrice !== ''
    ? product.Price <= maxPrice
    : true;
    // Filtre les produits en fonction de la note
    const matchesRating = selectedRatings.length > 0
    ? selectedRatings.includes(Math.floor(product.Rating)) // Compare la partie entière du rating
    : true;

    return matchesCategory && matchesSubcategory && matchesMinPrice && matchesMaxPrice && matchesRating;
    });
  
  
    console.log('Filtered products:', filtered);
    setFilteredProducts(filtered);
  }, [selectedCategories, selectSubcategory, minPrice, maxPrice, products,selectedRatings]);
  
const handleDeleteFilters=()=>{
  setSelectSubcategory([])
  setSelectedCategories([])
  setMinPrice('')
  setMaxPrice('')
  setSelectedRatings([])
  setFilteredProducts([])
}


useEffect(() => {
  const queryParams = new URLSearchParams(location.search);
  const trieValue = queryParams.get('trie');
  if (trieValue) {
    setSelectedOption(trieValue);
  }
}, [location.search]); // Re-exécuter lorsque l'URL change

const handleSelection = (option) => {
  setSelectedOption(option);
  // Rediriger l'utilisateur avec le paramètre "trie" mis à jour
  navigate(`/products/?trie=${option}`);
};
const [sortedProducts, setSortedProducts] = useState(filteredProducts);

useEffect(() => {
  // Fonction de tri en fonction de l'option sélectionnée
  const sortProducts = (option) => {
    let sorted = [...filteredProducts]; // Crée une copie des produits pour ne pas les modifier directement

    switch (option) {
      case 'bestSellers':
        sorted = sorted.sort((a, b) => b.Sales - a.Sales); // Trier par ventes
        break;
      case 'topRated':
        sorted = sorted.sort((a, b) => b.Rating - a.Rating); // Trier par note (Rating)
        break;
      case 'newest':
        sorted = sorted.sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt)); // Trier par date de création
        break;
      default:
        break;
    }

    setSortedProducts(sorted); // Met à jour les produits triés
    setFilteredProducts(sorted); // Met à jour filteredProducts avec les produits triés
    console.log("sorted inside effect:", sorted); // Affiche directement la valeur triée ici
  };

  // Appelle la fonction de tri à chaque changement d'option
  if (selectedOption) {
    sortProducts(selectedOption);
  }
}, [selectedOption]); // Re-exécuter lorsque selectedOption ou filteredProducts changent


  return (
    <section className="bg-white  antialiased dark:bg-gray-900 ">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    {/* <!-- Heading & Filters --> */}
    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
      <div>
      </div>
      <div className="flex items-center space-x-4">
        {/* <button data-modal-toggle="filterModal" data-modal-target="filterModal" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto">
          <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
          </svg>
          Filtres
          <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
          </svg>
        </button> */}
         {/* <!-- Filter modal --> */}
         <div className="w-full md:w-auto flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-stretch sm:items-center justify-end sm:space-x-3 flex-shrink-0">
                    <div className="relative">
                    <button onClick={toggleFilters} id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#011d28e6] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-1.5 -ml-1 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                        </svg>
                        Filtres
                        <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </button>
                    {filters && (<div id="filterDropdown" className="right-0  divide-y divide-gray-100  overflow-y-auto  dark:divide-gray-600   absolute  z-10 w-[250px] mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800">
                        <div className="flex items-center justify-between pt-2">
                            <h6 className="text-sm font-medium text-black dark:text-white">Filtres</h6>
                            <div className="flex items-center space-x-3">
                                <p onClick={(e) => handleDeleteFilters(e)} className="cursor-pointer flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">Effacer tout</p>
                            </div>
                        </div>
                        {/* <div className="pt-3 pb-2">
                            <label for="input-group-search" className="sr-only">Rechercher</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="input-group-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Recherche..."/>
                            </div>
                        </div> */}
                        <div id="accordion-flush" data-accordion="collapse" data-active-classes="text-black dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                            
                            
                        {/* Catégories */}
                        <div>
                                {/* <!-- Category --> */}
                            <h2 id="category-heading">
                                <button type="button" onClick={toggleCategory} className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700" data-accordion-target="#category-body" aria-expanded="true" aria-controls="category-body">
                                    <span>Catégorie</span>
                                    {!category && (
                                    <svg aria-hidden="true" data-accordion-icon="" className="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>)}
                                    {category && (
                                       
                                      <svg aria-hidden="true" data-accordion-icon="" className="w-5 h-5  shrink-0" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                    )}
                                </button>
                            </h2>
                            {category && (
                            <div id="category-body" className="" aria-labelledby="category-heading">
                                <div className="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                                    <ul className="space-y-2">
                                    {mockCategories.map((cat) => (
                                              <li key={cat.id} className="flex items-center">
                                                <input
                                                  id={`cat-${cat.id}`}
                                                  type="checkbox"
                                                  checked={selectedCategories.includes(cat.Name)}

                                                  // checked={categoryVal === cat.Name} // Vérifie si c'est la catégorie sélectionnée
                                                  onChange={() => handleCategorySelect(cat.Name)}
                                                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-[#011d28] focus:ring-[#011d28]"
                                                />
                                                <label
                                                  htmlFor={`cat-${cat.id}`}
                                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2"
                                                >
                                                  {cat.Name}
                                                </label>
                                              </li>
                                            ))}
                                    </ul>
                                </div>
                                  </div>)}
                                
                              </div>
                            {/* Sous-catégories */}
                              <div className="mt-4">
                                
                                <h2 id="category-heading">
                                <button type="button" onClick={toggleSousCategory} className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700" data-accordion-target="#category-body" aria-expanded="true" aria-controls="category-body">
                                    <span>Sous Catégories</span>
                                    {!sousCategory && (
                                    <svg aria-hidden="true" data-accordion-icon="" className="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>)}
                                    {sousCategory && (
                                       
                                      <svg aria-hidden="true" data-accordion-icon="" className="w-5 h-5  shrink-0" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                    )}
                                </button>
                            </h2>
                            {sousCategory && (
                                subcategory.length > 0 ? (
                                  <div className="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                                    <ul className="space-y-2">
                                      {subcategory.map((subCat, index) => (
                                        <li key={index} className="flex items-center">
                                          <input
                                            id={`subcategory-${index}`}
                                            type="checkbox"
                                            value={subCat} // Valeur de la sous-catégorie
                                            onChange={handleSubcategoryChange} // Gestionnaire d'événement
                                            checked={selectSubcategory.includes(subCat)} 
                                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-[#011d28] focus:ring-[#011d28]"
                                          />
                                          <label
                                            htmlFor={`subcategory-${index}`}
                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                          >
                                            {subCat}
                                          </label>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : (
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Aucune sous-catégorie disponible
                                  </p>
                                )
                              )}
                              
                              </div>
                            {/* <!-- Price --> */}
                            <h2 id="price-heading">
                                <button onClick={togglePrice}  type="button" className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700" data-accordion-target="#price-body" aria-expanded="true" aria-controls="price-body">
                                    <span>Prix</span>
                                    {!price && (
                                    <svg aria-hidden="true" data-accordion-icon="" className="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>)}
                                    {price && (
                                       
                                      <svg aria-hidden="true" data-accordion-icon="" className="w-5 h-5  shrink-0" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                    )}
                                    
                                </button>
                            </h2>
                            {price && (
                            <div id="price-body" className="" aria-labelledby="price-heading">
                                <div className="flex items-center py-2 space-x-3 font-light border-b border-gray-200 dark:border-gray-600">
                                
                                    <label for="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">De</label>
                                    <input type="number" value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} id="number-input"  aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                                
                                
                                    <label for="number-input" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">À</label>
                                    <input type="number" id="number-input" value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
                                
                                    </div>
                            </div>)}
                            {/* <!-- Worldwide Shipping --> */}
                            {/* <h2 id="worldwide-shipping-heading">
                                <button onClick={toggleShipping} type="button" className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700" data-accordion-target="#worldwide-shipping-body" aria-expanded="true" aria-controls="worldwide-shipping-body">
                                    <span>Worldwide Shipping</span>
                                    {!shipping && (
                                    <svg aria-hidden="true" data-accordion-icon="" className="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>)}
                                    {shipping && (
                                       
                                      <svg aria-hidden="true" data-accordion-icon="" className="w-5 h-5  shrink-0" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                    )}
                                </button>
                            </h2>
                            {shipping && (
                            <div id="worldwide-shipping-body" className="" aria-labelledby="worldwide-shipping-heading">
                                <div className="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
                                    <label className="relative flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" name="shipping" checked=""/>
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">North America</span>
                                    </label>
                                    <label className="relative flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" name="shipping"/>
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">South America</span>
                                    </label>
                                    <label className="relative flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" name="shipping"/>
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Asia</span>
                                    </label>
                                    <label className="relative flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" name="shipping" checked=""/>
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Australia</span>
                                    </label>
                                    <label className="relative flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" name="shipping"/>
                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Europe</span>
                                    </label>
                                </div>
                            </div>
                            )} */}
                            {/* <!-- Rating --> */}
                            <h2 id="rating-heading">
                                <button onClick={toggleRating} type="button" className="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700" data-accordion-target="#rating-body" aria-expanded="true" aria-controls="rating-body">
                                    <span>Évaluation</span>
                                    {!rating && (
                                    <svg aria-hidden="true" data-accordion-icon="" className="w-5 h-5 rotate-180 shrink-0" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>)}
                                    {rating && (
                                       
                                      <svg aria-hidden="true" data-accordion-icon="" className="w-5 h-5  shrink-0" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>)}
                                </button>
                            </h2>
                            {rating && (
                            <div id="rating-body" className=""  aria-labelledby="rating-heading">
                                <div className="py-2 space-y-2 font-light border-b border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center">
                                        <input id="five-stars" type="checkbox" checked={selectedRatings.includes(5)} value="5" onClick={() => handleRatingSelect(5)}name="rating" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-[#011d28] focus:ring-[#011d28] "/>
                                        <label for="five-stars" className="flex items-center ml-2">
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Second star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Third star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fourth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fifth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="four-stars" type="checkbox" value="4" checked={selectedRatings.includes(4)}  onClick={() => handleRatingSelect(4)} name="rating" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-[#011d28] focus:ring-[#011d28] "/>
                                        <label for="four-stars" className="flex items-center ml-2">
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Second star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Third star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fourth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fifth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="three-stars" type="checkbox" checked={selectedRatings.includes(3)}  value="3" onClick={() => handleRatingSelect(3)} name="rating" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-[#011d28] focus:ring-[#011d28] "/>
                                        <label for="three-stars" className="flex items-center ml-2">
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Second star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Third star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fourth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fifth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="two-stars" type="checkbox" value="2" checked={selectedRatings.includes(2)}  onClick={() => handleRatingSelect(2)} name="rating" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-[#011d28] focus:ring-[#011d28] "/>
                                        <label for="two-stars" className="flex items-center ml-2">
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Second star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Third star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fourth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fifth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="one-star" type="checkbox" checked={selectedRatings.includes(1)}  value="1"  onClick={() => handleRatingSelect(1)} name="rating" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-[#011d28] focus:ring-[#011d28] "/>
                                        <label for="one-star" className="flex items-center ml-2">
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>First star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Second star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Third star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fourth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <title>Fifth star</title>
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>)}
                    </div>
                    <div className="relative">
                    <button id="sortDropdownButton1" data-dropdown-toggle="dropdownSort1" type="button" 
                    className="flex w-full items-center justify-center rounded-lg 
                    border border-gray-200 bg-white px-3 py-2 text-sm 
                    font-medium text-gray-900 hover:bg-gray-100
                    hover:text-[#011d28e6] focus:z-10 focus:outline-none 
                    focus:ring-4 focus:ring-gray-100 dark:border-gray-600
                    dark:bg-gray-800 dark:text-gray-400
                    dark:hover:bg-gray-700 dark:hover:text-white 
                    dark:focus:ring-gray-700 sm:w-auto"
                    onClick={toggleTrier}
                    >
                    <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
                    </svg>
                    Trier
                    <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                    </svg>
                    </button>
                    {/* DropDown Menu Trier */}
                    {trier &&
                        <div id="dropdownSort1" className="right-0  divide-y divide-gray-100  overflow-y-auto  dark:divide-gray-600   absolute  z-10 w-[250px] mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800" data-popper-placement="bottom">
                        <div className="flex items-center justify-between pt-2">
                            <h6 className="text-sm font-medium text-black dark:text-white">Trier</h6>
                            {/* <div className="flex items-center space-x-3">
                                <p onClick={(e)=>handleDeleteTrier} className="cursor-pointer flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">Effacer tout</p>
                            </div> */}
                        </div>
                        <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="sortDropdownButton">
                        <li className={` cursor-pointer group inline-flex w-full items-center rounded-md px-3 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
              selectedOption === 'bestSellers' ? 'font-bold text-gray-800 bg-gray-200' : 'text-gray-500'
            }`}
            onClick={() => handleSelection('bestSellers')}>
          
            Meilleures ventes
          
        </li>
        <li className={`cursor-pointer group inline-flex w-full items-center rounded-md px-3 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
              selectedOption === 'topRated' ? 'font-bold text-gray-800 bg-gray-200' : 'text-gray-500'
            }`}
            onClick={() => handleSelection('topRated')}>
          
            Mieux notés
          
        </li>
        <li className={`cursor-pointer group inline-flex w-full items-center rounded-md px-3 py-2 text-sm  hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
              selectedOption === 'newest' ? 'font-bold text-gray-800 bg-gray-200' : 'text-gray-500'
            }`}
            onClick={() => handleSelection('newest')}>
          
            Dernières nouveautés
         
        </li>

        
                            
                        </ul>
                        </div>

                    }   
                </div>
            </div>
               
      </div>
    </div>
    <div className="">
      {filteredProducts.length>0? (
        filteredProducts.map((product) => (
          <div
            key={product.UID}
            className="h-[500px] w-33 px-3 gap-x-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            
            <div className="h-56 ">
            <Link to={`/product/${product.UID}`} state={{ product }}>
                <img
                  className="mx-auto h-full object-contain"
                  src={product.Image[0]} // Affiche la première image
                  alt={`Image of ${product.Product}`}
                />
              </Link>
            </div>
            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                {product.OldPrice > product.Price && (
                  <span className="rounded bg-[#551121] px-2.5 py-0.5 text-xs font-medium text-white dark:bg-primary-900 dark:text-primary-300">
                    {Math.round(((product.OldPrice - product.Price) * 100) / product.OldPrice)}% de réduction
                  </span>
                )}
                <div className="flex items-center justify-end gap-1">
              <Link to={`/product/${product.UID}`} state={{ product }}>

              <button type="button" data-tooltip-target="tooltip-quick-look-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Quick look </span>
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                  <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </button>

                <div id="tooltip-quick-look-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                  Quick look
                  <div className="tooltip-arrow" data-popper-arrow=""></div>
                </div>
                </Link>
              {/* <button type="button" data-tooltip-target="tooltip-add-to-favorites-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only"> Add to Favorites </span>
                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                </svg>
              </button> */}
              <div id="tooltip-add-to-favorites-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
              </div>
              </div>

              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                {product.Product}
              </a>

              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(Math.round(product.Rating))].map((_, index) => (
                    <svg
                      key={index}
                      className="h-4 w-4 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {product.Rating} / 5
                </span>
              </div>

              {/* <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {product.OldPrice > product.Price
  ? `${product.Description.slice(0, 60)}...`
  : `${product.Description.slice(0, 100)}...`}
              </p> */}
              <ul className="mt-2 flex items-center gap-4">
              {product.Order>10 && (<li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Meilleure Vente</p>
            </li>)}
            
            {(Math.round(((product.OldPrice - product.Price) * 100) / product.OldPrice)>20)&& (<li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Meilleur Prix</p>
            </li>)}
            
          </ul>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  {/* {product.OldPrice > product.Price && (
                    <div className="text-sm text-gray-500 line-through dark:text-gray-400">
                      {product.OldPrice.toFixed(2)}
                      <span className="ml-1 text-xs">Dt</span>
                    </div>
                  )} */}
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {product.Price.toFixed(2)}
                    <span className="ml-1 text-xs">Dt</span>
                  </div>
                </div>

              <Link to={`/product/${product.UID}`} state={{ product }}>
                  
                  <button
                  
                    type="button"
                    className="rounded-lg bg-[#011d28] px-4 py-2 text-white hover:bg-[#011d28e6]"
                  >
                    Consulter
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))):
        (
          <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h1 className="text-2xl font-semibold text-[#011d28] dark:text-gray-200 mb-4">
            Cette catégorie est encore vide, mais votre curiosité est une belle qualité !
          </h1>
          <p className="text-[#011d28e6] dark:text-gray-400 text-center">
            Revenez prochainement pour découvrir nos nouveautés. Nous travaillons dur pour vous offrir de superbes produits !
          </p>
        </div>
        )}
      
      
    </div>
    
    
  </div>

 
</section>
  )
}

export default Products