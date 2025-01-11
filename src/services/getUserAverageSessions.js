import { USE_MOCK_DATA } from '../config';

/**
 * Récupère les données de sessions moyennes d'un utilisateur.
 * En fonction de la configuration `USE_MOCK_DATA`, la fonction utilise soit des données simulées (mock), 
 * soit effectue une requête HTTP pour récupérer les données des sessions moyennes de l'utilisateur.
 *
 * @async
 * @param {string} userId - L'ID de l'utilisateur pour lequel récupérer les données de sessions moyennes.
 * @returns {Promise<Object>} - Un objet contenant les sessions moyennes de l'utilisateur. 
 */
export const getUserAverageSessions = async (userId) => {
    try {
        const url = USE_MOCK_DATA 
            ? `../mocks/average-sessions/${userId}.json` 
            : `http://localhost:3000/user/${userId}/average-sessions`;
        
        const response = await fetch(url);
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données de sessions moyennes de l'utilisateur :", error);
        throw error; 
    }
};

/**
 * Formate les données des sessions moyennes d'un utilisateur.
 * Transforme le jour de la session en un nom de jour de la semaine (L, M, M, J, V, S, D).
 *
 * @param {Object} sessions - Les données brutes des sessions moyennes récupérées.
 * @returns {Object} - Les données des sessions moyennes formatées, avec le jour transformé en lettre.
 */
export const formatAverageSessionsData = (sessions) => {
    const daysMap = ["L", "M", "M", "J", "V", "S", "D"];
    const formattedSessions = new Array(7).fill(null).map((_, index) => ({
      day: daysMap[index],
      sessionLength: 0,
    }));
  
    sessions.forEach((session) => {
      formattedSessions[session.day - 1] = {
        day: daysMap[session.day - 1],
        sessionLength: session.sessionLength,
      };
    });
  
    return formattedSessions;
};