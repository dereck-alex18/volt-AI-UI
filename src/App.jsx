import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/"  element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;