import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screen404 from '../404-screen/404-screen';
import FavoriteOrdersScreen from '../favorite-orders-screen/favorite-orders-screen';
import PrivateRoute from '../private-route/private-route';
import RegistrationScreen from '../registration-screen/registration-screen';
import RoomScreen from '../room-screen/room-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';

type AppScreenProps = {
  rentalOffers: number;
}

function App({rentalOffers} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomeScreen rentalOffers={rentalOffers} />} />
        <Route path='/login' element={<RegistrationScreen />} />
        <Route path='/favorites' element={
          <PrivateRoute>
            <FavoriteOrdersScreen />
          </PrivateRoute>
        }
        />
        <Route path='/offer/:id' element={<RoomScreen />} />
        <Route path='*' element={<Screen404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
