import React, { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';

const Users = () => {
  const { users, isLoading, error } = useContext(UsersContext);
  return (
    <div className='container mx-auto my-[100px]'>
      {error && <div>{error}</div>}
      {isLoading ? (
        <div className='flex gap-5'>
          {Array.from({ length: 4 }).map((_, id) => (
            <div
              key={id}
              className='h-[600px] w-[300px] bg-slate-300 rounded-lg'
            ></div>
          ))}
        </div>
      ) : (
        <table className='my-20 mx-auto'>
          <thead className='px-auto'>
            <tr>
              <th className='py-3 px-10 '>Ime</th>
              <th className='py-3 px-10 '>Korisnicko ime</th>
              <th className='py-3 px-10 '>Email</th>
              <th className='py-3 px-10 '>Grad</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <td className='py-3 px-10 '>{user.name}</td>
                  <td className='py-3 px-10 '>{user.username}</td>
                  <td className='py-3 px-10 '>{user.email}</td>
                  <td className='py-3 px-10 '>{user.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
