import React, { useEffect, useState } from "react";  
import { useParams } from "react-router-dom"; 
import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from "../services/userService";
import HelloMessage from "./HelloMessage";
import NutritionData from "./NutritionData";
import DailyActivityChart from "./DailyActivityChart";  
import AverageSessionChart from "./AverageSessionChart";
import PerformanceRadarChart from "./PerformanceRadarChart";
import AverageScoreChart from "./AverageScoreChart";
import Layout from "./Layout";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [nutritionData, setNutritionData] = useState({
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  });
  const [todayScore, setTodayScore] = useState("");
  const [activityData, setActivityData] = useState([]);
  const [averageSessionData, setAverageSessionData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData(id);
        setFirstName(userData.firstName);
        setNutritionData(userData.nutritionData);
        setTodayScore(userData.todayScore);
        console.log(userData.todayScore)
        
        const activityResponse = await getUserActivity(id);
        setActivityData(activityResponse.data.sessions);
        
        const averageSessionsResponse = await getUserAverageSessions(id);
        setAverageSessionData(averageSessionsResponse.sessions);

        const performanceResponse = await getUserPerformance(id);
        setPerformanceData(performanceResponse.performanceData);

      } catch (error) {
        console.error("Erreur lors de la récupération des données de l'utilisateur", error);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <Layout>
    <div>
      <HelloMessage firstName={firstName} />
      <div className="dashboard">
        <div className="dashboard__main">        
          <DailyActivityChart activityData={activityData} />
          <div className="stats-container ">
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
