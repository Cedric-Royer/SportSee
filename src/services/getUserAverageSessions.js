import { USE_MOCK_DATA } from '../config';

/**
 * Récupère les données de sessions moyennes d'un utilisateur.
 * En fonction de la configuration `USE_MOCK_DATA`, la fonction utilise soit des données simulées (mock), 
 * soit effectue une requête HTTP pour récupérer les données des sessions moyennes de l'utilisateur.
 *
 * @async
 * @param {string} userId - L'ID de l'utilisateur pour lequel récupérer les données de sessions moyennes.
 * @returns {Promise<Object>} - Un objet contenant les sessions moyennes de l'utilisateur. 
 * Si une erreur survient, elle est propagée.
 *
 * @throws {Error} - Si une erreur survient lors de la récupération des données des sessions moyennes, une exception est lancée.
 */
export const getUserAverageSessions = async (userId) => {
    try {
        const url = USE_MOCK_DATA 
            ? `../mocks/average-sessions/${userId}.json` 
            : `http://localhost:4000/user/${userId}/average-sessions`;
        
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

/**
 * Formate les données des sessions moyennes d'un utilisateur.
 * Transforme le jour de la session en un nom de jour de la semaine (L, M, M, J, V, S, D).
 *
 * @param {Object} data - Les données brutes des sessions moyennes récupérées.
 * @returns {Object} - Les données des sessions moyennes formatées, avec le jour transformé en lettre.
 */
const formatAverageSessionsData = (data) => {
    const daysMap = ["L", "M", "M", "J", "V", "S", "D"];
    const formattedSessions = data.data.sessions.map((session) => ({
        ...session,
        day: daysMap[session.day - 1], 
    }));

    return { ...data, sessions: formattedSessions };
};