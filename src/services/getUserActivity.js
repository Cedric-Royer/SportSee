import { USE_MOCK_DATA } from '../config';

/**
 * Récupère les données de sessions moyennes d'un utilisateur.
 * En fonction de la configuration `USE_MOCK_DATA`, la fonction utilise soit des données simulées (mock), 
 * soit effectue une requête HTTP pour récupérer les données des sessions moyennes de l'utilisateur.
 *
 * @async
 * @param {string} userId - L'ID de l'utilisateur pour lequel récupérer les données d'activité.
 * @returns {Promise<Object>} - Un objet contenant les sessions d'activité de l'utilisateur. 
 */
export const getUserActivity = async (userId) => {
  try {
    const url = USE_MOCK_DATA 
      ? `../mocks/activity/${userId}.json` 
      : `http://localhost:3000/user/${userId}/activity`;
    
    const response = await fetch(url);
      
    const data = await response.json();

    return data;

  } catch (error) {
    console.error("Erreur lors de la récupération des activités quotidiennes :", error);
    throw error; 
  }
};

/**
 * Formate les données d'activité d'un utilisateur.
 * Transforme les dates en jours et réorganise les données des sessions.
 *
 * @param {Object} data - Les données d'activité brutes récupérées.
 * @returns {Object} - Les données d'activité formatées, incluant les sessions d'activité transformées.
 */
export const formatUserActivityData = (data) => {
  const formattedSessions = data.data.sessions.map((session) => {
    const date = new Date(session.day);
    const day = date.getDate();
    session.day = day;
    return {
      day: day,
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });

  return { ...data, sessions: formattedSessions };
};