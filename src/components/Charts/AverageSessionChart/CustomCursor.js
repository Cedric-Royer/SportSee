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
  
  export default CustomCursor;
  