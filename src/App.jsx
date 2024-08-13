import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Dashboard from './Dashboard';
import Reports from './Sections/Reports';
import Integrations from './Sections/Integrations';
import Sidebar from './Components/Sidebar';
import SettingsSection from './Components/settings';
import ProfileSection from './Components/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div>
        <Router>
        <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path='/settings' element={<SettingsSection/>} />
                <Route path='/profile' element={<ProfileSection/>} />
            </Routes>
            </div>
        </div>
        </Router>
</div>
     
  )
}

export default App
