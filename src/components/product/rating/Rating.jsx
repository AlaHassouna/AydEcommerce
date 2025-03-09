import React, { useContext, useEffect, useState } from 'react'
import { use } from 'react';
import axios from 'axios'
import { MyContext } from '../../../App';

const Rating = ({uid}) => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  // console.log("product_id",product_id)
  
  const [reviewStat,setReviewStat]=useState({})
  //       productId:1,
  //       averageRating: 4.5,
  //       totalReviews: 645,
  //       ratingsDistribution: [
  //         { rating: 5, count: 239, percentage: 37 },
  //         { rating: 4, count: 432, percentage: 60 },
  //         { rating: 3, count: 53, percentage: 8 },
  //         { rating: 2, count: 32, percentage: 5 },
  //         { rating: 1, count: 20, percentage: 3 }
  //       ],
  // })
  
  const [reviewsData,setReviewsData] =useState ([])
  const[error,setError]=useState("")
  useEffect(() => {
    // Fonction pour récupérer les données via Axios
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${API_URL}/reviews/product/${uid}`);
        console.log("response",response.data)
        setReviewsData(response.data);  // Stocker les données dans l'état
      } catch (err) {
        setError('Erreur lors de la récupération des revues');
        console.error(err);
      }
    };

    fetchReviews(); // Appeler la fonction pour récupérer les données
  }, []);
  useEffect(() => {
    const fetchReviewStats = async () => {
        try {
            const response = await axios.get(`${API_URL}/reviews/stats/${uid}`);
            console.log("ReviewStats",response.data)
            setReviewStat(response.data); // Mettre à jour le state avec les données reçues
        } catch (error) {
            console.error("Erreur lors de la récupération des statistiques :", error);
        }
    };

    fetchReviewStats();
  }, [reviewsData]);
  useEffect(()=>{
    console.log("reviewsData",reviewsData)
  },[reviewsData])
      //     {
      //       reviewer: "Alice",
      //       rating: 5,
      //       comment: "Excellent produit, je suis très satisfaite !",
      //       date: "2024/12/01"
      //     },
      //     {
      //       reviewer: "Bob",
      //       rating: 4,
      //       comment: "Très bon produit, mais la livraison a pris du temps.",
      //       date: "2024/11/28"
      //     },
      //     {
      //       reviewer: "Charlie",
      //       rating: 3,
      //       comment: "Le produit est correct mais pas exceptionnel.",
      //       date: "2024/11/20"
      //     },
      //     {
      //       reviewer: "Diane",
      //       rating: 2,
      //       comment: "Mauvais rapport qualité/prix.",
      //       date: "2024/11/15"
      //     },
      //     {
      //       reviewer: "Eve",
      //       rating: 1,
      //       comment: "Produit défectueux, très déçue.",
      //       date: "2024/11/10"
      //     }
      //   ]
      // );
    const today = new Date(); // Obtenir la date actuelle
    const formattedDate = today.toLocaleDateString(); // Format local (par exemple : "17/01/2025" en français)
    const [hoveredStar, setHoveredStar] = useState(0); // Gérer le survol
    const { account,setAccount } = useContext(MyContext);
    // console.log("account",account)
    const [review, setReview] = useState({
      
      rating: 5, // Initialisation à 5 étoiles par défaut
      comment: "",
      
    });

  // Gestion du clic sur une étoile
  const handleRatingChange = (star) => {
    setReview((prev) => ({
      ...prev,
      rating: star, // Mettre à jour la note dans le state
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche la soumission par défaut
    setReview((prev) => ({
      ...prev,
      
  }))
  const data ={
    rating : review.rating,
    comment : review.comment,
    reviewer_id: account.id, 
    product_uid:uid
  }
    // console.log("review",data)

    try {
      const response = await axios.post(`${API_URL}/review`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response.data",response.data)
      // Ajoute l'avis validé à la liste des avis
      setReviewsData((prevReviews) => [response.data, ...prevReviews]);

      console.log("Review ajouté avec succès:", response.data);

      // Réinitialise le formulaire après soumission
      setReview({
        
        rating: 0,
        comment: "",
      });

    } catch (error) {
      console.error("Erreur lors de l'ajout du review:", error.response ? error.response.data : error);
    }
  };
    return (
    <>

    <section className="bg-white  antialiased dark:bg-gray-900  ">
    <h3 class="text-xl font-bold text-gray-800 mb-2">Avis des clients    </h3>

    <form 
  className="mb-6 text-lg font-medium border p-6 rounded-2xl shadow-lg bg-gray-50"
  onSubmit={handleSubmit} // Appelle handleSubmit au submit du formulaire
>
  <h3 className="text-base text-gray-800 mb-4 font-semibold">Écrire un avis</h3>

  {/* <!-- Section Étoiles --> */}
  <div className="flex items-center space-x-2 mb-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button" // Empêche la soumission du formulaire au clic
        onMouseEnter={() => setHoveredStar(star)} 
        onMouseLeave={() => setHoveredStar(0)} 
        onClick={() => handleRatingChange(star)} 
        className={`text-gray-400 ${hoveredStar >= star || review.rating >= star ? "text-yellow-400" : ""} transition-colors duration-200`}
      >
        <svg  className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 
            2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 
            2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
      </button>
    ))}
  </div>

  {/* <!-- Section Texte --> */}
  <div className="mb-4">
    <label htmlFor="comment" className="sr-only">Votre commentaire</label>
    <textarea
      id="comment"
      rows="3"
      className="w-full p-4 text-sm text-gray-800 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:outline-none placeholder-gray-400"
      placeholder="Écrivez un commentaire..."
      value={review.comment}
      onChange={(e) => setReview({ ...review, comment: e.target.value })}
      required
    ></textarea>
  </div>

  {/* <!-- Bouton Soumettre --> */}
  <button
    type="submit" // Type "submit" pour déclencher onSubmit sur le formulaire
    className="inline-flex items-center py-2 px-6 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
  >
    Ajouter
  </button>
</form>


  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
  <div class=" ">
  <div className="my-6 gap-4 sm:flex sm:items-center sm:justify-between  rounded-2xl shadow-lg p-4">
            {/* Partie des étoiles et des avis */}
            <div className="my-6 gap-8 md:my-8">
                    {/* Partie 1 */}
                    <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">Total Review ({reviewStat.totalReviews})</p>
                    
                    {/* Partie 2 */}
                    <h1 className="text-[50px] font-semibold text-gray-900 dark:text-white">{reviewStat.averageRating}</h1>
                    
                    {/* Partie 3 */}
                    <div className="flex items-center gap-0.5">
                        {/* Render Stars Based on averageRating */}
                        {/* Générer les étoiles en fonction de averageRating */}
                    {[...Array(5)].map((_, i) => {
                        const fullStars = Math.floor(reviewStat.averageRating); // Étoiles pleines
                        const hasHalfStar = reviewStat.averageRating - fullStars >= 0.5; // Vérifie s'il faut une demi-étoile

                        return (
                            <svg
                                key={i}
                                className={`h-4 w-4 ${i < fullStars ? "text-yellow-300" : i === fullStars && hasHalfStar ? "text-yellow-300" : "text-gray-300"}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {i < fullStars ? (
                                    // Étoile pleine
                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                ) : i === fullStars && hasHalfStar ? (
                                    // Demi-étoile
                                    <path d="M12 2c-.39 0-.77.228-.95.658L9.24 7.14l-4.87.37c-.89.07-1.25 1.17-.57 1.73l3.7 3.13-.99 4.51c-.2.91.74 1.58 1.54 1.11L12 17.77V2Z" />
                                ) : (
                                    // Étoile vide (grise)
                                    <path fill="gray" d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                )}
                            </svg>
                        );
                    })}

                    </div>
                </div>


            {/* Distribution des évaluations */}
            <div className="my-6 gap-8 md:my-8">
            {reviewStat?.ratingsDistribution?.map(({ rating, count, percentage }) => (
              <div key={`rating-${rating}`} className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
                  <div className="flex items-center gap-2">
                      {/* Note */}
                      <p className="w-4 text-start text-sm font-medium leading-none text-gray-900 dark:text-white">
                          {rating}
                      </p>

                      {/* Étoile */}
                      <svg
                          className="h-4 w-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                      >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>

                      {/* Barre de progression */}
                      <div className="relative w-80 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                          <div className="absolute top-0 left-0 h-1.5 rounded-full bg-yellow-300" style={{ width: `${percentage}%` }}></div>
                      </div>

                      {/* Nombre de reviews */}
                      <a
                          href="#"
                          className="w-10 text-right text-sm font-medium leading-none text-[#011d28] hover:underline dark:text-primary-500 sm:w-auto sm:text-left"
                      >
                          {count} reviews
                      </a>
                  </div>
              </div>
          ))}

            </div>
        </div>


        {/* Individual Reviews */}
        <div className="mt-8 space-y-6">
        {reviewsData?.map(({ reviewer, rating, comment, created_at, id }) => (
          <div key={id} className="border-b pb-4 rounded-2xl shadow-lg p-4">
            <div className="flex items-center gap-2">
              {/* Affichage du Nom du Reviewer */}
              <span className="text-lg font-semibold text-gray-900 dark:text-white">{reviewer?.Nom}
              </span>
              
              {/* Affichage des étoiles */}
              {[...Array(Math.min(rating, 5))].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              ))}
            </div>

            {/* Affichage de la Date */}
            <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(created_at).toLocaleDateString()}</p>

            {/* Affichage du Commentaire */}
            <p className="mt-2 text-gray-700 dark:text-gray-300">{comment}</p>
          </div>
        ))}

        </div>
    </div>
  </div>
