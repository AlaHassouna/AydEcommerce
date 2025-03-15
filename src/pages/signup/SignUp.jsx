import React, { useContext, useState } from 'react';
import logo from '../../assets/images/logo1.png'; // Optional: Uncomment if you want to show the logo
import { Link } from 'react-router-dom';
import axios from 'axios'
import { MyContext } from '../../App';
const SignUp = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const gouvernorats = [
    'Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Bizerte', 'Beja', 'Jendouba',
    'Kef', 'Siliana', 'Nabeul', 'Zaghouan', 'Sousse', 'Monastir', 'Mahdia',
    'Sfax', 'Kairouan', 'Kasserine', 'Sidi Bouzid', 'Gabes', 'Mednine', 'Tataouine',
    'Gafsa', 'Tozeur', 'Kebili'
  ];
  const context= useContext(MyContext)

  const [gouvernoratModal, setGouvernoratModal] = useState(false);
  const [selectedGouvernorat, setSelectedGouvernorat] = useState("");
  const[errorMessage,setErrorMessage] = useState("");
  const[loading,setLoading] = useState("");
  const [formData, setFormData] = useState({
    Nom: '',
    Email: '',
    Password: '',
    Password_confirmation: '',
    Phone_1: '',
    Phone_2: '',
    Gouvernorat: '',
    Delegation: '',
    Adresse: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activer le mode chargement
    setErrorMessage(""); // Réinitialiser les erreurs
  
    const data = {
      Nom: formData.Nom,
      Email: formData.Email,
      Password: formData.Password,
      Password_confirmation: formData.Password_confirmation,
      Phone_1: formData.Phone_1,
      Phone_2: formData.Phone_2,
      Gouvernorat: selectedGouvernorat,
      Delegation: formData.Delegation,
      Adresse: formData.Adresse,
      Role: "user",
      IsActive: false
    };
  
    try {
      // Envoi des données d'inscription
      const registerResponse = await axios.post(
        `${API_URL}/users/register`,
        data
      );
  
      if (registerResponse.data) {
        // Afficher une pop-up de bienvenue
        // alert("Bienvenue, votre compte a été créé avec succès!");
  
        // Connexion avec les données extraites
        const loginData = {
          email: formData.Email,
          password: formData.Password,
        };
  
        const loginResponse = await axios.post(
          `${API_URL}/users/login`,
          loginData
        );
        // console.log("loginResponse",loginResponse)
  
        if (loginResponse.data) {
          // console.log("loginResponse.data",loginResponse.data)
          const userData = loginResponse.data;
          context.setAccount(userData.user);
          context.setIsLogin(true);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("user", JSON.stringify(userData.user));
          localStorage.setItem("CC_Token", userData.token);
          // console.log("Login successful:", userData);
        }
      }
    } catch (error) {
      // console.error("Erreur lors de l'enregistrement ou de la connexion:", error);
      // console.log("Type de error.response.data:", typeof error.response.data);
      if (error.response.data.includes("The email has already been taken.")) {
        setErrorMessage("Un compte existe déjà avec cet email.");
      } else if (error.response.data.includes("The password field must be at least 6 characters.")) {
        setErrorMessage("Le mot de passe doit contenir au moins 6 caractères.");
      } else if(error.response.data.includes("The password field confirmation does not match")){
        setErrorMessage("La confirmation du mot de passe ne correspond pas au mot de passe saisi");
        
      }
      
      else {
        setErrorMessage("Une erreur s'est produite. Veuillez vérifier vos informations.");
      }
      
      
    } finally {
      setLoading(false); // Désactiver le mode chargement après la requête
    }
  };
  return (
    <section className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
  <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Créer un compte
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
            <span className="font-medium text-red-500">*</span> Indique un champ obligatoire.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="Nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nom<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="Nom"
                id="Nom"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nom"
                value={formData.Nom}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                E-mail<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                value={formData.Email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mot de passe<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="Password"
                  id="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  value={formData.Password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div >
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirmez le mot de passe<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="Password_confirmation"
                  id="confirm-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  value={formData.Password_confirmation}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
              <div >
                <label htmlFor="Phone_1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Téléphone<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="Phone_1"
                  id="Phone_1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Téléphone"
                  value={formData.Phone_1}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div >
                <label htmlFor="Phone_2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Téléphone 2 (optionnel)
                </label>
                <input
                  type="tel"
                  name="Phone_2"
                  id="Phone_2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Téléphone 2"
                  value={formData.Phone_2}
                  onChange={handleInputChange}
                />
              </div>
            </div>

      
            <div className="flex items-end space-x-4">
                {/* Gouvernorat Selector */}
                <div className="relative w-1/2 ">
                  <label
                    htmlFor="Gouvernorat"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gouvernorat<span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setGouvernoratModal(!gouvernoratModal)}
                    className="w-full border bg-white dark:bg-gray-700 dark:text-white text-gray-900 border-gray-300 focus:ring-2 focus:ring-[#011d28e6] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 flex justify-between items-center"
                  >
                    {selectedGouvernorat || "Sélectionner"}
                    <svg
                      className="w-3 h-3 ml-2"
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
                  {gouvernoratModal && (
                    <div
                      id="dropdown"
                      className="absolute z-10 w-full bg-white border rounded-lg shadow-lg mt-1 max-h-48 overflow-y-auto dark:bg-gray-700"
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

                {/* Délégation Input */}
                <div className="w-1/2">
                  <label
                    htmlFor="Delegation"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Délégation<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="Delegation"
                    id="Delegation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Délégation"
                    value={formData.Delegation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

      
          <div>
            <label htmlFor="Adresse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse complète (optionnel)</label>
            <input
              type="text"
              name="Adresse"
              id="Adresse"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Adresse complète"
              value={formData.Adresse}
              onChange={handleInputChange}
            />
          </div>
          {errorMessage && (
              <div className="text-red-500 text-sm mt-2">
                <p>{errorMessage}</p>
              </div>
            )}
          <div className="flex justify-center items-center gap-4">
          <button
              type="submit"
              className={`w-2/4 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                loading
                  ? "bg-gray-400 cursor-wait" // Couleur de fond et curseur pendant le chargement
                  : "bg-[#011d28] hover:bg-[#011d28e6] focus:ring-4 focus:outline-none focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 1116 0A8 8 0 014 12z"
                    />
                  </svg>
                  <span className="ml-2">Création en cours...</span>
                </div>
              ) : (
                "Créer un compte"
              )}
            </button>



              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Vous avez déjà un compte ? <Link to="/login" className="font-medium text-[#011d28e6] hover:underline ">Connectez-vous</Link>
              </p>
            </div>

        </form>
      </div>
    </div>
  </div>
</section>
  );
};

export default SignUp;
