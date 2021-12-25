import Login from './components/Login.jsx'
import HomePage from './components/HomePage.jsx'
import Dashboard from './components/Dashboard.jsx'
import Register from './components/Register.jsx'
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
