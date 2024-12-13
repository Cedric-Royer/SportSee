import { USE_MOCK_DATA } from '../config';

export const getUserActivity = async (userId) => {
  try {
    const url = USE_MOCK_DATA ? `../mocks/activity/${userId}.json` : `http://localhost:4000/user/${userId}/activity`;
    const response = await fetch(url);
      
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

      return formatUserActivityData(data);

  } catch (error) {
      console.error("Erreur de connexion au serveur :", error);
      return { sessions: [] }; 
  }
};

const formatUserActivityData = (data) => {
  const formattedSessions = data.data.sessions.map((session) => {
      const date = new Date(session.day);
      const day = date.getDate();
      return {
          day: day,
          kilogram: session.kilogram,
          calories: session.calories,
      };
  });

  return { ...data, sessions: formattedSessions };
};
