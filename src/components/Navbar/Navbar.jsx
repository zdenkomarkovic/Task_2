import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('loggedUser');
    navigate('login');
  };
  return (
    <>
      <nav className='border-b-2 bg-slate-100'>
        {localStorage.hasOwnProperty('loggedUser') ? (
          <div className='container mx-auto flex justify-between  '>
            <div className='flex gap-10'>
              <NavLink to={'/'} className=' py-2 text-xl'>
                Pocetna
              </NavLink>
              <NavLink to={'about'} className=' py-2 text-xl'>
                O nama
              </NavLink>
              <NavLink to={'users'} className=' py-2 text-xl'>
                Korisnici
              </NavLink>
              <NavLink to={'posts'} className=' py-2 text-xl'>
                Postovi
              </NavLink>
              <NavLink to={'contact'} className=' py-2 text-xl'>
                Kontakt
              </NavLink>
            </div>
            <div>
              <button
                onClick={handleLogOut}
                className='
               py-2 text-xl'
              >
                Izloguj se
              </button>
            </div>
          </div>
        ) : (
          <div className='container mx-auto flex'>
            <NavLink to={'login'} className='px-5 py-2 text-xl'>
              Login
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
