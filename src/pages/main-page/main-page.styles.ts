import styled from 'styled-components';

export const Content = styled.div`
  width: 40%;
  height: 100%;
  margin: 50px auto;
`;

export const Title = styled.div`
  background: ${(props) => props.theme.mainPage.title};
  font-family: 'Ceviche One', cursive;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  h1 {
    font-size: 60px;
    margin-top: 0px;
    margin-bottom: 30px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const PrimaryButton = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  a {
    padding: 15px 45px;
    color: ${(props) => props.theme.primaryButton.text};
    font-size: 25px;
    font-weight: 700;
    text-decoration: none;
    border: 2px solid ${(props) => props.theme.primaryButton.border};
    border-radius: 40px;

    &:hover {
      background-color: ${(props) => props.theme.primaryButton.bgHover};
      color: ${(props) => props.theme.primaryButton.textHover};
    }
  }

  img {
    position: absolute;
    display: inline-block;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0 0 10px ${(props) => props.theme.form.shadow};
    top: -310%;
    right: -25%;
    opacity: 0;
  }

  &:hover {
    img {
      transition: 1.7s;
      opacity: 1;
    }
  }
`;
