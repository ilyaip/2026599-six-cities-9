import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSort } from '../../store/action';


function SortingOptions() : JSX.Element {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line no-console
  console.log('dispatch: ', dispatch);

  const {activeSort} = useAppSelector((state) => state);

  const sortList = useRef<HTMLUListElement>(null);
  const showOptions = () => {
    if (sortList && sortList.current) {
      sortList.current.classList.toggle('places__options--opened');
    }
  };


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={showOptions}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom" ref={sortList}>
        <li className={activeSort === 'Popular' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={() => {dispatch(changeSort('Popular')); showOptions();}}>Popular</li>
        <li className={activeSort === 'Price: low to high' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={() => {dispatch(changeSort('Price: low to high')); showOptions();}}>Price: low to high</li>
        <li className={activeSort === 'Price: high to low' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={() => {dispatch(changeSort('Price: high to low')); showOptions();}}>Price: high to low</li>
        <li className={activeSort === 'Top rated first' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={() => {dispatch(changeSort('Top rated first')); showOptions();}}>Top rated first</li>
      </ul>
    </form>
  );
}

export default SortingOptions;
