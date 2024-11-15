import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../styles/PerformanceRadarChart.scss';

const PerformanceRadarChart = ({ performanceData }) => {
  const kindMap = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité"
  };

  const orderedData = [6, 5, 4, 3, 2, 1].map(kind => {
    const activity = performanceData.find(item => item.kind === kind);
    return activity ? { value: activity.value, kindName: kindMap[kind] } : { value: 0, kindName: kindMap[kind] };
  });

  return (
    <div className="performance-radar-chart">
      <ResponsiveContainer width="100%" height="100%" margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <RadarChart outerRadius={75} data={orderedData}>
          <PolarGrid radialLines={false} stroke="#FFFFFF"  /> 
          <PolarAngleAxis 
            dataKey="kindName" 
            tick={{ fill: '#FFFFFF', fontSize: 12, fontWeight: 500, fontFamily: 'Roboto'}} 
         />
          <Radar 
            name="Performance" 
            dataKey="value" 
            fill="#FF0101B2" 
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceRadarChart;
