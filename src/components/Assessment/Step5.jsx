import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { updateDetails } from '../../store/userSlice';
import './assessment.css';

const Step5 = () => {
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
      // const response = await fetch('http://localhost:8000/uploadfile/', {
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
      console.log('File was succesfully downloaded:', result);
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
      navigate("/assessment/step6");
    } catch (error) {
      console.error('Error with uploading file:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
      <h2>Step 5</h2>
      
      <div className="assessment-form__inputs">
        <label>
          Aufenthaltstitel hochladen (PDF, до 5 MB):
          <input 
            type="file" 
            accept="application/pdf" 
            onChange={(e) => handleFileChange(e, setAufenthaltstitel)} 
          />
        </label>

        <label>
          Geburtsurkunde hochladen (PDF, до 5 MB):
          <input 
            type="file" 
            accept="application/pdf" 
            onChange={(e) => handleFileChange(e, setGeburtsurkunde)} 
          />
        </label>
      </div>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Step5;


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import FileUpload from './FileUpload';
// import { updateDetails } from '../../store/userSlice';
// import './assessment.css';

// const Step5 = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { handleSubmit } = useForm();
  
//   const [aufenthaltstitel, setAufenthaltstitel] = useState([]);
//   const [geburtsurkunde, setGeburtsurkunde] = useState([]);

//   const onSubmit = async (data) => {
//     const formData = new FormData();

//     aufenthaltstitel.forEach(file => {
//       formData.append('aufenthaltstitel', file);
//     });

//     geburtsurkunde.forEach(file => {
//       formData.append('geburtsurkunde', file);
//     });

//     formData.append('otherField1', data.otherField1);
//     formData.append('otherField2', data.otherField2);

//     // Отправляем данные на бэкэнд
//     try {
//       const response = await fetch('http://localhost:5000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Files were succesfully uploaded:', result);

//         dispatch(updateDetails(data));
//         navigate("/assessment/step6");
//       } else {
//         console.error('Error with file uploading:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error with sending request:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
//       <h2>Step 5</h2>
      
//       <div className="assessment-form__inputs">
//         <FileUpload 
//           onFileUpload={setAufenthaltstitel} 
//           label="Aufenthaltstitel hochladen (PDF, bis zu 5 MB)"
//         />

//         <FileUpload 
//           onFileUpload={setGeburtsurkunde} 
//           label="Geburtsurkunde hochladen (PDF, bis до 5 MB)"
//         />
//       </div>

//       <input type="submit" />
//     </form>
//   );
// };

// export default Step5;

