import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';

type CityListProps = {
  cities: string[];
}

function CityList({cities}: CityListProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const {activeCity} = useAppSelector((state) => state);

  const cityItem = (city: string) => {
    if (activeCity === city) {
      return (
        <a className="locations__item-link tabs__item tabs__item--active" href="#">
          <span>{city}</span>
        </a>);
    } else {
      return (
        <a className="locations__item-link tabs__item" href="#">
          <span>{city}</span>
        </a>);
    }
  };
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
                  {cityItem(city)}
                </li>
              ),
            )
          }
        </ul>
      </section>
    </div>
  );
}
export default CityList;
