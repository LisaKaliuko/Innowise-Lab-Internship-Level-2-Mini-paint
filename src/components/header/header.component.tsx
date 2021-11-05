import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { selectCreativeTheme, selectUser } from '@selectors/auth.selectors';
import { logOut, toggleTheme } from '@actions/auth.actions';
import { AppRouteNames } from '@constants/app-route-names.constants';
import {
  Menu,
  Title,
  Links,
  LinkItem,
  ThemeContainer,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
} from './header.styles';

const HeaderComponent: FC = (): JSX.Element => {
  const user = useTypedSelector(selectUser);
  const creativeTheme = useTypedSelector(selectCreativeTheme);
  const dispatch = useDispatch();

  const logOutUser = () => dispatch(logOut());
  const changeTheme = () => dispatch(toggleTheme());

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
          <>
            <LinkItem>
              <Link to={AppRouteNames.Paint}>Paint</Link>
            </LinkItem>
            <LinkItem>
              <Link to={AppRouteNames.Gallery}>Gallery</Link>
            </LinkItem>
            <LinkItem>
              <Link to={AppRouteNames.Home} onClick={logOutUser}>
                Log out
              </Link>
            </LinkItem>
          </>
        )}
        <ThemeContainer>
          <span>Choose your fighter</span>
          <CheckBoxWrapper>
            <CheckBox
              name="themeToggler"
              id="checkbox"
              type="checkbox"
              onClick={changeTheme}
              defaultChecked={creativeTheme}
            />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </ThemeContainer>
      </Links>
    </Menu>
  );
};

export default HeaderComponent;
