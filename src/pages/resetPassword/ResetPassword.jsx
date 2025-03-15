import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPasswordPage = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Ajout de l'état loading
  const navigate = useNavigate(); // Initialisez useNavigate

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true); // Activer l'état de chargement
    setError(''); // Réinitialiser les erreurs
    setSuccess(''); // Réinitialiser les messages de succès

    try {
      const response = await axios.post('http://localhost:8000/api/reset-password', {
        token: token,
        password: password,
        password_confirmation: passwordConfirmation,
      });

      setSuccess("Mot de passe réinitialisé avec succès.");

      // Redirection vers /login après 2 secondes
      setTimeout(() => {
        navigate('/login'); // Utilisez navigate pour rediriger
      }, 2000); // Délai de 2 secondes avant la redirection

    } catch (error) {
      setError("Échec de la réinitialisation du mot de passe. Veuillez vérifier le lien ou essayer plus tard.");
    } finally {
      setLoading(false); // Désactiver l'état de chargement
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="lg:mx-10 w-full flex flex-col items-center justify-center px-6 py-8 mt-4 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Réinitialiser votre mot de passe
            </h1>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {success && <div className="text-green-500 text-sm">{success}</div>}
            
            <form className="space-y-4 md:space-y-6" onSubmit={handleResetPassword}>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="passwordConfirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  required
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#011d28] hover:bg-[#011d28e6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:text-black"
                disabled={loading} // Désactiver le bouton pendant le chargement
              >
                {loading ? "Réinitialisation..." : "Réinitialiser"} {/* Texte changeant */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordPage;