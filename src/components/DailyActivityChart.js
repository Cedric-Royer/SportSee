import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import '../styles/DailyActivityChart.scss';

const DailyActivityChart = ({ activityData }) => {
  if (!activityData || activityData.length === 0) {
    return <div>Aucune donnée d'activité disponible.</div>; 
  }

  const formattedData = activityData.map(session => {
    const date = new Date(session.day); 
    const dayNumber = date.getDate(); 

    return {
      day: dayNumber, 
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });

  const renderLegend = (props) => {
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

  return (
    <div className='daily-activity-chart'>
      <span className='daily-activity-title'>Activité quotidienne</span>
      <ResponsiveContainer width="100%" height="95%">
        <BarChart  data={formattedData} margin={{ left: 43, right: 20, }} >
            <CartesianGrid strokeDasharray='1 3'  horizontal={true} vertical={false} />
            <XAxis 
                dataKey='day'
                tickLine={false} 
                scale="point"
                padding={{ left: 10, right: 10, }}
                dy={10}
            />
            <YAxis
                yAxisId='right' 
                orientation='right' 
                dataKey='kilogram' 
                domain={['dataMin - 1', 'dataMax + 1']} 
                tickCount={4} 
                axisLine={false}  
                tickLine={false} 
                dx={40}
            />
            <YAxis 
                yAxisId='left' 
                dataKey='calories' 
                hide={true} domain={['dataMin - 50', 'dataMax + 50']}
            />
            <Tooltip />
            <Legend content={renderLegend} verticalAlign='top' />

            <Bar
            yAxisId='right'
            dataKey='kilogram'
            fill='#282D30'
            name='Poids (kg)'
            radius={[3, 3, 0, 0]} 
            barSize={7} 
            />
            <Bar
            yAxisId='left'
            dataKey='calories'
            fill='#E60000'
            name='Calories brûlées (kCal)'
            radius={[3, 3, 0, 0]} 
            barSize={7} 
            paddingRight= {7}
            />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivityChart;
