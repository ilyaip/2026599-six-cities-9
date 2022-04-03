import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screen404 from '../404-screen/404-screen';
import FavoriteOffersScreen from '../favorite-orders-screen/favorite-orders-screen';
import PrivateRoute from '../private-route/private-route';
import RegistrationScreen from '../registration-screen/registration-screen';
import RoomScreen from '../room-screen/room-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
// import {Offer} from '../../types/offer';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';

function App(): JSX.Element {
  const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Unknown;
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomeScreen />} />
        <Route path={AppRoute.Login} element={<RegistrationScreen />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <FavoriteOffersScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<RoomScreen />} />
        <Route path='*' element={<Screen404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
