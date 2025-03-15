import React, { useEffect } from 'react';

function Register() {
  useEffect(() => {
    console.log('Register component rendered');
  }, []);
  
  return (
    <div>
      Register Page
    </div>
  );
}

export default Register;
