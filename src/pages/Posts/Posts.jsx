import React from 'react';
import useFetch from '../../hooks/useFetch';
const url = 'https://jsonplaceholder.typicode.com/posts';
const Posts = () => {
  const [posts, loading, error] = useFetch(url);
  return (
    <div className='container mx-auto mt-10'>
      <h2 className='text-[30px] my-5'>Comments</h2>
      {error && <div>{error}</div>}
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        posts.map((post, i) => <p key={i}>{post.title}</p>)
      )}
    </div>
  );
};

export default Posts;
