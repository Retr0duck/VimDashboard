import React from 'react';
import { User } from './Components/Sidebar';
import Metrics from './Sections/Metrics';

const Dashboard = () => {
    return (
        <div className="flex-grow-1 p-3">
        <h2>¡Welcome back {User.name}!</h2>
        <p>Here you can manage your data and settings.</p>
         <Metrics/>
    </div>
    );
};

export default Dashboard;
