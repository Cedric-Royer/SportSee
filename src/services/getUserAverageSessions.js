import { USE_MOCK_DATA } from '../config';

export const getUserAverageSessions = async (userId) => {
    try {
        const url = USE_MOCK_DATA ? `../mocks/average-sessions/${userId}.json` : `http://localhost:4000/user/${userId}/average-sessions`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données de sessions moyennes de l'utilisateur");
        }
        const data = await response.json();
        return formatAverageSessionsData(data);
    } catch (error) {
        console.error("Erreur de connexion au serveur :", error);
        throw error;
    }
};

const formatAverageSessionsData = (data) => {
    const daysMap = ["L", "M", "M", "J", "V", "S", "D"];
    const formattedSessions = data.data.sessions.map((session) => ({
        ...session,
        day: daysMap[session.day - 1], 
    }));

    return { ...data, sessions: formattedSessions };
};