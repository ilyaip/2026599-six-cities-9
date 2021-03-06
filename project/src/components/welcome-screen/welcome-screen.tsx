import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import { Offer } from '../../types/offer';
import Map from '../map/map';
import {useState} from 'react';
import CityList from '../city-list/city-list';
import { useAppSelector } from '../../hooks';
import SortingOptions from '../sorting-options/sorting-options';
import OfferListEmpty from '../offer-list-empty/offer-list-empty';
import React from 'react';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function WelcomeScreen() : JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const { loadedOffers, activeCity } = useAppSelector(({DATA}) => DATA);

  const onListItemHover = React.useCallback(
    (listItemName: string) => {
      const currentOffer = loadedOffers.find((offer) => offer.title === listItemName);

      setSelectedPoint(currentOffer);
    }, [loadedOffers]);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList cities={CITIES}/>
        <div className="cities">
          {loadedOffers.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{loadedOffers.length} places to stay in {activeCity}</b>
                <SortingOptions/>
                <OfferList onListItemHover={onListItemHover}></OfferList>
              </section>
              <div className="cities__right-section">
                <Map selectedPoint={selectedPoint}></Map>
              </div>
            </div>
            :
            <OfferListEmpty/>}
        </div>
      </main>
    </div>
  );
}

export default WelcomeScreen;
