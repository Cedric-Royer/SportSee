import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import './PerformanceRadarChart.scss';

const PerformanceRadarChart = ({ performanceData }) => {
  return (
    <div className="performance-radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={75} data={performanceData}>
          <PolarGrid radialLines={false} stroke="#FFFFFF" />
          <PolarAngleAxis
            dataKey="kindName"
            tick={{
              fill: '#FFFFFF',
              fontSize: 12,
              fontWeight: 500,
              fontFamily: 'Roboto',
            }}
          />
          <Radar name="Performance" dataKey="value" fill="#FF0101B2" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceRadarChart;
