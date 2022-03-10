import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screen404 from '../404-screen/404-screen';
import FavoriteOffersScreen from '../favorite-orders-screen/favorite-orders-screen';
import PrivateRoute from '../private-route/private-route';
import RegistrationScreen from '../registration-screen/registration-screen';
import RoomScreen from '../room-screen/room-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import {Offer} from '../../types/offer';
import { AppRoute } from '../../const';

type AppScreenProps = {
  rentalOffers: number;
  offers: Offer[];
}

function App({rentalOffers, offers} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomeScreen rentalOffers={rentalOffers} offers={offers} />} />
        <Route path={AppRoute.Login} element={<RegistrationScreen />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <FavoriteOffersScreen offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<RoomScreen offers={offers} />} />
        <Route path='*' element={<Screen404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
