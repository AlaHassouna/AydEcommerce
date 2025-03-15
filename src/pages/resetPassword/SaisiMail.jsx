import React, { useState } from 'react';
import axios from 'axios';

const SaisiMail = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // État pour gérer le chargement

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation simple de l'e-mail
    if (!email || !email.includes('@')) {
      setError('Veuillez saisir une adresse e-mail valide.');
      return;
    }

    setLoading(true); // Activation du chargement
    setError(''); // Réinitialisation des erreurs
    setSuccess(''); // Réinitialisation des messages de succès

    try {
      // Envoi de la requête à l'API
      const response = await axios.post('http://localhost:8000/api/forgot-password', {
        email: email,
      });

      setSuccess("Un e-mail de réinitialisation de mot de passe a été envoyé.");
      // Affichage du message de succès
    } catch (error) {
      // Gestion des erreurs
      setError(
        error.response?.data?.message ||
        "Une erreur s'est produite lors de l'envoi de la demande. Veuillez réessayer plus tard."
      );
    } finally {
      setLoading(false); // Désactivation du chargement
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 space-y-8 bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Réinitialisation du mot de passe
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Veuillez saisir votre adresse e-mail pour recevoir un lien de réinitialisation.
          </p>
        </div>

        {/* Affichage des messages d'erreur et de succès */}
        {error && (
          <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
            {error}
          </div>
        )}
        {success && (
          <div className="p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800">
            {success}
          </div>
        )}

        {/* Formulaire de saisie de l'e-mail */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="votre@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-[#011d28] hover:bg-[#011d28e6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:text-black"
            disabled={loading}
          >
            {loading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SaisiMail;