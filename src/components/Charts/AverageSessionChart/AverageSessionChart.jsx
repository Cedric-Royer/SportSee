import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomCursor from "./CustomCursor";
import "./AverageSessionChart.scss";

/**
 * Composant affichant un graphique en ligne représentant la durée moyenne des sessions.
 *
 * @function
 * @param {Object} props - Les props du composant.
 * @param {Array} props.sessionData - Les données des sessions, un tableau d'objets contenant le jour et la durée des sessions.
 * @param {string} props.sessionData[].day - Le jour de la session (ex : "L", "M", "M", "J", "V", "S", "D").
 * @param {number} props.sessionData[].sessionLength - La durée moyenne de la session pour ce jour (en minutes).
 * @returns {JSX.Element} - Le rendu du composant AverageSessionChart.
 */
const AverageSessionChart = ({ sessionData }) => {
  return (
    <div className="average-session-chart">
      <span className="average-session-title">Durée moyenne des sessions</span>
      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          data={sessionData}
          margin={{ left: 40, right: 40, top: 75, bottom: 20 }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "Roboto",
              lineHeight: 24,
              fill: "rgba(255, 255, 255, 0.6)",
            }}
            dy={20}
          />
          <YAxis domain={["dataMin", "dataMax+3"]} hide={true} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#FFFFFF",
              stroke: "#FFFFFF44",
              strokeWidth: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageSessionChart.propTypes = {
  sessionData: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AverageSessionChart;
