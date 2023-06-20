import React, { useState, useEffect } from "react";

export const TextRotator = ({ textArray }: { textArray: Array<string> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [textArray.length]);

  return <span>{textArray[currentIndex]}</span>;
};
