import React from "react";
import StaatenlosigkeitItem from "./StaatenlosigkeitItem";
import { faqs } from "../../config/Staatenlosigkeit";

const StaatenlosigkeitList = ({ isVisible }) => {
    console.log('FAQList isVisible:', isVisible);
    if (!isVisible) return null;
    
    return (
    <div className="Staatenlosigkeit-list">
      {faqs.map((faq, index) => (
        <StaatenlosigkeitItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default StaatenlosigkeitList;