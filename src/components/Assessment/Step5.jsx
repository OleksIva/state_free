// // components/Step5.js
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

//   const onSubmit = (data) => {
//     // Дополните данные загруженными файлами
//     data.aufenthaltstitel = aufenthaltstitel;
//     data.geburtsurkunde = geburtsurkunde;

//     dispatch(updateDetails(data));
//     navigate("/assessment/step6");
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
//           label="Geburtsurkunde hochladen (PDF, bis zu 5 MB)"
//         />
//       </div>

//       <input type="submit" />
//     </form>
//   );
// };

// export default Step5;



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf"; // Import jsPDF for PDF generation
import FileUpload from "./FileUpload";
import { updateDetails, selectDetails } from "../../store/userSlice";
import './assessment.css';

const Step5 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector(selectDetails); // Fetch all the form data from all steps
  const { handleSubmit } = useForm({ defaultValues: details });
  
  const [aufenthaltstitel, setAufenthaltstitel] = useState([]);
  const [geburtsurkunde, setGeburtsurkunde] = useState([]);

  const onSubmit = (data) => {
    data.aufenthaltstitel = aufenthaltstitel;
    data.geburtsurkunde = geburtsurkunde;
    dispatch(updateDetails(data));
    navigate("/assessment/step6");
  };

  // Generate PDF with all form data
  const generatePdf = () => {
    const doc = new jsPDF();
    doc.text("User Details", 10, 10);

    // Step 1: Personal Details
    doc.text("Step 1: Persönliche Daten", 10, 20);
    doc.text(`Anrede: ${details.salutation || ""}`, 10, 30);
    doc.text(`Vorname/n: ${details.firstName || ""}`, 10, 40);
    doc.text(`Nachname: ${details.lastName || ""}`, 10, 50);
    doc.text(`Andere Namen: ${details.otherNames || ""}`, 10, 60);
    doc.text(`Dokumenttyp: ${details.documentType || ""}`, 10, 70);
    doc.text(`Dokumentnummer: ${details.documentNumber || ""}`, 10, 80);
    doc.text(`Staatsangehörigkeit: ${details.nationality || ""}`, 10, 90);
    doc.text(`Ethnische Zugehörigkeit: ${details.ethnicity || ""}`, 10, 100);
    doc.text(`Religion: ${details.religion || ""}`, 10, 110);

    // Step 2: Birth Details
    doc.text("Step 2: Geburtsdaten", 10, 120);
    doc.text(`In Deutschland geboren: ${details.bornInGermany || ""}`, 10, 130);
    if (details.bornInGermany === "ja") {
      doc.text(`Geburtsurkunde vorhanden: ${details.hasBirthCertificate || ""}`, 10, 140);
      if (details.hasBirthCertificate === "nein") {
        doc.text(`Grund für fehlende Urkunde: ${details.noCertificateReason || ""}`, 10, 150);
      }
    } else {
      doc.text(`Geburtsland: ${details.birthCountry || ""}`, 10, 140);
    }
    doc.text(`Geburtsort: ${details.geburtsort || ""}`, 10, 150);
    doc.text(`Geburt dokumentiert: ${details.birthDocumented || ""}`, 10, 160);
    if (details.birthDocumented === "nein") {
      doc.text(`Grund für fehlende Dokumentation: ${details.noDocumentationReason || ""}`, 10, 170);
    }

    // Step 3: Nationality and Statelessness
    doc.text("Step 3: Staatsangehörigkeit", 10, 180);
    doc.text(`Aktuelle Staatsangehörigkeit: ${details.currentNationality || ""}`, 10, 190);
    doc.text(`Staatsangehörigkeit zugeschrieben: ${details.attributedNationality || ""}`, 10, 200);
    doc.text(`Frühere Staatsangehörigkeit: ${details.everHadNationality || ""}`, 10, 210);
    if (details.everHadNationality) {
      doc.text(`Grund für Verlust der Staatsangehörigkeit: ${details.revokedNationalityDetails || ""}`, 10, 220);
    }
    doc.text(`Staatsangehörigkeitsantrag in: ${details.applicationCountry || ""}`, 10, 230);
    doc.text(`Datum des Antrags: ${details.applicationDate || ""}`, 10, 240);
    doc.text(`Entscheidung: ${details.decision || ""}`, 10, 250);
    doc.text(`Gilt als staatenlos: ${details.statelessInOtherCountry || ""}`, 10, 260);
    doc.text(`Dokument zum Nachweis: ${details.hasDocument || ""}`, 10, 270);
    doc.text(`Versucht, Nachweis zu erlangen: ${details.triedToObtainProof || ""}`, 10, 280);
    doc.text(`Grund für Staatenlosigkeit: ${details.statelessReason || ""}`, 10, 290);

    // Step 4: Placeholder for more data (if any from Step 4)
    doc.text("Step 4: Zusätzliche Daten", 10, 300);
    // Add additional step 4 data as necessary.

    // Step 5: File Uploads
    doc.text("Step 5: Hochgeladene Dateien", 10, 310);
    doc.text(`Aufenthaltstitel hochgeladen: ${aufenthaltstitel.length > 0 ? "Ja" : "Nein"}`, 10, 320);
    doc.text(`Geburtsurkunde hochgeladen: ${geburtsurkunde.length > 0 ? "Ja" : "Nein"}`, 10, 330);

    // Save the PDF
    doc.save("user_details_complete.pdf");
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

      {/* Button to generate and download PDF */}
      <button type="button" onClick={generatePdf} className="btn-download">
        Download PDF
      </button>

      <input type="submit" value="Next Step" />
    </form>
  );
};

export default Step5;
