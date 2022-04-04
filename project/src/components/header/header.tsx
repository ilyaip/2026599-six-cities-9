import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

type HeaderProps = {
  isLoginPage? : boolean,
}

function Header({isLoginPage} : HeaderProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {
            !isLoginPage ?
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {authorizationStatus === 'AUTH' ?
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </Link>
                    </li>
                    :
                    ''}
                  <li className="header__nav-item">
                    {authorizationStatus === 'AUTH' ?
                      <Link className="header__nav-link" to=''>
                        <span className="header__signout" onClick={() => dispatch(logoutAction())}>Sign out</span>
                      </Link>
                      :
                      <Link className="header__nav-link" to={AppRoute.Login}>
                        <span className="header__signout">Sign in</span>
                      </Link>}
                  </li>
                </ul>
              </nav>
              :
              ''
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
