import { USE_MOCK_DATA } from '../config';

export const getUserPerformance = async (userId) => {
  try {
      const url = USE_MOCK_DATA ? `../mocks/performance/${userId}.json` : `http://localhost:4000/user/${userId}/performance`;
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données de performance de l'utilisateur");
      }
      const data = await response.json();

      return formatUserPerformanceData(data.data);
  } catch (error) {
      console.error("Erreur de connexion au serveur :", error);
      throw error;
  }
};

const formatUserPerformanceData = (data) => {
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
