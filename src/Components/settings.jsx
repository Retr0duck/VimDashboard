import React, { useState } from 'react';

const settingsOptions = [
  { id: 1, name: 'Perfil', description: 'Actualizar la información de tu perfil.' },
  { id: 2, name: 'Notificaciones', description: 'Gestionar tus preferencias de notificación.' },
  { id: 3, name: 'Privacidad', description: 'Configura las opciones de privacidad de tu cuenta.' },
  { id: 4, name: 'Seguridad', description: 'Cambiar la contraseña y revisar la seguridad de la cuenta.' },
  { id: 5, name: 'Idioma', description: 'Selecciona el idioma para la interfaz de usuario.' },
];

const SettingsSection = () => {
  const [selectedSetting, setSelectedSetting] = useState(null);

  const handleSettingClick = (id) => {
    setSelectedSetting(id);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa' }}>
      <h2 style={{ marginBottom: '20px' }}>Configuración</h2>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {settingsOptions.map(option => (
          <div 
            key={option.id} 
            style={{ 
              flex: '1 1 calc(33.333% - 20px)', 
              backgroundColor: '#ffffff', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              transform: selectedSetting === option.id ? 'scale(1.05)' : 'scale(1)'
            }}
            onClick={() => handleSettingClick(option.id)}
          >
            <h3 style={{ marginBottom: '10px' }}>{option.name}</h3>
            <p style={{ color: '#555' }}>{option.description}</p>
          </div>
        ))}
      </div>

      {/* Contenido de Configuración Detallada */}
      {selectedSetting && (
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>Configuración Detallada</h3>
          <p>Contenido para la configuración seleccionada (ID: {selectedSetting}).</p>
          {/* Aquí puedes agregar más detalles y formularios específicos para cada opción */}
        </div>
      )}
    </div>
  );
};

export default SettingsSection;
