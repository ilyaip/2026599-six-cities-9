import WelcomeScreen from '../welcome-screen/welcome-screen';

type AppScreenProps = {
  rentalOffers: number;
}

function App({rentalOffers} : AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen rentalOffers={rentalOffers} />
  );
}

export default App;
