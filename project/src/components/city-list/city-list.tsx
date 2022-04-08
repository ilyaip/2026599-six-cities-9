import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/data-process/data-process';
import React from 'react';

type CityListProps = {
  cities: string[];
}

function CityList({cities}: CityListProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const {activeCity} = useAppSelector(({DATA}) => DATA);

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
                  <button style={{border: 'none', cursor: 'pointer'}} className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : '' }`}>
                    <span>{city}</span>
                  </button>
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
