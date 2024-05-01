import './App.css'
import Register from './pages/Register'
import Signin from "./pages/Signin";
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
