import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export const PicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PictureBlock = styled.div`
  margin: 10px;

  img {
    width: 250px;
    border: 1px solid ${(props) => props.theme.gallery.imgBorder};
  }
`;

export const Author = styled.p`
  margin: 5px 0px 0px 0px;
  font-size: 18px;
  text-align: center;
`;
