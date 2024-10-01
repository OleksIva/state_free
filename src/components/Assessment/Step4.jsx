import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { updateDetails, selectDetails } from '../../store/userSlice';

const Step4 = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const navigate = useNavigate();

  const { handleSubmit } = useForm({
    defaultValues: details 
  });

  const [aufenthaltstitel, setAufenthaltstitel] = useState(null);
  const [geburtsurkunde, setGeburtsurkunde] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false); 

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
        throw new Error('Error with file uploading');
      }

      const result = await response.json();
      console.log('File was successfully uploaded:', result);
      return result;
    } catch (error) {
      console.error('Error with file uploading:', error);
      throw error;
    }
  };

  const handleFileUpload = async () => {
    try {
      if (aufenthaltstitel) {
        await uploadFile(aufenthaltstitel);
      }
      if (geburtsurkunde) {
        await uploadFile(geburtsurkunde);
      }
      setIsFileUploaded(true); 
      alert('Files were successfully uploaded.');
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const onSubmit = (data) => {
    dispatch(updateDetails({
      ...details, 
      ...data     
    }));
    navigate("/assessment/result");
  };

  return (
    <div className="container mt-5 p-4 border rounded shadow mbcont">
      <h2 className="mb-4">Schritt 4</h2>

      <div className="row gy-4">
        <div className="col-md-12">
          <label className="form-label">Aufenthaltstitel hochladen (PDF, bis 5 MB):</label>
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            onChange={(e) => handleFileChange(e, setAufenthaltstitel)}
          />
        </div>

        <div className="col-md-12">
          <label className="form-label">Geburtsurkunde hochladen (PDF, bis 5 MB):</label>
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            onChange={(e) => handleFileChange(e, setGeburtsurkunde)}
          />
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={handleFileUpload}
        >
          Dateien hochladen
        </button>
        <button 
          type="button" 
          className="btn btn-success" 
          onClick={handleSubmit(onSubmit)}
        >
          Weiter
        </button>
      </div>
    </div>
  );
};

export default Step4;


