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