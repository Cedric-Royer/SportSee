const CustomLegend = (props) => {
  const { payload } = props;

  return (
    <ul style={{ 
        listStyleType: 'none', 
        padding: 0, 
        margin: '24px 10px 40px 0' , 
        display: 'flex',
        justifyContent: 'flex-end', 
        gap: '10px',
      }}>
      {payload.map((entry, index) => (
        <li 
          key={`item-${index}`} 
          style={{ 
            color: '#74798C',
            fontFamily: 'Roboto', 
            fontSize: '14px', 
            fontWeight: 500, 
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span style={{ 
            display: 'inline-block', 
            width: '8px', 
            height: '8px', 
            backgroundColor: entry.color, 
            borderRadius: '50%', 
            marginRight: '5px', 
          }} />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};
  
  export default CustomLegend;
  