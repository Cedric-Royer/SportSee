import React from "react";
import PropTypes from 'prop-types'; 
import "./NutritionData.scss";

import calorieIcon from "../../assets/nutrition-icons/calories.svg";
import proteinIcon from "../../assets/nutrition-icons/proteines.svg";
import carbIcon from "../../assets/nutrition-icons/glucides.svg";
import lipidIcon from "../../assets/nutrition-icons/lipides.svg";

/**
 * Composant affichant les données nutritionnelles de l'utilisateur.
 * Affiche les quantités de calories, protéines, glucides et lipides sous forme d'icônes.
 *
 * @function
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {number} props.calorieCount - Le nombre de calories consommées. (en Kilo calories)
 * @param {number} props.proteinCount - Le nombre de protéines consommées (en grammes).
 * @param {number} props.carbohydrateCount - Le nombre de glucides consommés (en grammes).
 * @param {number} props.lipidCount - Le nombre de lipides consommés (en grammes).
 *
 * @returns {React.Element} Le rendu du composant NutritionData.
 */
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

NutritionData.propTypes = {
  calorieCount: PropTypes.number.isRequired,
  proteinCount: PropTypes.number.isRequired,
  carbohydrateCount: PropTypes.number.isRequired,
  lipidCount: PropTypes.number.isRequired
};

export default NutritionData;
