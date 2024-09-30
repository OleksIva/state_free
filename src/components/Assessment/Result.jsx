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
