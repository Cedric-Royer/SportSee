import React from "react";
import "../styles/NutritionData.scss";

import calorieIcon from "../assets/nutrition-icons/calories.svg";
import proteinIcon from "../assets/nutrition-icons/proteines.svg";
import carbIcon from "../assets/nutrition-icons/glucides.svg";
import lipidIcon from "../assets/nutrition-icons/lipides.svg";

const NutritionData = ({ calorieCount, proteinCount, carbohydrateCount, lipidCount }) => (
  <div className="nutrition-data">
    
    <div className="nutrition">
      <img src={calorieIcon} alt="Icône Calories" className="nutrition__icon" />
      <div className="nutrition__count-container">
        <span className="nutrition__count">{calorieCount/1000}kCal</span>
        <span className="nutrition__type">Calories</span>
      </div>
    </div>

    <div className="nutrition">
      <img src={proteinIcon} alt="Icône Protéines" className="nutrition__icon" />
      <div className="nutrition__count-container">
        <span className="nutrition__count">{proteinCount}g</span>
        <span className="nutrition__type">Protéines</span>
      </div>
    </div>

    <div className="nutrition">
      <img src={carbIcon} alt="Icône Glucides" className="nutrition__icon" />
      <div className="nutrition__count-container">
        <span className="nutrition__count">{carbohydrateCount}g</span>
        <span className="nutrition__type">Glucides</span>
      </div>
    </div>

    <div className="nutrition">
      <img src={lipidIcon} alt="Icône Lipides" className="nutrition__icon" />
      <div className="nutrition__count-container">
        <span className="nutrition__count">{lipidCount}g</span>
        <span className="nutrition__type">Lipides</span>
      </div>
    </div>
  
  </div>
);

export default NutritionData;
