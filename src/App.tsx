import { Navigate, Route, Routes } from 'react-router-dom';
import React from "react";
import Login from "./pages/Login";
import Registration from './pages/Registration';

function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration/>} />
      </Routes>
    </div>
  );
}

export default App;
