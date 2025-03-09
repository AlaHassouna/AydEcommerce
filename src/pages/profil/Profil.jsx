import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../App';
import axios from 'axios'
const Profil = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

    // const {account}
    const { account,setAccount } = useContext(MyContext);
    const [accountUpdate,setAccountUpdate] = useState(account);
    const [gouvernoratModal, setGouvernoratModal] = useState(false);
    const [selectedGouvernorat, setSelectedGouvernorat] = useState("");
    // console.log("account profiiiiiiiiiiiiiiiiil",account)
    const gouvernorats = [
        'Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Bizerte', 'Beja', 'Jendouba',
        'Kef', 'Siliana', 'Nabeul', 'Zaghouan', 'Sousse', 'Monastir', 'Mahdia',
        'Sfax', 'Kairouan', 'Kasserine', 'Sidi Bouzid', 'Gabes', 'Mednine', 'Tataouine',
        'Gafsa', 'Tozeur', 'Kebili'
      ];
    const [showEdit,setShowEdit]=useState(false)
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("accountUpdate", accountUpdate);
    
      const id = accountUpdate.id;
      const data = {
        Nom: accountUpdate.Nom,
        Email: accountUpdate.Email,
        Adresse: accountUpdate.Adresse,
        Phone_1: accountUpdate.Phone_1,
        Phone_2: accountUpdate.Phone_2,
        Gouvernorat: accountUpdate.Gouvernorat,
        Delegation: accountUpdate.Delegation
      };
    
      try {
        const response = await axios.put(`${API_URL}/users/${id}`, data);
        console.log("Mise à jour réussie :", response.data);
        localStorage.setItem("user", JSON.stringify(accountUpdate));
        
        // Mettre à jour l'état avec les nouvelles informations
        setAccount(accountUpdate);
        setShowEdit(false);
      } catch (error) {
        console.error("Erreur lors de la mise à jour :", error.response?.data || error.message);
      }
    };
    const handleOpenModal = (event) => {
        event.stopPropagation();
        setShowEdit(true);
        
      };

      
      const[commandes,setCommandes]=useState([])
      //   {
      //     "orderId": "#FWB12546798",
      //     "date": "11.12.2023",
      //     "prix": "499",
      //     "statut": "En transit"
      //   },
      //   {
      //     "orderId": "#FWB12546777",
      //     "date": "10.11.2024",
      //     "prix": "3,287",
      //     "statut": "Annulé"
      //   },
      //   {
      //     "orderId": "#FWB12546846",
      //     "date": "07.11.2024",
      //     "prix": "111",
      //     "statut": "Terminé"
      //   }
      // ])

      useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await axios.get(`${API_URL}/orders/user/${account.id}`);
            setCommandes(response.data.orders);  // On suppose que la réponse contient un tableau 'orders'
            // setLoading(false);
            console.log("response.data.orders",response.data.orders)
          } catch (err) {
            console.log('Une erreur est survenue');
            // setLoading(false);
          }
        };
    
        fetchOrders();
      }, []);
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-8">
  <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
    {/* <nav className="mb-4 flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
            <svg className="me-2 h-4 w-4"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
            </svg>
            <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">My account</a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg className="mx-1 h-4 w-4 text-gray-400 rtl:rotate-180"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
            </svg>
            <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">Account</span>
          </div>
        </li>
      </ol>
    </nav> */}
    {/* <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">Vue générale</h2> */}
    {/* <div className="grid grid-cols-2 gap-6 border-b border-t border-gray-200 py-4 dark:border-gray-700 md:py-8 lg:grid-cols-3 xl:gap-16">
      <div>
        <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
        </svg>
        <h3 className="mb-2 text-gray-500 dark:text-gray-400">Commandes effectuées</h3>
        <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white"
          >24
          <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
            <svg className="-ms-1 me-1 h-4 w-4"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
            </svg>
            10.3%
          </span>
        </span>
        <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          <svg className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          vs 20 last 3 months
        </p>
      </div>
      <div>
        <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
        </svg>
        <h3 className="mb-2 text-gray-500 dark:text-gray-400">Avis ajoutés</h3>
        <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white"
          >16
          <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
            <svg className="-ms-1 me-1 h-4 w-4"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
            </svg>
            8.6%
          </span>
        </span>
        <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          <svg className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          vs 14 last 3 months
        </p>
      </div>
      <div>
        <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
        </svg>
        <h3 className="mb-2 text-gray-500 dark:text-gray-400">Produits favoris ajoutés</h3>
        <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white"
          >8
          <span className="ms-2 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
            <svg className="-ms-1 me-1 h-4 w-4"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
            </svg>
            12%
          </span>
        </span>
        <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          <svg className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          vs 10 last 3 months
        </p>
      </div>
      <div>
        <svg className="mb-2 h-8 w-8 text-gray-400 dark:text-gray-500"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4" />
        </svg>
        <h3 className="mb-2 text-gray-500 dark:text-gray-400">Product returns</h3>
        <span className="flex items-center text-2xl font-bold text-gray-900 dark:text-white"
          >2
          <span className="ms-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
            <svg className="-ms-1 me-1 h-4 w-4"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"></path>
            </svg>
            50%
          </span>
        </span>
        <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          <svg className="me-1.5 h-4 w-4 text-gray-500 dark:text-gray-400"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          vs 1 last 3 months
        </p>
      </div>
    </div> */}
    <div className="py-4 md:py-8">
      <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
        <div className="space-y-4">
          <div className="flex space-x-4">
            {/* <img className="h-16 w-16 rounded-lg" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Helene avatar" /> */}
           

            <div>
                
              {/* <span className="mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> PRO Account </span> */}
              <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">{account.Nom}</h2>
            </div>
          </div>
          <dl className="">
            <dt className="font-semibold text-gray-900 dark:text-white">Adresse e-mail</dt>
            <dd className="text-gray-500 dark:text-gray-400">{account.Email}</dd>
          </dl>
          <dl>
            
            <dt className="font-semibold text-gray-900 dark:text-white">Adresse de domicile</dt>
            <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <svg className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
              </svg>
              {account.Adresse}
            </dd>
          </dl>
          
          {/* <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">Delivery Address</dt>
            <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <svg className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              9th St. PATH Station, New York, United States of America
            </dd>
          </dl> */}
        </div>
        <div className="space-y-4">
        <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">Numéro de téléphone 1</dt>
            <dd className="text-gray-500 dark:text-gray-400">{account.Phone_1}</dd>
          </dl>
          <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">Numéro de téléphone 2</dt>
            <dd className="text-gray-500 dark:text-gray-400">{account.Phone_2}</dd>
          </dl>
        <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">Gouvernorat</dt>
            <dd className="text-gray-500 dark:text-gray-400">{account.Gouvernorat}</dd>
          </dl>
          <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">Délégation</dt>
            <dd className="text-gray-500 dark:text-gray-400">{account.Delegation}</dd>
          </dl>
        
          {/* <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">Favorite pick-up point</dt>
            <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <svg className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"
                />
              </svg>
              Herald Square, 2, New York, United States of America
            </dd>
          </dl> */}
          {/* <dl>
            <dt className="font-semibold text-gray-900 dark:text-white">My Companies</dt>
            <dd className="text-gray-500 dark:text-gray-400">FLOWBITE LLC, Fiscal code: 18673557</dd>
          </dl> */}
          {/* <dl>
            <dt className="mb-1 font-semibold text-gray-900 dark:text-white">Payment Methods</dt>
            <dd className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                <img className="h-4 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
                <img className="hidden h-4 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
              </div>
              <div>
                <div className="text-sm">
                  <p className="mb-0.5 font-medium text-gray-900 dark:text-white">Visa ending in 7658</p>
                  <p className="font-normal text-gray-500 dark:text-gray-400">Expiry 10/2024</p>
                </div>
              </div>
            </dd>
          </dl> */}
        </div>
      </div>
      <button type="button" onClick={(event) => handleOpenModal(event)} data-modal-target="accountInformationModal2" data-modal-toggle="accountInformationModal2" className="inline-flex w-full items-center justify-center rounded-lg bg-[#011d28] hover:bg-[#011d28e6] px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-[#011d28]  sm:w-auto">
        <svg className="-ms-0.5 me-1.5 h-4 w-4"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path>
        </svg>
        Modifier vos données
      </button>
    </div>
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:p-8">
      <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Dernières commandes</h3>
        {commandes.map((com,index)=>(
      <div key={index} className="flex flex-wrap items-center gap-y-4 border-b border-gray-200 pb-4 dark:border-gray-700 md:pb-5">

          {/* <dl className="w-1/2 sm:w-48" >
          <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Order ID:</dt>
            <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
              <a href="#" className="hover:underline">{com.orderId}</a>
            </dd>
        </dl> */}

        <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
          <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Date:</dt>
          <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
  {new Date(com.created_at).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}
</dd>

        </dl>

        <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
          <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Prix :</dt>
          <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">{com.total_price}<span className="ml-1 text-xs font-semibold text-gray-500">Dt</span></dd>
          
          
                
        </dl>
        {com.status=== "Confirmation" && (
  <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Statut:</dt>
    <dd className="mt-1.5 inline-flex items-center rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
      <svg className="me-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m6-6H6"></path>
      </svg>
      Confirmation
    </dd>
  </dl>
)}

{com.status=== "Confirmé" && (
  <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Statut:</dt>
    <dd className="mt-1.5 inline-flex items-center rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
      <svg className="me-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L19 7"></path>
      </svg>
      Confirmé
    </dd>
  </dl>
)}

{com.status=== "Livraison" && (
  <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Statut:</dt>
    <dd className="mt-1.5 inline-flex items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
      <svg className="me-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
      </svg>
      Livraison
    </dd>
  </dl>
)}

{com.status=== "Terminé" && (
  <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Statut:</dt>
    <dd className="mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
      <svg className="me-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"></path>
      </svg>
      Terminé
    </dd>
  </dl>
)}

{com.status=== "Retour" && (
  <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Statut:</dt>
    <dd className="mt-1.5 inline-flex items-center rounded bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-300">
    <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
</svg>

      Retour
    </dd>
  </dl>
)}

{com.status=== "Annulé" && (
  <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">Statut:</dt>
    <dd className="mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
      <svg className="me-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"></path>
      </svg>
      Annulé
    </dd>
  </dl>
)}

        {/* <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
          <button
            id="actionsMenuDropdownModal10"
            data-dropdown-toggle="dropdownOrderModal10"
            type="button"
            className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
          >
            Actions
            <svg className="-me-0.5 ms-1.5 h-4 w-4"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
            </svg>
          </button>
          <div id="dropdownOrderModal10" className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
            <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="actionsMenuDropdown10">
              <li>
                <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"></path>
                  </svg>
                  <span>Order again</span>
                </a>
              </li>
              <li>
                <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"></path>
                    <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                  </svg>
                  Order details
                </a>
              </li>
              <li>
                <a href="#" data-modal-target="deleteOrderModal" data-modal-toggle="deleteOrderModal" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg className="me-1.5 h-4 w-4"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path>
                  </svg>
                  Cancel order
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        </div>  
      
    ))}
     
      
    </div>
  </div>
  <div className="relative">
  {showEdit && 
  (<div id="accountInformationModal2" tabindex="-1"  className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center">
    <div
  id="crud-modal"
  tabIndex="-1"
  
  className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"
  
>
      {/* <!-- Modal content --> */}
      <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
          {/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Account Information</h3> */}
          <button type="button" onClick={() => setShowEdit(false)} className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="accountInformationModal2">
            <svg className="h-3 w-3"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
          <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="col-span-2">
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom et Prénom</label>
                                    <input type="text"  value={accountUpdate.Nom} onChange={(e) => {
                                        e.preventDefault();
                                        setAccountUpdate({ ...accountUpdate, Nom: e.target.value });
                                        }}
                                        name="Nom" id="Nom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nom et Prénom" required=""/>
                                </div>
                                <div className="col-span-2">
                                    <label for="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse e-mail</label>
                                    <input type="text"  value={accountUpdate.Email} onChange={(e) => {
                                        e.preventDefault();
                                        setAccountUpdate({ ...accountUpdate, Email: e.target.value });
                                        }}
                                        name="Email" id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nom et Prénom" required=""/>
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
                                           {selectedGouvernorat || accountUpdate.Gouvernorat} 
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
                                            className="p-2 border overflow-y-auto absolute z-40 bg-white divide-y divide-gray-100 rounded-b-lg shadow-lg w-60 dark:bg-gray-700"
                                            style={{ maxHeight: '200px' }}
                                            >
                                            <ul className="text-sm text-gray-700 dark:text-gray-200">
                                                {gouvernorats.sort().map((city) => (
                                                <li
                                                    key={city}
                                                    className="px-4 py-2 hover:bg-[#011d28e6] hover:text-white rounded-md cursor-pointer transition-colors duration-300"
                                                    onClick={() => {
                                                    setSelectedGouvernorat(city);
                                                    setAccountUpdate({ ...accountUpdate, Gouvernorat: city });
                                                    setGouvernoratModal(false); // Ferme le dropdown après sélection
                                                    }}
                                                    onChange={(e)=>setAccountUpdate({...accountUpdate,Gouvernorat:selectedGouvernorat})}
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
                                <input type="text" name="Delegation" value={accountUpdate.Delegation} onChange={(e)=>setAccountUpdate({...accountUpdate,Delegation:e.target.value})} id="Delegation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Délégation" required=""/>

              
                                
                                </div>
                                {/* Adresse complète */}
                                <div className="col-span-2">
                                    <label for="adresse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse complète </label>
                                    <input type="text" name="adresse" id="adresse" value={accountUpdate.Adresse} onChange={(e)=>setAccountUpdate({...accountUpdate,Adresse:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Adresse complète" required=""/>
                                </div>
                                {/* Téléphone */}
                                <div className="col-span-2">
                                    <label for="telephone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone</label>
                                    <input type="tel" name="telephone" id="telephone" value={accountUpdate.Phone_1} onChange={(e)=>setAccountUpdate({...accountUpdate,Phone_1:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Téléphone" required=""/>
                                </div>

                                {/* Téléphone 2*/}
                                <div className="col-span-2">
                                    <label for="telephone2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone 2(optionnel)</label>
                                    <input type="tel" name="telephone2" id="telephone2" value={accountUpdate.Phone_2} onChange={(e)=>setAccountUpdate({...accountUpdate,Phone_2:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Téléphone 2" required=""/>
                                </div>
                                
            </div>
            <button type="submit" 
                            className="flex w-full items-center justify-center rounded-lg bg-[#011d28] hover:bg-[#011d28e6] px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-[#011d28e6] ">
                            Enregistrer</button>
        </form>
      </div>
    </div>
  </div>)
    }</div>
  {/* <div id="deleteOrderModal" tabindex="-1"  className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
      <div className="relative h-full w-full max-w-md p-4 md:h-auto">
        <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <button type="button" className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteOrderModal">
            <svg  className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
            <svg className="h-8 w-8 text-gray-500 dark:text-gray-400"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>
            <span className="sr-only">Danger icon</span>
          </div>
          <p className="mb-3.5 text-gray-900 dark:text-white"><a href="#" className="font-medium text-primary-700 hover:underline dark:text-primary-500">@heleneeng</a>, are you sure you want to delete this order from your account?</p>
          <p className="mb-4 text-gray-500 dark:text-gray-300">This action cannot be undone.</p>
          <div className="flex items-center justify-center space-x-4">
            <button data-modal-toggle="deleteOrderModal" type="button" className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600">No, cancel</button>
            <button type="submit" className="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Yes, delete</button>
          </div>
        </div>
      </div>
    </div> */}
</section>
  )
}

export default Profil