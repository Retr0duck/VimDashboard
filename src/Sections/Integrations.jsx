import React from 'react';

// Datos de ejemplo para las integraciones
const integrations = [
  { name: 'Slack', description: 'Conéctate con Slack para recibir notificaciones y actualizaciones.' },
  { name: 'Google Drive', description: 'Integra con Google Drive para almacenar y compartir archivos.' },
  { name: 'Zapier', description: 'Automatiza flujos de trabajo conectando diferentes aplicaciones.' }
];

const IntegrationsSection = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa' }}>
      <h2 style={{ marginBottom: '20px' }}>Integraciones</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {integrations.map((integration, index) => (
          <div key={index} style={{ 
            backgroundColor: '#ffffff', 
            padding: '20px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}>
            <h3 style={{ marginBottom: '10px' }}>{integration.name}</h3>
            <p style={{ color: '#555' }}>{integration.description}</p>
            <button style={{ 
              backgroundColor: '#007bff', 
              color: '#ffffff', 
              border: 'none', 
              padding: '10px 20px', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontSize: '14px'
            }}>
              Conectar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationsSection;
