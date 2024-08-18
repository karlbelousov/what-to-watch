import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { ReactNode } from 'react';

type HeaderProps = {
  children?: ReactNode;
}

function Header({children}: HeaderProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);

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
          <Link to={AppRoute.Login} className="user-block__link">
            {authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
