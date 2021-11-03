import styled from 'styled-components';

import { DEVICES } from '@src/shared/constants/devices-sizes.constants';

export const Content = styled.div`
  width: 90%;
  height: 100%;
  margin: 30px auto auto auto;

  @media ${DEVICES.tablet} {
    width: 70%;
  }

  @media ${DEVICES.laptop} {
    width: 60%;
    margin: 50px auto auto auto;
  }

  @media ${DEVICES.laptopL} {
    width: 50%;
  }
`;

export const Title = styled.div`
  background: ${(props) => props.theme.mainPage.title};
  font-family: 'Ceviche One', cursive;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  h1 {
    font-size: 30px;
    margin-top: 0px;
    margin-bottom: 20px;

    @media ${DEVICES.tablet} {
      font-size: 40px;
    }

    @media ${DEVICES.laptop} {
      font-size: 45px;
    }

    @media ${DEVICES.laptopL} {
      font-size: 55px;
    }
  }
`;

export const Text = styled.p`
  font-size: 16px;

  @media ${DEVICES.tablet} {
    font-size: 20px;
  }

  @media ${DEVICES.laptop} {
    font-size: 22px;
  }

  @media ${DEVICES.laptopL} {
    font-size: 25px;
  }
`;

export const PrimaryButton = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;

  a {
    padding: 15px 45px;
    color: ${(props) => props.theme.primaryButton.text};
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    border: 2px solid ${(props) => props.theme.primaryButton.border};
    border-radius: 40px;

    &:hover {
      background-color: ${(props) => props.theme.primaryButton.bgHover};
      color: ${(props) => props.theme.primaryButton.textHover};
    }

    @media ${DEVICES.laptop} {
      font-size: 25px;
    }
  }
`;
