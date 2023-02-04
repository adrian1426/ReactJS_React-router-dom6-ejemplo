import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Ocurrió un error</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;