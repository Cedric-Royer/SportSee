import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllUserData } from "../../services/aggregateUserData";
import HelloMessage from "../HelloMessage/HelloMessage";
import NutritionData from "../NutritionData/NutritionData";
import { 
  DailyActivityChart, 
  AverageSessionChart, 
  PerformanceRadarChart, 
  AverageScoreChart 
} from '../Charts';
import "./Dashboard.scss";

/**
 * Dashboard principal de l'utilisateur affichant ses données d'activité, de nutrition, et de performance.
 *
 * @returns {JSX.Element} Composant Dashboard.
 */
const Dashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    firstName: "",
    nutritionData: {
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
    },
    todayScore: 0,
    activityData: [],
    averageSessionData: [],
    performanceData: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Récupère et met à jour les données utilisateur depuis l'API.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchAllUserData(id);
        setUserData(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p></p>;
  }

  if (error) {
    return <p>Erreur : utilisateur inconnu</p>;
  }

  const { firstName, nutritionData, todayScore, activityData, averageSessionData, performanceData } = userData;
  return (
      <div>
        <HelloMessage firstName={firstName} />
        <div className="dashboard">
          <div className="dashboard__main">
            <DailyActivityChart activityData={activityData} />
            <div className="stats-container">
              <AverageSessionChart sessionData={averageSessionData} />
              <PerformanceRadarChart performanceData={performanceData} />
              <AverageScoreChart todayScore={todayScore} />
            </div>
          </div>
          <NutritionData 
            calorieCount={nutritionData.calorieCount} 
            proteinCount={nutritionData.proteinCount} 
            carbohydrateCount={nutritionData.carbohydrateCount} 
            lipidCount={nutritionData.lipidCount} 
          />
        </div>
      </div>
  );
};

export default Dashboard;
