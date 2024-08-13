import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', ventas: 4000, ingresos: 2400, clientes: 240 },
  { name: 'Feb', ventas: 3000, ingresos: 1398, clientes: 221 },
  { name: 'Mar', ventas: 2000, ingresos: 9800, clientes: 229 },
  { name: 'Apr', ventas: 2780, ingresos: 3908, clientes: 200 },
  { name: 'May', ventas: 1890, ingresos: 4800, clientes: 218 },
  { name: 'Jun', ventas: 2390, ingresos: 3800, clientes: 250 },
  { name: 'Jul', ventas: 3490, ingresos: 4300, clientes: 210 },
];

const Metrics = () => {
  const [selectedMetric, setSelectedMetric] = useState('ventas');

  const handleMetricChange = (event) => {
    setSelectedMetric(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="metric">Selecciona una métrica: </label>
        <select id="metric" value={selectedMetric} onChange={handleMetricChange}>
          <option value="ventas">Ventas Mensuales</option>
          <option value="ingresos">Ingresos Mensuales</option>
          <option value="clientes">Nuevos Clientes</option>
        </select>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px', 
        padding: '20px',
        backgroundColor: '#f5f7fa',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Gráfico de Línea */}
        <div style={{ 
          height: '400px', 
          width: '100%', 
          backgroundColor: '#ffffff', 
          padding: '30px', 
          borderRadius: '12px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
          maxHeight: '500px'
        }}>
          <h3 style={{ 
            color: '#333', 
            fontFamily: 'Arial, sans-serif', 
            fontSize: '20px', 
            marginBottom: '20px' 
          }}>
            {selectedMetric === 'ventas' ? 'Ventas Mensuales' : selectedMetric === 'ingresos' ? 'Ingresos Mensuales' : 'Nuevos Clientes'}
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#e0e0e0" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fontFamily: 'Arial, sans-serif' }} />
              <YAxis tick={{ fontSize: 12, fontFamily: 'Arial, sans-serif' }} />
              <Tooltip contentStyle={{ backgroundColor: '#f0f0f0', borderRadius: '10px', fontFamily: 'Arial, sans-serif' }} />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey={selectedMetric} stroke="#8884d8" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
