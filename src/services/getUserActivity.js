export const getUserActivity = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/user/${userId}/activity`);
      
      if (!response.ok) {
        if (response.status === 404) {
          console.warn("Aucune donnée d'activité trouvée pour cet utilisateur.");
          return { sessions: [] }; 
        } else {
          throw new Error("Erreur lors de la récupération des données d'activité de l'utilisateur");
        }
      }
  
      const data = await response.json();
  
      if (!data || !data.data || !data.data.sessions) {
        console.warn("Données d'activité manquantes.");
        return { sessions: [] }; 
      }
  
      const formattedSessions = data.data.sessions.map((session) => {
        const date = new Date(session.day);
        const day = date.getDate();
        session.day = day;
        return {
          day: day,
          kilogram: session.kilogram,
          calories: session.calories,
        };
      });
  
      return { ...data, sessions: formattedSessions };
  
    } catch (error) {
      console.error("Erreur de connexion au serveur :", error);
      return { sessions: [] }; 
    }
};