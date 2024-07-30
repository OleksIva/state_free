import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";
import Step1 from "../components/Assessment/Step1";
import Step2 from "../components/Assessment/Step2";
import Step3 from "../components/Assessment/Step3";
import Step4 from "../components/Assessment/Step4";
import Step5 from "../components/Assessment/Step5";
import Result from "../components/Assessment/Result";
import "./AssessmentPage.css";

const AssessmentPage = () => { 
  const location = useLocation();
  return (
    <>
      <div className="assessment-page">
        <ul className="assessment-page__steps">
          <li className={location.pathname === "/assessment/step1" ? "active" : ""}>
            <Link to="step1">1. Persönliche Daten</Link>
          </li>
          <li className={location.pathname === "/assessment/step2" ? "active" : ""}>
            <Link to="step2">2. Geburtsort</Link>
          </li>
          <li className={location.pathname === "/assessment/step3" ? "active" : ""}>
            <Link to="step3">3. Staatsangehörigkeit</Link>
          </li>
          <li className={location.pathname === "/assessment/step4" ? "active" : ""}>
            <Link to="step4">4. Angehörige</Link>
          </li>
          <li className={location.pathname === "/assessment/step5" ? "active" : ""}>
            <Link to="step5">5. Dokumente</Link>
          </li>
          <li className={location.pathname === "/assessment/result" ? "active" : ""}>
            <Link to="result">Download</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="step1" element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route path="step4" element={<Step4 />} />
        <Route path="step5" element={<Step5 />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </>
  );
};

export default AssessmentPage;