</section>


{/* <!-- Add review modal --> */}
<div id="review-modal" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 antialiased">
  <div class="relative max-h-full w-full max-w-2xl p-4">
    {/* <!-- Modal content --> */}
    <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
      {/* <!-- Modal header --> */}
      <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
        <div>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Add a review for:</h3>
          <a href="#" class="font-medium text-primary-700 hover:underline dark:text-primary-500">Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD</a>
        </div>
        <button type="button" class="absolute right-5 top-5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="review-modal">
          <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      {/* <!-- Modal body --> */}
      <form class="p-4 md:p-5">
        <div class="mb-4 grid grid-cols-2 gap-4">
          <div class="col-span-2">
            <div class="flex items-center">
              <svg class="h-6 w-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg class="ms-2 h-6 w-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg class="ms-2 h-6 w-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg class="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg class="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <span class="ms-2 text-lg font-bold text-gray-900 dark:text-white">3.0 out of 5</span>
            </div>
          </div>
          <div class="col-span-2">
            <label for="title" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Review title</label>
            <input type="text" name="title" id="title" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required="" />
          </div>
          <div class="col-span-2">
            <label for="description" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Review description</label>
            <textarea id="description" rows="6" class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required=""></textarea>
            <p class="ms-auto text-xs text-gray-500 dark:text-gray-400">Problems with the product or delivery? <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">Send a report</a>.</p>
          </div>
          <div class="col-span-2">
            <p class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Add real photos of the product to help other customers <span class="text-gray-500 dark:text-gray-400">(Optional)</span></p>
            <div class="flex w-full items-center justify-center">
              <label for="dropzone-file" class="dark:hover:bg-bray-800 flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg class="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
          <div class="col-span-2">
            <div class="flex items-center">
              <input id="review-checkbox" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
              <label for="review-checkbox" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400">By publishing this review you agree with the <a href="#" class="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>.</label>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
          <button type="submit" class="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add review</button>
          <button type="button" data-modal-toggle="review-modal" class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default Rating