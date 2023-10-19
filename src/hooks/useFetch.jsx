import React, { useEffect, useState } from 'react';
const initialState = JSON.parse(localStorage.getItem('data'));

const useFetch = url => {
  const [posts, setPosts] = useState(initialState || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('Problem with fetching data');
        }
        return res.json();
      })
      .then(data => {
        setPosts(data);
        localStorage.setItem('data', JSON.stringify(data));
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  }, [url]);
  return [posts, loading, error];
};

export default useFetch;
