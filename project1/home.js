import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/page1">Go to Page 1</Link>
      <br />
      <Link to="/page2">Go to Page 2</Link>
      <br />
      <Link to="/page3">Go to Page 3</Link>
    </div>
  );
};

export default Home;
