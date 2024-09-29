import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { updateDetails } from '../../store/userSlice';

const Step4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const [aufenthaltstitel, setAufenthaltstitel] = useState(null);
  const [geburtsurkunde, setGeburtsurkunde] = useState(null);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]); 
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://192.168.0.127:8000/user/uploadfile/', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmX3Rlc3QifQ.VhRcnr8z8ulH9qkH9f5waZ6hUJ8m3fSl9qc5HkjuiOA '
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error with file downloading');
      }

      const result = await response.json();
      console.log('File was successfully downloaded:', result);
      return result;
    } catch (error) {
      console.error('Error with file sending:', error);
    }
  };

  const onSubmit = async (data) => {
    try {
      if (aufenthaltstitel) {
        await uploadFile(aufenthaltstitel);
      }
      if (geburtsurkunde) {
        await uploadFile(geburtsurkunde);
      }

      dispatch(updateDetails(data));
      navigate("/assessment/result");
    } catch (error) {
      console.error('Error with uploading file:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-5 p-4 border rounded shadow">
      <h2 className="mb-4">Schritt 4</h2>
      
      <div className="row gy-4">
        <div className="col-md-12">
          <label className="form-label">Aufenthaltstitel hochladen (PDF, до 5 MB):</label>
          <input 
            type="file" 
            className="form-control" 
            accept="application/pdf" 
            onChange={(e) => handleFileChange(e, setAufenthaltstitel)} 
          />
        </div>

        <div className="col-md-12">
          <label className="form-label">Geburtsurkunde hochladen (PDF, до 5 MB):</label>
          <input 
            type="file" 
            className="form-control" 
            accept="application/pdf" 
            onChange={(e) => handleFileChange(e, setGeburtsurkunde)} 
          />
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
      <button type="button" className="btn btn-outline-secondary">Für später speichern</button>
        <button type="submit" className="btn btn-success">Absenden</button>
      </div>
    </form>
  );
};

export default Step4;



