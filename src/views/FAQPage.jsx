import React from "react";
import FAQList from "../components/Faqs/FAQList";
import StaatenlosigkeitList from "../components/Faqs/StaatenlosigkeitList";
import "./Faq.css";
import "./Staatenlosigkeit.css";

const FAQPage = () => {
  return (
    <div className="faq-page">
      <h1>FAQ</h1>
      <h2>Fragen zum Konto</h2>
      <div>
        <FAQList isVisible={true} />
      </div>
      
      <h2>Ungeklärte Staatsangehörigkeit und Staatenlosigkeit</h2>
      <div>
        <StaatenlosigkeitList isVisible={true} />
      </div>
    </div>
  );
};

export default FAQPage;






