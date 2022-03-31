// import { Offer } from '../../types/offer';
import OfferList from '../offer-list/offer-list';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import { AppRoute } from '../../const';

// type FavoriteOffersScreenProps = {
//   offers: Offer[];
// }

function FavoriteOffersScreen() : JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <Header />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <OfferList></OfferList>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoriteOffersScreen;
