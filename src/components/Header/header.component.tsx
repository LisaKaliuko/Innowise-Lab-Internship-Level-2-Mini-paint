import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../core/hooks/use.typed.selector';
import { selectUser } from '../../core/selectors/selectors';
import { logOut } from '../../core/actions/auth.actions';
import { PATHES } from '../../constants/constants';
import { Menu, Title, Links, LinkItem } from './styles';

const HeaderComponent: FC = (): JSX.Element => {
  const user = useTypedSelector(selectUser);
  const dispatch = useDispatch();

  const logOutUser = () => dispatch(logOut());

  return (
    <Menu>
      <Title>
        <Link to={PATHES.MAIN_PAGE}>MINI-PAINT</Link>
      </Title>
      <Links>
        {!user ? (
          <>
            <LinkItem>
              <Link to={PATHES.LOGIN}>Login</Link>
            </LinkItem>
            <LinkItem>
              <Link to={PATHES.REGISTER}>Register</Link>
            </LinkItem>
          </>
        ) : null}

        {user ? (
          <LinkItem>
            <Link to={PATHES.MAIN_PAGE} onClick={logOutUser}>
              Log out
            </Link>
          </LinkItem>
        ) : null}
      </Links>
    </Menu>
  );
};

export default HeaderComponent;
