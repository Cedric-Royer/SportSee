import { USE_MOCK_DATA } from '../config';

/**
 * Récupère les données d'un utilisateur.
 * En fonction de la configuration `USE_MOCK_DATA`, la fonction utilise soit des données simulées (mock), 
 * soit fait une requête HTTP pour récupérer les données d'un utilisateur.
 *
 * @async
 * @param {string} userId - L'ID de l'utilisateur pour lequel récupérer les données.
 * @returns {Promise<Object>} - Un objet contenant les informations de l'utilisateur formatées. 
 * Si une erreur survient, elle est propagée.
 *
 * @throws {Error} - Si une erreur survient lors de la récupération des données utilisateur, une exception est lancée.
 */
export const getUserData = async (userId) => {
    try {
        const url = USE_MOCK_DATA 
            ? `../mocks/user/${userId}.json` 
            : `http://localhost:3000/user/${userId}`;
        
        const response = await fetch(url);
                
        const data = await response.json();
        return formatUserData(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des données de l'utilisateur", error);
        throw error;
    }
};

/**
 * Formate les données utilisateur récupérées pour les rendre plus accessibles.
 * Extrait les informations de base telles que le prénom, les données nutritionnelles, 
 * et le score du jour.
 *
 * @param {Object} data - Les données brutes de l'utilisateur récupérées.
 * @returns {Object} - Les données formatées, incluant le prénom, les données nutritionnelles, 
 * et le score d'activité de l'utilisateur.
 */
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
