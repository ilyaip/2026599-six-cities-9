import { Navigate } from 'react-router';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute ({children}: PrivateRouteProps): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);

  return authorizationStatus === 'AUTH' ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
