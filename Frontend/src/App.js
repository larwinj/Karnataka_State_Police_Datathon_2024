import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Sidebar from './Components/dashboard/Sidebar';
import './App.css'
import Login from './Components/Login/Login';
import Admin from './Components/Login/Admin';
import Analytics from './Components/dashboard/Analytics';
import StationMainApp from './StationPageK/StationMainApp';
// import Analytics from './Components/dashboard/Analytics';

import Dashboard from './StationPageK/views/dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} /> 
        <Route path="/admin" element={<Admin />} /> 
        <Route path="/Analytics" element={<Sidebar />} />
        {/* <Route path="/Analytics" element={<Dashboard />} /> */}
        {/* <Route path="/StationMainApp" element={<StationMainApp/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
