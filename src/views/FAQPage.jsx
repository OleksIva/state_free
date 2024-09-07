import React, { useState } from "react";
import FaqsButton from "../components/Faqs/FaqsButton";
import StaatenlosigkeitButton from "../components/Faqs/StaatenlosigkeitButton";
import FAQList from "../components/Faqs/FAQList";
import StaatenlosigkeitList from "../components/Faqs/StaatenlosigkeitList";
import "./Faq.css";
import "./Staatenlosigkeit.css"

const FAQPage = () => {
  const [showFAQs, setShowFAQs] = useState(false);
  const [showStaatenlosigkeit, setShowStaatenlosigkeit] = useState(false);
  
  return (
    <div className="faq-page">
       <h1>faq</h1>
      <FaqsButton onClick={() => setShowFAQs(prev =>  !prev)} />
      <div style={{ border: '1px solid red' }}>
        <FAQList isVisible={showFAQs} />
      </div>
      <StaatenlosigkeitButton onClick={() => setShowStaatenlosigkeit(prev =>  !prev)} />
      <div style={{ border: '1px solid red' }}>
        <StaatenlosigkeitList isVisible={showStaatenlosigkeit} />
      </div>
    </div>
  );
};
export default FAQPage;