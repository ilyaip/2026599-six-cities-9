import { useState } from 'react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSort } from '../../store/data-process/data-process';


function SortingOptions() : JSX.Element {
  const dispatch = useAppDispatch();
  const {activeSort} = useAppSelector(({DATA}) => DATA);

  const [isOpened, setOpened] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpened(!isOpened)}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : '' }`}>
        <li className={activeSort === 'Popular' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={() => {dispatch(changeSort('Popular')); setOpened(!isOpened);}}>Popular</li>
        <li className={activeSort === 'Price: low to high' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={() => {dispatch(changeSort('Price: low to high')); setOpened(!isOpened);}}>Price: low to high</li>
        <li className={activeSort === 'Price: high to low' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={() => {dispatch(changeSort('Price: high to low')); setOpened(!isOpened);}}>Price: high to low</li>
        <li className={activeSort === 'Top rated first' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={() => {dispatch(changeSort('Top rated first')); setOpened(!isOpened);}}>Top rated first</li>
      </ul>
    </form>
  );
}

export default React.memo(SortingOptions);
