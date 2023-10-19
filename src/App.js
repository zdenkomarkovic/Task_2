import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { UsersProvider } from './contexts/UsersContext';

function App() {
  return (
    <div>
      <UsersProvider>
        <Navbar />
        <Suspense
          fallback={
            <div className='container mx-auto my-20 flex'>
              <h2 className='text-[50px] mx-auto'>Loading...</h2>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </UsersProvider>
    </div>
  );
}

export default App;
