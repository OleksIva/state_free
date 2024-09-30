// components/Step5.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FileUpload from './FileUpload';
import { updateDetails } from '../../store/userSlice';
import './assessment.css';

const Step5 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  
  const [aufenthaltstitel, setAufenthaltstitel] = useState([]);
  const [geburtsurkunde, setGeburtsurkunde] = useState([]);

  const onSubmit = (data) => {
    // Дополните данные загруженными файлами
    data.aufenthaltstitel = aufenthaltstitel;
    data.geburtsurkunde = geburtsurkunde;

    dispatch(updateDetails(data));
    navigate("/assessment/step6");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
      <h2>Step 5</h2>
      
      <div className="assessment-form__inputs">
        <FileUpload 
          onFileUpload={setAufenthaltstitel} 
          label="Aufenthaltstitel hochladen (PDF, bis zu 5 MB)"
        />

        <FileUpload 
          onFileUpload={setGeburtsurkunde} 
          label="Geburtsurkunde hochladen (PDF, bis zu 5 MB)"
        />
      </div>

      <input type="submit" />
    </form>
  );
};

export default Step5;

