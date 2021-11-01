import styled, { css } from 'styled-components';

export const ComponentContainer = styled.div`
  position: relative;
  border: 2px solid ${(props) => props.theme.drawingPanel.border};
  padding: 7px;
  width: 100px;
`;

export const Title = styled.h3`
  margin: 5px 0px 10px 0px;
  text-align: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Icon = styled.p`
  border: 2px solid ${(props) => props.theme.drawingPanel.border};
  border-radius: 5px;
  padding: 3px;
  margin: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${(props) =>
    props.className?.includes('selected')
      ? css`
          background-color: ${(props) => props.theme.drawingPanel.selectedTool};
        `
      : ''}

  &:hover {
    background-color: ${(props) => props.theme.drawingPanel.iconBgHover};
  }
`;

export const Range = styled.span`
  position: absolute;
  top: 30px;
  left: -11px;
  display: flex;
  border: 2px solid ${(props) => props.theme.drawingPanel.border};
  background-color: ${(props) => props.theme.drawingPanel.thicknessBg};
  height: 30px;
`;

export const Palette = styled.span`
  position: absolute;
  top: 70px;
  right: -45px;
`;
