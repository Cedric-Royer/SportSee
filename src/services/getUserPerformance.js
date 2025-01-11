import { USE_MOCK_DATA } from '../config';

/**
 * Récupère les données de sessions moyennes d'un utilisateur.
 * En fonction de la configuration `USE_MOCK_DATA`, la fonction utilise soit des données simulées (mock), 
 * soit effectue une requête HTTP pour récupérer les données des sessions moyennes de l'utilisateur.
 *
 * @async
 * @param {string} userId - L'ID de l'utilisateur pour lequel récupérer les données de performance.
 * @returns {Promise<Object>} - Un objet contenant les données de performance de l'utilisateur formatées.
 */
export const getUserPerformance = async (userId) => {
    try {
        const url = USE_MOCK_DATA 
            ? `../mocks/performance/${userId}.json` 
            : `http://localhost:3000/user/${userId}/performance`;
        const response = await fetch(url);

        const data = await response.json();

        return formatUserPerformanceData(data.data);
    } catch (error) {
        console.error("Erreur de connexion au serveur :", error);
        throw error; 
    }
};

/**
 * Formate les données de performance de l'utilisateur récupérées.
 * La fonction associe un nom à chaque type d'activité basé sur un code, puis formate les résultats
 * de chaque activité dans un tableau.
 *
 * @param {Object} data - Les données de performance brutes récupérées.
 * @returns {Object} - Un objet contenant l'ID de l'utilisateur, le type de données de performance et les résultats formatés.
 */
export const formatUserPerformanceData = (data) => {
  const kindMap = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
  };

  const formattedPerformance = [6, 5, 4, 3, 2, 1].map((kind) => {
      const activity = data.data.find((item) => item.kind === kind);
      return {
          value: activity ? activity.value : 0,
          kindName: kindMap[kind],
      };
  });

  return {
      userId: data.userId,
      kind: data.kind,
      performanceData: formattedPerformance,
  };
};
