import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from "./userService";

export const fetchAllUserData = async (id) => {
  try {
    const [userData, activityResponse, averageSessionsResponse, performanceResponse] = await Promise.all([
      getUserData(id),
      getUserActivity(id),
      getUserAverageSessions(id),
      getUserPerformance(id),
    ]);

    return {
      firstName: userData.firstName,
      nutritionData: userData.nutritionData,
      todayScore: userData.todayScore,
      activityData: activityResponse.data.sessions,
      averageSessionData: averageSessionsResponse.sessions,
      performanceData: performanceResponse.performanceData,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données utilisateur", error);
    throw error;
  }
};
