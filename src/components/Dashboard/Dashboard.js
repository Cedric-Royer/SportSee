import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllUserData } from "../../services/fetchUserData";
import HelloMessage from "../HelloMessage/HelloMessage";
import NutritionData from "../NutritionData/NutritionData";
import { 
  DailyActivityChart, 
  AverageSessionChart, 
  PerformanceRadarChart, 
  AverageScoreChart 
} from '../Charts';
import Layout from "../Layout/Layout";
import "./Dashboard.scss";

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
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  const { firstName, nutritionData, todayScore, activityData, averageSessionData, performanceData } = userData;
  return (
    <Layout>
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
    </Layout>
  );
};

export default Dashboard;
