
import React, { useState } from "react";

const Staatenlosigkeit = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="Staatenlosigkeit-item">
      <div className="Staatenlosigkeit-question" onClick={toggleOpen}>
        <span className="faq-icon">{isOpen ? "-" : "+"}</span>
        {question}
      </div>
      {isOpen && <div className="Staatenlosigkeit-answer">{answer}</div>}
    </div>
  );
};

export default Staatenlosigkeit;