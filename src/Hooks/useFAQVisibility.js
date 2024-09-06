import { useState } from "react";

export const useFAQVisibility = () => {
  const [showFAQs, setShowFAQs] = useState(false);

  const toggleFAQs = () => {
    console.log('Toggling FAQ visibility. Current state:', showFAQs); // Debug log
    setShowFAQs(prev => !prev); // Toggle the state
  };

  return { showFAQs, toggleFAQs };
};