import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Checkout = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

    const { panier, setPanier } = useContext(MyContext);
    console.log("panier ",panier)
    console.log("panier.length ",panier.length)
    const [showModal, setShowModal] = useState(false);
    const [gouvernoratModal, setGouvernoratModal] = useState(false);

    const { account,setAccount } = useContext(MyContext);
    useEffect(() => {
      if (Object.keys(account).length === 0 && account.constructor === Object) {
        console.log("account est vide");
      } else {
        console.log("account", account);
      }
    }, [account]);
    const [selectedGouvernorat, setSelectedGouvernorat] = useState(account ? account.Gouvernorat : "");
    
    // const [showNotification, setShowNotification] = useState(false);

      const [showModalDelete, setShowModalDelete] = useState(false);
        const [itemIndex, setItemIndex] = useState(null);
      
      const handleOpenModal = (event, index) => {
        event.stopPropagation();
        setItemIndex(index); // Stocke l'index de l'article
        setShowModalDelete(true);  // Affiche le modal
      };
    
      const handleAccept = () => {
        setPanier((prev) => {
          const updatedPanier = prev.filter((_, idx) => idx !== itemIndex);
          setPanier(updatedPanier);
          localStorage.setItem("panier", JSON.stringify(updatedPanier)); // Met à jour le localStorage
          return updatedPanier;
        });
        setShowModalDelete(false); // Ferme le modal
        setItemIndex(null);  // Réinitialise l'index
      };
    
      const handleDecline = () => {
        setShowModalDelete(false); // Ferme le modal sans suppression
      };
    // Liste des gouvernorats
  const gouvernorats = [
    'Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Bizerte', 'Beja', 'Jendouba',
    'Kef', 'Siliana', 'Nabeul', 'Zaghouan', 'Sousse', 'Monastir', 'Mahdia',
    'Sfax', 'Kairouan', 'Kasserine', 'Sidi Bouzid', 'Gabes', 'Mednine', 'Tataouine',
    'Gafsa', 'Tozeur', 'Kebili'
  ];
  const [order, setOrder] = useState({
    nom: account ? account.Nom : "",
    gouvernorat: account ? account.Gouvernorat : "",
    delegation: account ? account.Delegation : "",
    adresse: account ? account.Adresse : "",
    phone1: account ? account.Phone_1 : "",
    phone2: account ? account.Phone_2 : "",
    remarque: "",
    panier: [],
});
  
  const openModal = () => {
    setShowModal(true);
    setOrder((prevOrder) => {
      const updatedOrder = {
        ...prevOrder,
        panier: panier,  // Remplace le panier actuel par le panier passé
      };
      console.log(updatedOrder);  // Affiche l'order mis à jour dans la console
      return updatedOrder;
    });
  };
  const closeModal=()=>{
    setShowModal(false);
    // console.log(order);
  }

  const [errorMessage, setErrorMessage] = useState(''); // État pour le message d'erreur

  // Fonction de validation du formulaire
  const validateForm = () => {
    const requiredFields = ['nom', 'gouvernorat', 'delegation', 'adresse', 'phone1']; // Champs obligatoires
    for (let field of requiredFields) {
      if (!order[field] && (field !== 'gouvernorat' || !selectedGouvernorat)) {
         if(field=="nom"){
          
        setErrorMessage(`Le champ Nom et Prénom est obligatoire.`);
        return false;
        }else if(field=="gouvernorat"){
          
          setErrorMessage(`Le champ Gouvernorat est obligatoire.`);
          return false;
          }else if(field=="delegation"){
          
          setErrorMessage(`Le champ Délégation est obligatoire.`);
          return false;
          }else if(field=="adresse"){
          
            setErrorMessage(`Le champ Adresse complète est obligatoire.`);
            return false;
            }else if (field=="phone1"){
              setErrorMessage(`Le champ Téléphone est obligatoire.`);
              return false;
          }
           
        
      }
    }
    setErrorMessage(''); // Réinitialise le message d'erreur si tout est valide
    return true;
  };
  
  const navigate = useNavigate();
  // Fonction pour passer la commande
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Vérifie la validité du formulaire
    if (validateForm()) {
        setOrder((prevOrder) => {
            const updatedOrder = {
                ...prevOrder,
                gouvernorat: selectedGouvernorat,
            };
            // console.log(updatedOrder);  // Affiche l'ordre mis à jour dans la console
            return updatedOrder;
        });

        let data = {};
        if (account) {
            data = {
                nom:order.nom,
                User_id: account.id,
                Gouvernorat: selectedGouvernorat,
                Delegation: order.delegation,
                Phone1: order.phone1,
                Phone2: order.phone2,
                Remarque: order.remarque,
                adresse_complet:order.adresse,
                Panier: panier.map(item => ({
                    Product_UID: item.UID,
                    Size: item.size,
                    Color: item.color,
                    Quantity: item.quantity,
                    Price: parseFloat(item.Price),
                })),
                status: "Confirmation",
            };
        } else {
            data = {
                nom:order.nom,

                Gouvernorat: selectedGouvernorat,
                Delegation: order.delegation,
                Phone1: order.phone1,
                Phone2: order.phone2,
                Remarque: order.remarque,
                adresse_complet:order.adresse,
                Panier: panier.map(item => ({
                    Product_UID: item.UID,
                    Size: item.size,
                    Color: item.color,
                    Quantity: item.quantity,
                    Price: parseFloat(item.Price),
                })),
                status: "Confirmation",
            };
        }
        try {
            const response = await axios.post(`${API_URL}/order`, data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            console.log("data",data)
            
            // Si valide, ferme le modal
            closeModal();
            // Logique pour soumettre la commande, par exemple :
            console.log("Commande envoyée avec succès :", response.data);

            setPanier([]);
            localStorage.removeItem("panier");
            navigate('/');
            localStorage.setItem('showNotification', 'true');
          } catch (error) {
            setErrorMessage(error.response.data.message);
            console.error("Erreur lors de l'envoi de la commande :", error);
            // alert("Une erreur est survenue lors de l'envoi de la commande.");
        }

    }
  };
