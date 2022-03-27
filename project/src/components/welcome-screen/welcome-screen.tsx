import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import { Offer } from '../../types/offer';
import Map from '../map/map';
import {useState} from 'react';
import CityList from '../city-list/city-list';
import { useAppSelector } from '../../hooks';

type WelcomeScreenProps = {
  rentalOffers: number;
  offers: Offer[];
}

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function WelcomeScreen({rentalOffers, offers} : WelcomeScreenProps) : JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const onListItemHover = (listItemName: string) => {
    const currentOffer = offers.find((offer) => offer.title === listItemName);

    setSelectedPoint(currentOffer);
  };
  const activeCityObj = useAppSelector((state) => state.activeCityObj);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList cities={CITIES}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeCityObj.offerCount} places to stay in {activeCityObj.city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OfferList offers={offers} onListItemHover={onListItemHover}></OfferList>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} selectedPoint={selectedPoint}></Map>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomeScreen;
