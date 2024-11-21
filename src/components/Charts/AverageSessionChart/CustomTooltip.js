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
  
  export default CustomTooltip;
  