// Function to handle incrementing quantity
const handleIncrement = (index) => {
  setPanier((prevPanier) => {
    const updatedPanier = [...prevPanier];
    updatedPanier[index].quantity += 1; // Increment quantity
    return updatedPanier;
  });
};

// Function to handle decrementing quantity
const handleDecrement = (index) => {
  setPanier((prevPanier) => {
    const updatedPanier = [...prevPanier];
    if (updatedPanier[index].quantity > 1) {
      updatedPanier[index].quantity -= 1; // Decrement quantity
    }
    return updatedPanier;
  });
};
useEffect(() => {
    // Forcer le scroll au top lors de l'ouverture du composant
    window.scrollTo(0, 0);
  }, []); // Le tableau vide garantit que cela ne se produit qu'une seule fois, lors du montage du composant

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
  {Object.keys(account).length === 0 && account.constructor === Object && (
  <>
    <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
      <span className="font-medium">Bienvenue ! </span>  
      Connectez-vous ou créez un compte pour suivre votre commande. Votre panier restera intact.
    </div>
  </>
)}
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
                                  className={`rounded-lg border border-gray-200 p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:border-gray-700 md:p-6 ${
                                    (showModalDelete && itemIndex==index)? 'bg-black bg-opacity-50 ' : 'bg-white'
                                  }`}
                                >
                                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                  
                                            <div className="shrink-0 md:order-1">

                                              <img className="h-20 w-20 dark:hidden" 
                                              src={item.image} // Affiche la première image du produit
                                              alt={item.Product}
                                              />
                                          </div>
                          
                                          <label for="counter-input" className="sr-only">Choose quantity:</label>
                                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                                              <div className="flex items-center">
                                                {/* Decrement Button */}
                                                <button 
                                                  type="button" 
                                                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                  onClick={() => handleDecrement(index)} // Decrement logic
                                                >
                                                  <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                  </svg>
                                                </button>

                                                {/* Counter Input */}
                                                <input 
                                                  type="text" 
                                                  id="counter-input" 
                                                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                  value={item.quantity} 
                                                  readOnly
                                                />

                                                {/* Increment Button */}
                                                <button 
                                                  type="button" 
                                                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                  onClick={() => handleIncrement(index)} // Increment logic
                                                >
                                                  <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                  </svg>
                                                </button>
                                              </div>

                                              
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
                                                  {/* <button  type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                  <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                                  </svg>
                                                  Ajouter aux favoris
                                                  </button> */}
                              
                                                  <button onClick={(event) => handleOpenModal(event, index)} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                  <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                  </svg>
                                                  Supprimer
                                                  </button>
                                                  {/* Modal */}
                                          {(showModalDelete && itemIndex==index) && (
                                          <div className="absolute  ">
                                            <div className="bg-white rounded-lg shadow-lg   p-4 z-10 mb-40 md:mb-20">
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
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Prix</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">{(panier.reduce((sum, item) => sum + item.Price * item.quantity, 0)).toFixed(2)}
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
          <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Solde</dt>
              <dd className="text-base font-medium text-green-600">-{(panier.reduce((sum, item) => sum + (item.OldPrice-item.Price) * item.quantity, 0)).toFixed(2)}

              <span className="ml-1 text-xs">Dt</span>
              </dd>
            </dl>
        </div>
        <div className="relative">
            <button onClick={() => openModal()} className="flex w-full items-center justify-center rounded-lg bg-[#011d28] hover:bg-[#011d28e6] px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-[#011d28e6] ">
            Passer la commande</button>
            
            {showModal &&(
            
            <div id="crud-modal"  tabindex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center">
                <div
  id="crud-modal"
  tabIndex="-1"
  aria-hidden="true"
  className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"
  onClick={() => setShowModal(false)}
>
  <div
    onClick={(e) => e.stopPropagation()}
    className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-screen sm:max-h-[90%] w-full max-w-md sm:max-w-lg overflow-y-auto"
  >
    {/* Header */}
    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
  Finalisez votre commande et rejoignez notre famille pour une expérience unique !
</h3>


                            <button onClick={() => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        
                        <form className="p-4 md:p-5 " onSubmit={handleSubmit} > 
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom et Prénom</label>
                                    <input type="text"  value={order.nom} onChange={(e)=>setOrder({...order,nom:e.target.value})}name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nom et Prénom" required=""/>
                                </div>
                                {/* Gouvernorat */}
                                <div className=" ">
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
                                                {gouvernorats.sort().map((city) => (
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
                                    {/* Délégation */}
                                <div className=" ">
                                
                                <label for="Delegation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Délégation</label>
                                <input type="text" name="Delegation" value={order.delegation} onChange={(e)=>setOrder({...order,delegation:e.target.value})} id="Delegation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Délégation" required=""/>

              
                                
                                </div>
                                {/* Adresse complète */}
                                <div className="col-span-2">
                                    <label for="adresse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse complète </label>
                                    <input type="text" name="adresse" id="adresse" value={order.adresse} onChange={(e)=>setOrder({...order,adresse:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Adresse complète" required=""/>
                                </div>
                                {/* Téléphone */}
                                <div className="col-span-2">
                                    <label for="telephone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone</label>
                                    <input type="tel" name="telephone" id="telephone" value={order.phone1} onChange={(e)=>setOrder({...order,phone1:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Téléphone" required=""/>
                                </div>
                                 {/* Téléphone 2*/}
                                 <div className="col-span-2">
                                    <label for="telephone2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone 2(optionnel)</label>
                                    <input type="tel" name="telephone2" id="telephone2" value={order.phone2} onChange={(e)=>setOrder({...order,phone2:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Téléphone 2" required=""/>
                                </div>
                                
                              <div className="col-span-2">
                                    <label for="Remarque" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Remarque (optionnel)</label>
                                    <textarea id="Remarque" rows="4" value={order.remarque} onChange={(e)=>setOrder({...order,remarque:e.target.value})} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ajoutez une remarque ou une instruction spéciale pour votre commande..."></textarea>                    
                                </div>
                            </div>
                            {/* Message d'erreur */}
                              {errorMessage && (
                                <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span className="sr-only">Info</span>
                                <div>
                                {errorMessage}
                                </div>
                              </div>
                               
                              )}
                            <button type="submit" 
                            className="flex w-full items-center justify-center rounded-lg bg-[#011d28] hover:bg-[#011d28e6] px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-[#011d28e6] ">
                            Passer la commande</button>
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
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
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
            <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-[#011d28] hover:bg-[#011d28e6] px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-[#011d28e6] ">Appliquer</button>
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