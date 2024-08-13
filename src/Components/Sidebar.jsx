import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const User ={
    name: 'Patricio',
    photoUrl: 'data:image/jpeg;base64,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',
    age: 18,
    gender: 'Male',
    email: 'william.r.king@my-own-personal-domain.com',
    phone: '1234567890',
    address: 'blbd central 13-2',
    city: 'Tlajomulco de zuñiga',
    state: 'Jalisco',
    country: 'Mexico'
}

const Sidebar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Vim DataMetrics</span>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/reports" className="nav-link link-dark">
                        Reports
                    </Link>
                </li>
                <li>
                    <Link to="/integrations" className="nav-link link-dark">
                        Integrations
                    </Link>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={User.photoUrl} alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>{User.name}</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><Link to='/settings' className="dropdown-item">Settings</Link></li>
                    <li><Link to='/profile' className="dropdown-item">Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
