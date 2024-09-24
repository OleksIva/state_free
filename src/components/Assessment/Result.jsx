import React from "react";
import { useSelector } from "react-redux";
import { selectDetails } from "../../store/userSlice"; 
import './assessment.css';

const Result = () => {
  const details = useSelector(selectDetails); 

  return (
    <div className="container">
      <h2>Download</h2>
      <pre>{JSON.stringify(details, null, 2)}</pre>
    </div>
  );
};

export default Result;

// import React from "react";
// import { useSelector } from "react-redux";
// import { jsPDF } from "jspdf"; 
// import { selectDetails } from "../../store/userSlice"; 
// import './assessment.css';

// const Result = () => {
//   const details = useSelector(selectDetails); 

//   // Function to generate and download PDF
//   const generatePdf = () => {
//     const doc = new jsPDF();
//     doc.text("Assessment Result", 10, 10);

//     // Step 1: Personal Information
//     doc.text("Step 1: Personal Information", 10, 20);
//     doc.text(`Salutation: ${details.salutation || ""}`, 10, 30);
//     doc.text(`First Name: ${details.firstName || ""}`, 10, 40);
//     doc.text(`Last Name: ${details.lastName || ""}`, 10, 50);
//     doc.text(`Other Names: ${details.otherNames || ""}`, 10, 60);
//     doc.text(`Document Type: ${details.documentType || ""}`, 10, 70);
//     doc.text(`Document Number: ${details.documentNumber || ""}`, 10, 80);
//     doc.text(`Nationality: ${details.nationality || ""}`, 10, 90);
//     doc.text(`Ethnicity: ${details.ethnicity || ""}`, 10, 100);
//     doc.text(`Religion: ${details.religion || ""}`, 10, 110);

//     // Step 2: Birth Information
//     doc.text("Step 2: Birth Information", 10, 120);
//     doc.text(`Born in Germany: ${details.bornInGermany || ""}`, 10, 130);
//     doc.text(`Birth Country: ${details.birthCountry || ""}`, 10, 140);
//     doc.text(`Birth Documented: ${details.birthDocumented || ""}`, 10, 150);

//     // Step 3: Nationality
//     doc.text("Step 3: Nationality", 10, 160);
//     doc.text(`Current Nationality: ${details.currentNationality || ""}`, 10, 170);
//     doc.text(`Attributed Nationality: ${details.attributedNationality || ""}`, 10, 180);
//     doc.text(`Ever Had Nationality: ${details.everHadNationality || ""}`, 10, 190);
//     doc.text(`Revoked Nationality Details: ${details.revokedNationalityDetails || ""}`, 10, 200);

//     // Step 4: Additional Data
//     doc.text("Step 4: Additional Data", 10, 210);
//     // Add additional data from Step 4 if necessary

//     // Step 5: Uploaded Files
//     doc.text("Step 5: Uploaded Files", 10, 220);
//     doc.text(`Aufenthaltstitel uploaded: ${details.aufenthaltstitel.length > 0 ? "Yes" : "No"}`, 10, 230);
//     doc.text(`Geburtsurkunde uploaded: ${details.geburtsurkunde.length > 0 ? "Yes" : "No"}`, 10, 240);

//     // Save the PDF
//     doc.save("assessment_result.pdf");
//   };

//   return (
//     <div className="container">
//       <h2>Assessment Result</h2>
//       <pre>{JSON.stringify(details, null, 2)}</pre>
//       <button onClick={generatePdf} className="btn-download">
//         Download PDF
//       </button>
//     </div>
//   );
// };

// export default Result;

