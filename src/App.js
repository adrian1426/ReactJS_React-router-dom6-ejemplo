import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import AboutRoute from './routes/AboutRoute';
import ContactRoute from './routes/ContactRoute';
import HomeRoute from './routes/HomeRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoute />,
    errorElement: <Error />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <ContactRoute />
      }
    ]
  },
  {
    path: '/about',
    element: <AboutRoute />
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
