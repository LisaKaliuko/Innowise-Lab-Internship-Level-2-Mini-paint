import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../core/hooks/use-typed-selector.hook';
import { selectUser } from '../../core/selectors/selectors';
import { logOut } from '../../core/actions/auth.actions';
import { AppRouteNames } from '../../shared/constants/app-route-names.constants';
import { Menu, Title, Links, LinkItem } from './styles';

const HeaderComponent: FC = (): JSX.Element => {
  const user = useTypedSelector(selectUser);
  const dispatch = useDispatch();

  const logOutUser = () => dispatch(logOut());

  return (
    <Menu>
      <Title>
        <Link to={AppRouteNames.Home}>MINI-PAINT</Link>
      </Title>
      <Links>
        {!user ? (
          <>
            <LinkItem>
              <Link to={AppRouteNames.Login}>Login</Link>
            </LinkItem>
            <LinkItem>
              <Link to={AppRouteNames.Register}>Register</Link>
            </LinkItem>
          </>
        ) : (
          <LinkItem>
            <Link to={AppRouteNames.Home} onClick={logOutUser}>
              Log out
            </Link>
          </LinkItem>
        )}
      </Links>
    </Menu>
  );
};

export default HeaderComponent;
