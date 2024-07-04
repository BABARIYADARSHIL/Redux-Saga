import { Navigate, Outlet } from 'react-router-dom';

const PubliceRoute = () => {
  const auth = localStorage.getItem('token');
  return auth ? <Navigate to="/Home" /> : <Outlet />;
}

export default PubliceRoute;
