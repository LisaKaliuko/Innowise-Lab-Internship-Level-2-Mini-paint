import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0px auto;
`;

export const PicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const PictureBlock = styled.div`
  margin: 10px;

  img {
    width: 300px;
    border: 1px solid ${(props) => props.theme.gallery.imgBorder};
  }
`;

export const Author = styled.p`
  margin: 5px 0px 0px 0px;
  font-size: 18px;
  text-align: center;
`;
