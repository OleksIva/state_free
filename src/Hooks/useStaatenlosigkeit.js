import { useState } from "react";

// Ensure this is named correctly
export const useStaatenlosigkeit = () => {
  const [showStaatenlosigkeit, setShowStaatenlosigkeit] = useState(false);

  const toggleStaatenlosigkeit = () => {
    console.log('Toggling Staatenlosigkeit visibility. Current state:', showStaatenlosigkeit);
    setShowStaatenlosigkeit(prev => !prev);
  };
  return { showStaatenlosigkeit, toggleStaatenlosigkeit };
};