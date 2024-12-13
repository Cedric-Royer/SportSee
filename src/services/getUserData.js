import { USE_MOCK_DATA } from '../config';

export const getUserData = async (userId) => {
    try {
      const url = USE_MOCK_DATA ? `../mocks/user/${userId}.json` : `http://localhost:4000/user/${userId}`
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données de l'utilisateur");
      }
      const data = await response.json();
      return formatUserData(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données de l'utilisateur", error);
      throw error;
    }
  };

const formatUserData = (data) => {
    return {
        firstName: data.data.userInfos.firstName || '',
        nutritionData: {
        calorieCount: data.data.keyData?.calorieCount || 0,
        proteinCount: data.data.keyData?.proteinCount || 0,
        carbohydrateCount: data.data.keyData?.carbohydrateCount || 0,
        lipidCount: data.data.keyData?.lipidCount || 0,
        },
        todayScore: data.data.todayScore || data.data.score || 0,
    };
};