import { getUserAverageSessions } from "./getUserAverageSessions";
import { getUserPerformance } from "./getUserPerformance";
import { getUserData } from "./getUserData";
import { getUserActivity } from "./getUserActivity";

/**
 * Agrège toutes les données utilisateur nécessaires en effectuant des appels API ou en utilisant des données simulées.
 * La fonction utilise `Promise.allSettled` pour gérer indépendamment les erreurs de chaque appel API.
 * En cas d'échec d'un appel, des valeurs par défaut sont utilisées pour éviter l'échec global.
 *
 * @async
 * @param {string} id - L'ID de l'utilisateur pour lequel récupérer et agréger les données.
 * @returns {Promise<Object>} - Un objet contenant les données agrégées de l'utilisateur, incluant :
 *   - `firstName` : Prénom de l'utilisateur (string).
 *   - `nutritionData` : Données nutritionnelles de l'utilisateur (object).
 *   - `todayScore` : Score du jour de l'utilisateur (number).
 *   - `activityData` : Données d'activité quotidienne (array).
 *   - `averageSessionData` : Données des sessions moyennes de l'utilisateur (array).
 *   - `performanceData` : Données de performance de l'utilisateur (array).
 *
 * @throws {Error} - Si une erreur inattendue survient lors de la récupération des données utilisateur (généralement lors de l'appel à `Promise.allSettled`).
 */
export const aggregateUserData = async (id) => {
  try {
    const responses = await Promise.allSettled([
      getUserData(id),
      getUserActivity(id),
      getUserAverageSessions(id),
      getUserPerformance(id),
    ]);

    const userData = responses[0].value;
    const activityResponse = responses[1].status === "fulfilled" ? responses[1].value : { data: { sessions: [] } };
    const averageSessionsResponse = responses[2].status === "fulfilled" ? responses[2].value : { sessions: [] };
    const performanceResponse = responses[3].status === "fulfilled" ? responses[3].value : { performanceData: [] };

    const activityData = activityResponse?.data?.sessions || [];
    const averageSessionData = averageSessionsResponse?.sessions || [];
    const performanceData = performanceResponse?.performanceData || [];

    return {
      firstName: userData.firstName,
      nutritionData: userData.nutritionData,
      todayScore: userData.todayScore,
      activityData,
      averageSessionData,
      performanceData,
    };
  } catch (error) {
    console.error("Erreur inattendue lors de la récupération des données utilisateur", error);
    throw error; 
  }
};

