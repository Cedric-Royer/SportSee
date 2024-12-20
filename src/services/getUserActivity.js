import { USE_MOCK_DATA } from '../config';

/**
 * Récupère les données d'activité d'un utilisateur.
 * En fonction de la configuration `USE_MOCK_DATA`, la fonction utilise soit des données simulées (mock), 
 * soit fait une requête HTTP vers un serveur pour récupérer les données d'activité.
 *
 * @async
 * @param {string} userId - L'ID de l'utilisateur pour lequel récupérer les données d'activité.
 * @returns {Promise<Object>} - Un objet contenant les sessions d'activité de l'utilisateur. 
 * Si aucune donnée n'est trouvée ou en cas d'erreur, un objet avec un tableau vide de sessions est retourné.
 *
 * @throws {Error} - Si une erreur survient lors de la récupération des données d'activité, une exception est lancée.
 */
export const getUserActivity = async (userId) => {
  try {
    const url = USE_MOCK_DATA 
      ? `../mocks/activity/${userId}.json` 
      : `http://localhost:4000/user/${userId}/activity`;
    
    const response = await fetch(url);
      
    if (!response.ok) {
      if (response.status === 404) {
        console.warn("Aucune donnée d'activité trouvée pour cet utilisateur.");
        return { sessions: [] }; 
      } else {
        throw new Error("Erreur lors de la récupération des données d'activité de l'utilisateur");
      }
    }

    const data = await response.json();

    if (!data || !data.data || !data.data.sessions) {
      console.warn("Données d'activité manquantes.");
      return { sessions: [] }; 
    }

    return formatUserActivityData(data);

  } catch (error) {
    console.error("Erreur de connexion au serveur :", error);
    return { sessions: [] }; 
  }
};

/**
 * Formate les données d'activité d'un utilisateur.
 * Transforme les dates en jours et réorganise les données des sessions.
 *
 * @param {Object} data - Les données d'activité brutes récupérées.
 * @returns {Object} - Les données d'activité formatées, incluant les sessions d'activité transformées.
 */
const formatUserActivityData = (data) => {
  const formattedSessions = data.data.sessions.map((session) => {
    const date = new Date(session.day);
    const day = date.getDate();
    return {
      day: day,
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });

  return { ...data, sessions: formattedSessions };
};