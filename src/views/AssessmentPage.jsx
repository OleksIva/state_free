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
import Result from "../components/Assessment/Result";
import "./AssessmentPage.css";

const AssessmentPage = () => { 
  const location = useLocation();
  return (
    <>
<div className="assessment-page">
      <div className="wizard">
        <div className="wizard-steps d-flex justify-content-between align-items-center position-relative mb-4">
          <div className={`step ${location.pathname === "/assessment/step1" ? "active" : ""}`}>
            <Link to="/assessment/step1" className="btn btn-circle">1</Link>
            <p>Persönliche Daten</p>
          </div>
          <div className={`step ${location.pathname === "/assessment/step2" ? "active" : ""}`}>
            <Link to="/assessment/step2" className="btn btn-circle">2</Link>
            <p>Geburtsort</p>
          </div>
          <div className={`step ${location.pathname === "/assessment/step3" ? "active" : ""}`}>
            <Link to="/assessment/step3" className="btn btn-circle">3</Link>
            <p>Staatsangehörigkeit</p>
          </div>
          <div className={`step ${location.pathname === "/assessment/step4" ? "active" : ""}`}>
            <Link to="/assessment/step4" className="btn btn-circle">4</Link>
            <p>Angehörige</p>
          </div>
          <div className={`step ${location.pathname === "/assessment/result" ? "active" : ""}`}>
            <Link to="/assessment/result" className="btn btn-circle">5</Link>
            <p>Zusammenfassung</p>
          </div>
        </div>
      </div>
      </div>
      <Routes>
        <Route path="step1" element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route path="step4" element={<Step4 />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </>
  );
};

export default AssessmentPage;
