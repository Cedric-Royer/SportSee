import { USE_MOCK_DATA } from '../config';

export const getUserData = async (userId) => {
    try {
      if (USE_MOCK_DATA) {
        // Assurer la conversion de userId en nombre avec parseInt
        const userIdNumber = parseInt(userId, 10);  // Conversion explicite en nombre
        const mockUser = mockData.data.find(user => user.id === userIdNumber);
        
        if (!mockUser) {
          throw new Error("Utilisateur non trouvé dans les données mockées");
        }
        return formatUserData2(mockUser);
      } else {
        // Si USE_MOCK_DATA est false, appelle l'API réelle
        const response = await fetch(`http://localhost:4000/user/${userId}`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données de l'utilisateur");
        }
        const data = await response.json();
        return formatUserData(data);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données de l'utilisateur", error);
      throw error;
    }
  };

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

const formatUserData2 = (data) => {
    return {
        firstName: data.userInfos.firstName || '',
        nutritionData: {
            calorieCount: data.keyData?.calorieCount || 0,
            proteinCount: data.keyData?.proteinCount || 0,
            carbohydrateCount: data.keyData?.carbohydrateCount || 0,
            lipidCount: data.keyData?.lipidCount || 0,
        },
        todayScore: data.score || 0,
    };
};

// Données mockées
const mockData = {
    "data": [
      {
        "id": 18,
        "userInfos": {
          "firstName": "Arthur",
          "lastName": "Ratorez",
          "age": 34
        },
        "score": 0.3,
        "keyData": {
          "calorieCount": 2500,
          "proteinCount": 90,
          "carbohydrateCount": 150,
          "lipidCount": 120
        }
      },
      {
        "id": 19,
        "userInfos": {
          "firstName": "John",
          "lastName": "Doe",
          "age": 28
        },
        "score": 0.7,
        "keyData": {
          "calorieCount": 3000,
          "proteinCount": 110,
          "carbohydrateCount": 180,
          "lipidCount": 150
        }
      },
      {
        "id": 20,
        "userInfos": {
          "firstName": "Sarah",
          "lastName": "Smith",
          "age": 25
        },
        "score": 0.5,
        "keyData": {
          "calorieCount": 2200,
          "proteinCount": 80,
          "carbohydrateCount": 130,
          "lipidCount": 100
        }
      }
    ]
  };
