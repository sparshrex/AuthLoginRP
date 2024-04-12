import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import FormSubmission from './FormSubmission';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/form" element={<FormSubmission />} />
      </Routes>
    </Router>
  );
};

export default App;
