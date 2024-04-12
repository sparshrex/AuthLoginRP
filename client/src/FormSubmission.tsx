import React, { useState } from 'react';
import axios from 'axios';

const FormSubmission: React.FC = () => {
  const [formData, setFormData] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/form/save', {
        formData,
      });
      console.log('Form submission successful:', response.data);
    } catch (error) {
      console.error('Form submission error:');
    }
  };

  return (
    <div>
      <h2>Form Submission</h2>
      <textarea value={formData} onChange={(e) => setFormData(e.target.value)} />
      <button onClick={handleSubmit}>Submit Form</button>
    </div>
  );
};

export default FormSubmission;
