'use client'; // This directive makes the component a Client Component

import React from 'react';

const HoverButton = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  // Simulate button click on hover
  const handleMouseEnter = () => {
    handleClick();
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      Hover Over Me
    </button>
  );
};

export default HoverButton;
