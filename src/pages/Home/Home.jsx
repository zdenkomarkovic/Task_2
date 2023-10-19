import React from 'react';
import DisplayCounter2 from '../../components/DisplayCounter/DisplayCounter2';
import DisplayCounter1 from '../../components/DisplayCounter/DisplayCounter1';

const Home = () => {
  let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

  return (
    <div className='container mx-auto mt-20'>
      {localStorage.hasOwnProperty('loggedUser') && (
        <div>
          <h1 className='text-[30px] my-10'>Ulogovan korisnik:</h1>
          <p className='text-[25px] my-5'>{loggedUser.name} </p>
          <p className='text-[25px] my-5'>{loggedUser.email}</p>
        </div>
      )}

      <DisplayCounter1 />
      <DisplayCounter2 />
    </div>
  );
};

export default Home;
