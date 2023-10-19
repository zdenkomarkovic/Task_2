import React from 'react';

const Contact = () => {
  const handleInput = () => {};

  const handleSubmit = e => {
    e.preventDefault();
    // komunikacija sa backendom
  };

  return (
    <div className='container flex justify-between mt-[200px] mx-auto'>
      <form
        onSubmit={handleSubmit}
        action=''
        className='w-[30%] flex flex-col gap-[40px]'
      >
        <input
          className='text-[20px] py-[10px] px-[30px] border-b-[1px]'
          type='text'
          name='name'
          placeholder='Vase ime...'
          onChange={handleInput}
        />
        <input
          className='text-[20px] py-[10px] px-[30px] border-b-[1px]'
          type='email'
          name='email'
          placeholder='Unesite email...'
          onChange={handleInput}
        />
        <textarea
          className='text-[20px] py-[10px] px-[30px] border-b-[1px]'
          name='message'
          id=''
          cols='27'
          rows='5'
          placeholder='Vasa poruka...'
        ></textarea>
        <button
          className='text-[20px] py-[10px] px-[30px] mt-[20px] bg-blue-800 text-white rounded-lg'
          type='submit'
        >
          Posalji
        </button>
      </form>
      <div className='w-[60%] flex flex-col text-[20px]'>
        <span className='m-[10px]'>
          Telefon: <a href='tel:+38118555666'>+381 18 555 666</a>
        </span>
        <span className='m-[10px]'>
          Mail: <a href='mailto:kontakt@gmail.com'>kontakt@gmail.com</a>
        </span>
        <span className='m-[10px]'>Adresa: Vozda Karadjordja 2, Nis</span>
        <iframe
          className='mt-[20px] h-[300px] w-[100%]'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.48781085065355!2d21.895427611090206!3d43.32069768490327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0b41c6adb2b%3A0x6d3543d1163a67e6!2sCONSULT!5e0!3m2!1sen!2srs!4v1697649069181!5m2!1sen!2srs'
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
