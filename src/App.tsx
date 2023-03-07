import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Registration from './pages/Auth/Registration'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
  )
}

export default App
