import { getUserAverageSessions, formatAverageSessionsData } from "./getUserAverageSessions";
import { getUserPerformance } from "./getUserPerformance";
import { getUserData, formatUserData } from "./getUserData";
import { getUserActivity, formatUserActivityData  } from "./getUserActivity";

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

    const allRejected = responses.every((res) => res.status === "rejected");
    if (allRejected) {
      throw new Error("Toutes les requêtes ont échoué.");
    }

    const userResponse = responses[0].value;
    const activityResponse =  responses[1].value
    const averageSessionsResponse = responses[2].value
    const performanceResponse = responses[3].value

    const userData = responses[0].status === "fulfilled" 
    ? formatUserData(userResponse) 
    : formatUserData({
        data: {
          userInfos: { firstName: "" },
          keyData: {
            calorieCount: 0,
            proteinCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0,
          },
          todayScore: 0,
        },
      });

    const activityData = responses[1].status === "fulfilled"
      ? formatUserActivityData(activityResponse)?.sessions
      : [];

    const averageSessionData = responses[2].status === "fulfilled"
      ? formatAverageSessionsData(averageSessionsResponse?.data?.sessions)
      : formatAverageSessionsData([]);
    
    const performanceData = performanceResponse
      ? performanceResponse.performanceData
      : [
          { kindName: "Cardio", value: 0 },
          { kindName: "Energie", value: 0 },
          { kindName: "Endurance", value: 0 },
          { kindName: "Force", value: 0 },
          { kindName: "Vitesse", value: 0 },
          { kindName: "Intensité", value: 0 },
      ];

    return {
      ...userData,
      activityData,
      averageSessionData,
      performanceData,
    };
  } catch (error) {
    console.error("Erreur inattendue lors de la récupération des données utilisateur", error);
    throw error; 
  }
};

