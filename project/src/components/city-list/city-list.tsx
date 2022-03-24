import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

type CityListProps = {
  cities: string[];
}

function CityList({cities}: CityListProps) : JSX.Element {
  const dispatch = useAppDispatch();
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
                  <a className="locations__item-link tabs__item" href="#">
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

export default CityList;
