import React from "react"; 
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";
import "../styles/AverageScoreChart.scss";

const AverageScoreChart = ({ todayScore }) => {
  const data = [
    { name: "Score", value: todayScore * 100, fill: "#FF0000" },
  ];

  const legendStyle = {
    position: "absolute", // Assure que la légende reste centrée par rapport au conteneur
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontFamily: "Roboto",
  };

  return (
    <div className="average-score-chart">
      <span className="average-score-title">Score</span>
      <div className="radial-container"> {/* Nouveau conteneur pour limiter la hauteur */}
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="80%"
            outerRadius="100%"
            barSize={10}
            data={data}
            startAngle={90} 
            endAngle={90 + 360 * todayScore} 
          >
            <RadialBar
              minAngle={15}
              clockWise
              dataKey="value"
              cornerRadius={10}
              background={{ fill: "#F00000" }}
            />
            <Legend
              content={() => (
                <div style={legendStyle}>
                  <span style={{color: "#282D30", fontSize: "26px", fontWeight: "700" }}>
                    {`${(todayScore * 100).toFixed(0)}%`}
                  </span>
                  <p style={{ color: "#74798C", fontSize: "16px", margin: 0 }}>
                    de votre objectif
                  </p>
                </div>
              )}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AverageScoreChart;
