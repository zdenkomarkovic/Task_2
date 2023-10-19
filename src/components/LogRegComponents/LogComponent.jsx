import React from 'react';

const LogComponent = ({
  handleLogUser,
  inputLogUser,
  logUser,
  setToggleView,
  toggleView,
}) => {
  return (
    <div className='w-[30%] mx-auto flex-col tracking-widest'>
      <h2 className='text-[40px] my-10'>Prijava</h2>

      <form
        action=''
        className='flex flex-col text-[22px] gap-4'
        onSubmit={handleLogUser}
      >
        <input
          name='email'
          type='email'
          placeholder='Unesi email...'
          className='border-b-[1px] px-5 py-2 my-5 tracking-wider'
          onChange={inputLogUser}
          defaultValue={logUser.email}
        />

        <input
          name='password'
          type='password'
          placeholder='Unesi lozinku...'
          className='border-b-[1px] px-5 py-2 my-5 tracking-wider'
          onChange={inputLogUser}
          defaultValue={logUser.password}
        />
        <button
          className='rounded-md my-10 py-2 tracking-widest px-auto bg-blue-800 text-white'
          type='submit'
        >
          Prijavi se
        </button>
      </form>
      <div className='flex gap-5 items-center'>
        <p className='text-[18px] opacity-50 '>
          Ako jos niste registrovani, idite na
        </p>
        <button
          onClick={() => setToggleView(!toggleView)}
          className='text-[22px] '
        >
          "Registacija"
        </button>
      </div>
    </div>
  );
};

export default LogComponent;
