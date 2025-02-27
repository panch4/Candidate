import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import OAuth from './pages/OAuth';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword'; 
import Otp from './pages/otp';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Login page at '/' */}
        <Route path="/oauth" element={<OAuth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />  
      </Routes>
    </Router>
  );
}

export default App;
