import Home from './components/Home/Home';
import LoginPage from './components/LoginPage/LoginPage';
import Appointment from './components/Appointments/Appointment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
