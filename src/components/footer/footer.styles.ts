import styled from 'styled-components';

export const Footer = styled.footer`
  flex: 0 0 auto;
  background: ${(props) => props.theme.footer.bg};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding: 15px 0px;
  color: ${(props) => props.theme.footer.text};

  p {
    font-size: 20px;
  }
`;
