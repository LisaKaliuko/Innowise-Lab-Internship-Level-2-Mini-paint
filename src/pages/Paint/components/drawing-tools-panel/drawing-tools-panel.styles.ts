import styled, { css } from 'styled-components';

export const ComponentContainer = styled.div`
  border: 1px solid ${(props) => props.theme.drawingPanel.border};
  padding: 7px;
  width: 100px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Icon = styled.p`
  border: 1px solid ${(props) => props.theme.drawingPanel.border};
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
