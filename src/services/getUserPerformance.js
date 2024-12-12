export const getUserPerformance = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/user/${userId}/performance`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données de performance de l'utilisateur");
      }
      const data = await response.json();
  
      const formattedPerformance = formatPerformanceData(data.data.data); 
  
      return {
        userId: data.data.userId,
        kind: data.data.kind,
        performanceData: formattedPerformance,
      };
    } catch (error) {
      console.error("Erreur de connexion au serveur :", error);
      throw error;
    }
};

export const formatPerformanceData = (performanceData) => {
    const kindMap = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
    };

    return [6, 5, 4, 3, 2, 1].map((kind) => {
        const activity = performanceData.find((item) => item.kind === kind);
        return {
        value: activity ? activity.value : 0,
        kindName: kindMap[kind],
        };
    });
};