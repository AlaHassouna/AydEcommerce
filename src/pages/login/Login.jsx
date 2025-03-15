
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/images/logo1.png';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import axios from 'axios'
const Login = () => {
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const context= useContext(MyContext)
  const [errorMessage, setErrorMessage] = useState("");
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [response, setResponse] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [loading, setLoading] = useState(false);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activer le mode chargement
    setErrorMessage(""); // Réinitialiser les erreurs

    const loginData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await axios.post(
        `${API_URL}/users/login`,
        loginData
      );

      if (response.data) {
        const data = response.data;
        context.setAccount(data.user);  // 🔹 Met à jour l'état de account après connexion
        context.setAccount(data.user);
        context.setIsLogin(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("CC_Token", data.token);
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      setErrorMessage("Erreur de connexion. Vérifiez votre email et mot de passe.");
    } finally {
      setLoading(false); // Désactiver le mode chargement après la requête
    }
  };
 // Log context.user whenever it changes
useEffect(() => {
  console.log("Updated context.account:", context.account);
}, [context.account]);
  return (
    <section class="flex items-center justify-center ">

        <div class="lg:mx-10  w-full  flex flex-col items-center justify-center px-6 py-8 mx-auto lg:h-screen lg:py-0">
            {/* <a href="#" class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white ">
                <img class="w-20 h-20 mr-2" src={logo} alt="logo"/>
                  
            </a> */}
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Se connecter à votre compte
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                            <input type="email" name="email" id="email" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 
                            focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="name@company.com" required
                            
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </div>
                        <div >
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 
                            focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                            value={formData.password}
                            onChange={handleChange}/>
                        </div>
                        {errorMessage && 
                        <label for="remember" class="text-[#551121] text-xs  dark:text-gray-300">Erreur de connexion : Vérifiez votre email et votre mot de passe.</label>
                                  }
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                </div>
                                <div class="ml-3 text-sm">
                                  <label for="remember" class="text-gray-500 dark:text-gray-300">Se souvenir de moi</label>
                                </div>
                            </div>
                            <Link to="/reset-password" class="text-sm font-medium text-[#011d28e6] hover:underline ">Mot de passe oublié ?</Link>
                        </div>
                        {errorMessage && (
                            <p className="text-red-500 text-sm">{errorMessage}</p>
                          )}

                          <button
                            type="submit"
                            className="w-full text-white bg-[#011d28] hover:bg-[#011d28e6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:text-black"
                            disabled={loading} // Désactiver le bouton pendant le chargement
                          >
                            {loading ? "Connexion..." : "Se connecter"} {/* Texte changeant */}
                          </button>
                        {/* <div class="inline-flex items-center justify-center w-full">
                          <hr class=" mb-0 mt-0 w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                          <span class=" absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">ou</span>
                      </div>
                        <button type="submit" class="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-[#011d28] hover:bg-[#011d28e6] text-white rounded-lg border border-gray-200  text-center  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center justify-center space-x-2 mx-auto">
                          <svg class="w-6 h-6  text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd"/>
                          </svg>
                          <span>Continuer avec Google</span>
                        </button> */}


                        
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Vous n'avez pas encore de compte ? <Link to="/register" class="font-medium text-[#011d28e6] hover:underline">Inscrivez-vous</Link>
                        </p>
                    </form>
                </div>
            </div>
            
        </div>


</section>
  )
}

export default Login  