import React from 'react';

const RegComponent = ({
  handleRegisterUser,
  handleInput,
  setToggleView,
  toggleView,
  regErrors,
}) => {
  return (
    <div className='w-[30%] mx-auto flex-col tracking-widest'>
      <h2 className='text-[40px] my-10'>Registracija</h2>

      <form
        action=''
        className='flex flex-col text-[22px] gap-4'
        onSubmit={handleRegisterUser}
      >
        <input
          name='name'
          type='text'
          placeholder={regErrors.name ? regErrors.name : 'Unesi ime...'}
          className={`border-b-[1px] px-5 py-2 my-5 tracking-wider ${
            regErrors.name && 'border-[1px] border-red-500'
          }`}
          onChange={handleInput}
        />

        <input
          name='email'
          type='email'
          placeholder={regErrors.email ? regErrors.email : 'Unesi email...'}
          className={`border-b-[1px] px-5 py-2 my-5 tracking-wider ${
            regErrors.email && 'border-[1px] border-red-500'
          }`}
          onChange={handleInput}
        />

        <input
          name='password'
          type='password'
          placeholder={
            regErrors.password ? regErrors.password : 'Unesi lozinku...'
          }
          className={`border-b-[1px] px-5 py-2 my-5 tracking-wider ${
            regErrors.password && 'border-[1px] border-red-500'
          }`}
          onChange={handleInput}
        />
        <button
          className='rounded-md my-10 py-2 tracking-widest px-auto bg-blue-800 text-white'
          type='submit'
        >
          Registruj se
        </button>
      </form>
      <div className='flex gap-5 items-center'>
        <p className='text-[18px] opacity-50 '>
          Ako ste vec registrovani, idite na
        </p>
        <button
          onClick={() => setToggleView(!toggleView)}
          className='text-[22px]'
        >
          "Prijavu"
        </button>
      </div>
    </div>
  );
};

export default RegComponent;
