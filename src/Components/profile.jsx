import React, { useState } from 'react';
import { User } from '../Components/Sidebar';

// Datos de ejemplo para el perfil

const ProfileSection = () => {
  const [formData, setFormData] = useState(User);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar los datos del formulario al servidor
    console.log('Perfil actualizado:', formData);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa' }}>
      <h2 style={{ marginBottom: '20px' }}>Perfil</h2>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: '1', maxWidth: '150px' }}>
          <img 
            src={formData.photoUrl} 
            alt="Profile"
            style={{ 
              width: '100%', 
              borderRadius: '50%', 
              border: '3px solid #007bff' 
            }}
          />
        </div>

        <div style={{ flex: '2' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <label>
              Nombre:
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  borderRadius: '4px', 
                  border: '1px solid #ccc' 
                }} 
              />
            </label>
            <label>
              Correo Electrónico:
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  borderRadius: '4px', 
                  border: '1px solid #ccc' 
                }} 
              />
            </label>
            <label>
              Teléfono:
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  borderRadius: '4px', 
                  border: '1px solid #ccc' 
                }} 
              />
            </label>
            <label>
              Dirección:
              <textarea 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                rows="4" 
                style={{ 
                  width: '100%', 
                  padding: '10px', 
                  borderRadius: '4px', 
                  border: '1px solid #ccc' 
                }} 
              />
            </label>
            <button 
              type="submit" 
              style={{ 
                backgroundColor: '#007bff', 
                color: '#ffffff', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '4px', 
                cursor: 'pointer', 
                fontSize: '16px' 
              }}
            >
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
