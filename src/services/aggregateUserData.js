import { getUserAverageSessions } from "./getUserAverageSessions";
import { getUserPerformance } from "./getUserPerformance";
import { getUserData } from "./getUserData";
import { getUserActivity } from "./getUserActivity";

/**
 * Agrège toutes les données utilisateur nécessaires en effectuant des appels API ou en utilisant des données simulées.
 * La fonction attend que toutes les données soient récupérées simultanément via `Promise.all` et retourne un objet 
 * contenant toutes les informations formatées sur l'utilisateur.
 *
 * @async
 * @param {string} id - L'ID de l'utilisateur pour lequel récupérer et agréger les données.
 * @returns {Promise<Object>} - Un objet contenant les données agrégées de l'utilisateur, incluant son prénom, ses données nutritionnelles, son score du jour, 
 * ses données d'activité, de sessions moyennes et de performance.
 * 
 * @throws {Error} - Si une erreur survient lors de la récupération des données, elle est lancée et propagée.
 */
export const aggregateUserData = async (id) => {
  try {
    // Attente des réponses des quatre appels API
    const [userData, activityResponse, averageSessionsResponse, performanceResponse] = await Promise.all([
      getUserData(id),
      getUserActivity(id),
      getUserAverageSessions(id),
      getUserPerformance(id),
    ]);

    // Retour des données agrégées
    return {
      firstName: userData.firstName,
      nutritionData: userData.nutritionData,
      todayScore: userData.todayScore,
      activityData: activityResponse.data.sessions,
      averageSessionData: averageSessionsResponse.sessions,
      performanceData: performanceResponse.performanceData,
    };
  } catch (error) {
    // Si une erreur survient, elle est loggée et propagée
    console.error("Erreur lors de la récupération des données utilisateur", error);
    throw error;
  }
};
