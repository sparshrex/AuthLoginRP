import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from react-router-dom
import axios from 'axios';
import './RegistrationForm.css';

interface RegistrationFormData {
  username: string;
  password: string;

}

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate(); // Initializing useNavigate hook
  const initialFormData: RegistrationFormData = { username: '', password: '' };
  const [formData, setFormData] = useState<RegistrationFormData>(() => {
    const storedData = localStorage.getItem('registrationFormData');
    return storedData ? JSON.parse(storedData) : initialFormData;
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      localStorage.setItem('registrationFormData', JSON.stringify(formData));
    }, 200);

    return () => clearInterval(intervalId);
  }, [formData]);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      console.log('Registration successful:', response.data);
      navigate('/login'); // Navigating to '/login' route upon successful registration using useNavigate
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleClear = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <div className="input-group">
        <input type="text" placeholder="username" name="username" value={formData.username} onChange={handleInputChange} />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} />
      </div>
      <div className="buttons">
        <button className="register" onClick={handleRegister}>Register</button>
        <button className="clear" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
