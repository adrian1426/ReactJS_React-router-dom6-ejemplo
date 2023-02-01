import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>,
    errorElement: <h2>No se encontró la página amigo.</h2>
  },
  {
    path: '/about',
    element: <h1>About</h1>
  },
  {
    path: '/contact',
    element: <h1>Contact</h1>
  }
]);

function App() {
  return (
    <div>
      <h1> Mi app</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
