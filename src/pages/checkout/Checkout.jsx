import React, { useContext, useState } from 'react'
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';

const Checkout = () => {
      const { panier } = useContext(MyContext);
      console.log("panier ",panier)
      console.log("panier.length ",panier.length)
    const [showModal, setShowModal] = useState(false);
    const [gouvernoratModal, setGouvernoratModal] = useState(false);
    const [selectedGouvernorat, setSelectedGouvernorat] = useState("");
    // Liste des gouvernorats
  const gouvernorats = [
    'Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Bizerte', 'Beja', 'Jendouba',
    'Kef', 'Siliana', 'Nabeul', 'Zaghouan', 'Sousse', 'Monastir', 'Mahdia',
    'Sfax', 'Kairouan', 'Kasserine', 'Sidi Bouzid', 'Gabes', 'Mednine', 'Tataouine',
    'Gafsa', 'Tozeur', 'Kebili'
  ];
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
  <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
  <span className="font-medium">Heureux de vous accueillir parmi nous ! </span>  Un cadeau 🎁 vous attend avec votre achat.
</div>
    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
        {panier.length==0 ?(
                          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                           <p href="#" title="" className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg text-[#011d28] px-5 py-2.5 text-sm font-medium  dark:text-white" > 
                              Votre panier est vide.
                                </p>
                        </div>
                              ):
                              (
                              panier.map((item, index) => (
                                <div
                                className="rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 md:p-6"
                              >
                               <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="shrink-0 md:order-1">
                                            <img className="h-20 w-20 dark:hidden" 
                                            src={item.image} // Affiche la première image du produit
                                            alt={item.Product}
                                            />
                                        </a>
                        
                                        <label for="counter-input" className="sr-only">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                </svg>
                                                </button>
                                                <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={item.quantity} required />
                                                <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                                </button>
                                            </div>
                                            <div className="text-end md:order-4 md:w-32">
                                                <p className="text-base font-bold text-gray-900 dark:text-white">{(item.Price * item.quantity).toFixed(2)}

                                                <span className="ml-1 text-xs">Dt</span>
                                                </p>
                                            </div>
                                        </div>
                        
                                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                            <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                                            {item.Product}
                                                </a>
                                    {/* Taille et couleur */}
                                    <div className="mt-1">
                                                    <p className=" font-normal leading-none text-gray-500 dark:text-gray-400">
                                            Taille : {item.size}
                                          </p>
                                          <p className="font-normal leading-none text-gray-500 dark:text-gray-400">
                                            Couleur : {item.color}
                                          </p>
                                        </div>
                                        <p className="mt-0.5 truncate text-xs	 font-normal text-gray-500 dark:text-gray-400">
                                      
                                    </p>
                                            <div className="flex items-center gap-4">
                                                <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                                </svg>
                                                Ajouter aux favoris
                                                </button>
                            
                                                <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                </svg>
                                                Supprimer
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              )
                            ))
        }
          
          
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <p className="text-xl font-semibold text-gray-900 dark:text-white">Résumé de la commande</p>
      <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span className="font-medium">Livraison gratuite </span> à partir de 100DT
</div>
      {panier.length==0 ?(
        <div>
            <p href="#" title="" className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg text-[#011d28] px-5 py-2.5 text-sm font-medium  dark:text-white" > 
                              Votre panier est vide.
                                </p>
        </div>
      ):
      (
        <>
        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Prix initial</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">{(panier.reduce((sum, item) => sum + item.OldPrice * item.quantity, 0)).toFixed(2)}
              <span className="ml-1 text-xs">Dt</span>

              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Solde</dt>
              <dd className="text-base font-medium text-green-600">-{(panier.reduce((sum, item) => sum + (item.OldPrice-item.Price) * item.quantity, 0)).toFixed(2)}

              <span className="ml-1 text-xs">Dt</span>
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Livraison</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
              {(panier.reduce((sum, item) => sum + item.Price * item.quantity, 0)).toFixed(2)>100? 0: 8}
               
                
                <span className="ml-1 text-xs">Dt</span></dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Taxes</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">0
              <span className="ml-1 text-xs">Dt</span>

              </dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
            <dd className="text-base font-bold text-gray-900 dark:text-white">
            {(panier.reduce((sum, item) => sum + item.Price * item.quantity, 0)).toFixed(2)>100? 
            (panier.reduce((sum, item) => sum + item.Price * item.quantity, 0)).toFixed(2)
            : (panier.reduce((sum, item) => sum + item.Price * item.quantity, 0)+8).toFixed(2)}
                
                

<span className="ml-1 text-xs">Dt</span></dd>
          </dl>
        </div>
        <div className="relative">
            <button onClick={() => setShowModal(true)} className="flex w-full items-center justify-center rounded-lg bg-[#011d28] hover:bg-[#011d28e6] px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-[#011d28e6] ">
            Passer la commande</button>
            {showModal &&(
            
            <div id="crud-modal"  tabindex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center">
                <div onClick={() => setShowModal(false)}  className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50">
                   
                    <div onClick={(e) => e.stopPropagation()}  className="relative w-[500px]  bg-white rounded-lg shadow dark:bg-gray-700">
                       
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Votre cadeau vous attend !
                            </h3>
                            <button onClick={() => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        
                        <form className="p-4 md:p-5 ">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom et Prénom</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nom et Prénom" required=""/>
                                </div>
                                
                                <div className="col-span-2 sm:col-span-1">
                                    <div className="relative">
                                    <label for="Gouvernorat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gouvernorat</label>

                                    <label
                                            onClick={() => setGouvernoratModal(!gouvernoratModal)}
                                            htmlFor="gouvernorat"
                                            className="border focus:ring-2 focus:outline-none focus:ring-[#011d28e6] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                        >
                                           {selectedGouvernorat || "Sélectionner"} 
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
                                        </label>

                                       

                                        {/* Dropdown menu */}
                                        {gouvernoratModal && (
                                            <div
                                            id="dropdown"
                                            className="p-2 border overflow-y-auto absolute z-10 bg-white divide-y divide-gray-100 rounded-b-lg shadow-lg w-60 dark:bg-gray-700"
                                            style={{ maxHeight: '200px' }}
                                            >
                                            <ul className="text-sm text-gray-700 dark:text-gray-200">
                                                {gouvernorats.map((city) => (
                                                <li
                                                    key={city}
                                                    className="px-4 py-2 hover:bg-[#011d28e6] hover:text-white rounded-md cursor-pointer transition-colors duration-300"
                                                    onClick={() => {
                                                    setSelectedGouvernorat(city);
                                                    setGouvernoratModal(false); // Ferme le dropdown après sélection
                                                    }}
                                                >
                                                    {city}
                                                </li>
                                                ))}
                                            </ul>
                                            </div>
                                        )}

                  
                                    </div>
                                    </div>
                                <div className=" col-span-2 sm:col-span-1">
                                <div className="relative">
                                            <label for="Délégation" className=" border focus:ring-2 focus:outline-none focus:ring-[#011d28e6] font-medium rounded-lg	 text-sm px-5 py-2.5 text-center inline-flex items-center ">Délégation
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
                                            </label>

                                        {/* Dropdown menu */}
                                        
                                        <div
                                        id="dropdown"
                                        className="hidden absolute mt-2.5 z-10 border-t-white border-2 border-[#011d28] bg-white divide-y divide-gray-100 rounded-b-lg shadow w-60 dark:bg-gray-700"
                                         >
                                        
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
                                                
                                                </ul>
                                        
                                        </div>
                  

                  
                                    </div>
                                    {/* <label for="gouvernorat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gouvernorat</label>
                                    <select id="gouvernorat"  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    
                                    <option selected="">Sélectionner un gouvernorat</option>
                                    <option value="Tunis">Tunis</option>
                                    <option value="Ariana">Ariana</option>
                                    <option value="Ben Arous">Ben Arous</option>
                                    <option value="Manouba">Manouba</option>
                                    <option value="Bizerte">Bizerte</option>
                                    <option value="Beja">Béja</option>
                                    <option value="Jendouba">Jendouba</option>
                                    <option value="Kef">Le Kef</option>
                                    <option value="Siliana">Siliana</option>
                                    <option value="Nabeul">Nabeul</option>
                                    <option value="Zaghouan">Zaghouan</option>
                                    <option value="Sousse">Sousse</option>
                                    <option value="Monastir">Monastir</option>
                                    <option value="Mahdia">Mahdia</option>
                                    <option value="Sfax">Sfax</option>
                                    <option value="Kairouan">Kairouan</option>
                                    <option value="Kasserine">Kasserine</option>
                                    <option value="Sidi Bouzid">Sidi Bouzid</option>
                                    <option value="Gabes">Gabès</option>
                                    <option value="Mednine">Médenine</option>
                                    <option value="Tataouine">Tataouine</option>
                                    <option value="Gafsa">Gafsa</option>
                                    <option value="Tozeur">Tozeur</option>
                                    <option value="Kebili">Kébili</option>
                                    </select> */}
                                </div>
                                <div className="col-span-2">
                                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                    <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Add new product
                            </button>
                        </form>
                    </div>
                
                </div>
            </div>
        )}
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> ou </span>
          <Link to="/" title="" className="inline-flex items-center gap-2 text-sm font-medium text-[#011d28] hover:underline  ">
          Continuer vos achats
            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </Link>
        </div>
        </>
     )
    }
       </div>  
       {panier.length>0 &&(
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <form className="space-y-4">
            <div>
              <label for="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Avez-vous un code promo ou une carte cadeau ? </label>
              <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#011d28e6] focus:ring-[#011d28e6] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 " placeholder="" required />
            </div>
            <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#011d28] hover:bg-[#011d28e6] px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-[#011d28e6] ">Apply Code</button>
          </form>
        </div>
        )}
      </div>
    </div>
  </div>
</section>
  )
}

export default Checkout