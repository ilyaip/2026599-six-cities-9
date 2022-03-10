import { Navigate } from 'react-router';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute ({children}: PrivateRouteProps): JSX.Element {
  const hasAccess = true;

  return hasAccess ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
