import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='container mx-auto mt-20 flex flex-col'>
      <Link className='text-[25px]' to={'/'}>
        Idi na pocetnu stranicu
      </Link>
      <h1 className='text-[120px] my-20 mx-auto'>Error 404</h1>
    </div>
  );
};

export default Error;
