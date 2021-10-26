import styled from 'styled-components';

export const Menu = styled.nav`
  background-color: ${(props) => props.theme.header.bg};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px 0px;

  a {
    color: ${(props) => props.theme.header.text};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.header.textHover};
    }
  }
`;

export const Title = styled.div`
  a {
    font-size: 30px;
    font-weight: 700;
  }
`;

export const Links = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

export const LinkItem = styled.li`
  margin: 0px 10px;

  a {
    font-size: 22px;
  }
`;
