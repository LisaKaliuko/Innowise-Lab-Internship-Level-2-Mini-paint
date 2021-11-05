import styled from 'styled-components';

import { DEVICES } from '@src/shared/constants/devices-sizes.constants';

export const Container = styled.div`
  height: 100%;
  width: 90%;
  margin: 20px auto auto auto;
`;

export const Title = styled.h1`
  margin: 0px;
  margin-bottom: 15px;
  font-size: 35px;
`;

export const Canvas = styled.canvas`
  display: block;
  margin: auto;
  border: 2px solid black;
  width: 100%;

  @media ${DEVICES.laptop} {
    width: 75%;
  }
`;

export const DrawingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;

  @media ${DEVICES.laptop} {
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;
