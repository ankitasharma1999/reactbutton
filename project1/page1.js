import React from 'react';
import { Link } from 'react-router-dom';

const P1 = () => {
  return (
    <div>
      <h1>This is Page 1</h1>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default P1;
