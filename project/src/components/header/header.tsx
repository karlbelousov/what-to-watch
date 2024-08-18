import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ReactNode } from 'react';
import { logoutUser } from '../../store/action';

type HeaderProps = {
  children?: ReactNode;
}

function Header({children}: HeaderProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="page-header film-card__head">
      <Logo />
      {children}
      <ul className="user-block">
        {authorizationStatus === AuthorizationStatus.Auth && (
          <li className="user-block__item">
            <Link className="user-block__avatar" to={AppRoute.MyList}>
              <img
                src={user}
                alt="User avatar"
                width={63}
                height={63}
              />
            </Link>
          </li>
        )}
        <li className="user-block__item">
          {authorizationStatus === AuthorizationStatus.Auth ? (
            <Link to={''} className="user-block__link" onClick={handleLogoutUser}>
              Sign out
            </Link>
          ) : (
            <Link to={AppRoute.Login} className="user-block__link">
              Sign in
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
