import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import React from 'react';

type CityListProps = {
  cities: string[];
}

function CityList({cities}: CityListProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const {activeCity} = useAppSelector((state) => state);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) =>
              (
                <li onClick={() => {
                  dispatch(changeCity(city));
                }} key={city} className="locations__item"
                >
                  <a className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : '' }`} href="#">
                    <span>{city}</span>
                  </a>
                </li>
              ),
            )
          }
        </ul>
      </section>
    </div>
  );
}
export default React.memo(CityList);
