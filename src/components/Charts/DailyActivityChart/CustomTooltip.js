const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip__daily-activity">
          <span>{`${payload[0].value}Kg`}</span>
          <span>{`${payload[1].value}Kcal`}</span>
        </div>
      );
    }
    return null;
  };
  
  export default CustomTooltip;
  