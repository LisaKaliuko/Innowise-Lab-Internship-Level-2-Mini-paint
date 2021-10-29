import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { selectUser } from '@selectors/auth.selectors';
import { logOut } from '@actions/auth.actions';
import { AppRouteNames } from '@constants/app-route-names.constants';
import { Menu, Title, Links, LinkItem } from './header.styles';

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
