export const formatUserData = (data) => {
  return {
    firstName: data.data.userInfos.firstName || '',
    nutritionData: {
      calorieCount: data.data.keyData?.calorieCount || 0,
      proteinCount: data.data.keyData?.proteinCount || 0,
      carbohydrateCount: data.data.keyData?.carbohydrateCount || 0,
      lipidCount: data.data.keyData?.lipidCount || 0,
    },
    todayScore: data.data.todayScore || 0
  };
};

export const getUserData = async (userId) => {
  try {
    const response = await fetch(`http://localhost:4000/user/${userId}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données de l'utilisateur");
    }
    const data = await response.json();
    
    return formatUserData(data);
  } catch (error) {
    console.error("Erreur de connexion au serveur :", error);
    throw error;
  }
};

export const getUserActivity = async (userId) => {
  try {
    const response = await fetch(`http://localhost:4000/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données d'activité de l'utilisateur");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur de connexion au serveur :", error);
    throw error;
  }
};

export const getUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`http://localhost:4000/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données de sessions moyennes de l'utilisateur");
    }
    const data = await response.json();

    const daysMap = ["L", "M", "M", "J", "V", "S", "D"];
    const formattedSessions = data.data.sessions.map((session) => ({
      ...session,
      day: daysMap[session.day - 1],
    }));

    return { ...data, sessions: formattedSessions };
  } catch (error) {
    console.error("Erreur de connexion au serveur :", error);
    throw error;
  }
};

export const getUserPerformance = async (userId) => {
  try {
    const response = await fetch(`http://localhost:4000/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données de performance de l'utilisateur");
    }
    const data = await response.json();

    return {
      userId: data.data.userId,
      kind: data.data.kind,
      performanceData: data.data.data 
    };
  } catch (error) {
    console.error("Erreur de connexion au serveur :", error);
    throw error;
  }
};


