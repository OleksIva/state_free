import React from "react";
import FAQItem from "./FAQItem";
import { faqs } from "../../config/Faqs";

const FAQList = ({ isVisible }) => {
    console.log('FAQList isVisible:', isVisible);
    if (!isVisible) return null;
    
    return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;