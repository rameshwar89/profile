import Passes from './Pages/Passes'
import Sponsors from './Pages/Sponsors'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './Pages/Profile.jsx';
import Otp_forgotpass from './Pages/Otp_forgotpass.jsx';
import Schedule from './Pages/Schedule.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<h1>Blitzschlag</h1>} />
        <Route path="/sponsors" element={<Sponsors/>} />
        <Route path="/passes" element={<Passes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/otp" element={<Otp_forgotpass />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App