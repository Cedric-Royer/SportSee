import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import '../styles/AverageSessionChart.scss';

const AverageSessionChart = ({ sessionData }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <span className="tooltip__text">{`${payload[0].value}min`}</span>
        </div>
      );
    }
    return null;
  };

  const CustomCursor = ({ points, width, height }) => {
    if (!points) return null;
    const x = points[0].x; 

    return (
      <rect
        x={x} 
        y={0}
        width={width + 40} 
        height={height + 130}
        fill="rgba(0, 0, 0, 0.2)" 
      />
    );
  };

  return (
    <div className="average-session-chart">
      <span className="average-session-title">Durée moyenne des sessions</span>
      <ResponsiveContainer width="100%" height={263}>
        <LineChart data={sessionData} margin={{ left: 40, right: 40, top: 75, bottom: 20 }}>
          <XAxis
            dataKey="day" 
            tickLine={false}
            axisLine={false}  
            tick={{ 
              fontSize: 12, 
              fontWeight: 500, 
              fontFamily: "Roboto", 
              lineHeight: 24, 
              fill: "rgba(255, 255, 255, 0.6)"
            }}
            dy={20}
          />
          <YAxis 
            domain={['dataMin', 'dataMax+3']}
            hide={true} 
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line 
            type="monotone" 
            dataKey="sessionLength" 
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={3}
            dot={false} 
            activeDot={{ r: 5, fill: "#FFFFFF", stroke: "#FFFFFF44", strokeWidth: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionChart;
