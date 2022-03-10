import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screen404 from '../404-screen/404-screen';
import FavoriteOrdersScreen from '../favorite-orders-screen/favorite-orders-screen';
import PrivateRoute from '../private-route/private-route';
import RegistrationScreen from '../registration-screen/registration-screen';
import RoomScreen from '../room-screen/room-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import {Offer} from '../../types/offer';

type AppScreenProps = {
  rentalOffers: number;
  offers: Offer[];
}

function App({rentalOffers, offers} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomeScreen rentalOffers={rentalOffers} offers={offers} />} />
        <Route path='/login' element={<RegistrationScreen />} />
        <Route path='/favorites' element={
          <PrivateRoute>
            <FavoriteOrdersScreen offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path='/offer/:id' element={<RoomScreen offers={offers} />} />
        <Route path='*' element={<Screen404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
