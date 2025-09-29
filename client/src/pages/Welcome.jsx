import React from 'react';
import { useNavigate } from 'react-router-dom'; // import hook

const Welcome = () => {
  const navigate = useNavigate(); // create navigate function

  return (
    <div className='welcome'>
      <div className='welcomeText'>
        <h1>Welcome to Abhi's Blog application</h1>
      </div>

      <div className='navigateContent'>
        <h3>If you are willing to see my blog, Please click to Navigate</h3>
      </div>

      <div className='buttonContainer'>
        <button className='button' onClick={() => navigate('/login')}>
          Login
        </button>
        <button className='button' onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Welcome;
