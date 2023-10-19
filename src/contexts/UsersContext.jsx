import { createContext, useEffect, useState } from 'react';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          throw Error('Problem with fetching data');
        }
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        setError(err.message);
      });
  }, []);
  return (
    <UsersContext.Provider value={{ users, setUsers, isLoading, error }}>
      {children}
    </UsersContext.Provider>
  );
};
export default UsersContext;
