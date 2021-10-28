import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllPics } from '../../core/actions/draw.actions';
import { useTypedSelector } from '../../core/hooks/use-typed-selector.hook';
import { PicObj } from '../../core/interfaces/draw.interface';
import { selectAllPics } from '../../core/selectors/draw.selectors';
import {
  PageContainer,
  PicsContainer,
  PictureBlock,
  Author,
} from './gallery.styles';

const GalleryComponent: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const arrOfPics: Array<PicObj> = useTypedSelector(selectAllPics);

  useEffect(() => {
    dispatch(getAllPics());
  }, [dispatch]);

  return (
    <PageContainer>
      <h1>Gallery</h1>
      <PicsContainer>
        {arrOfPics.length !== 0 &&
          arrOfPics.map((pic) => {
            return (
              <PictureBlock key={pic?.picData}>
                <img src={pic?.picData} alt="pic" />
                <Author>Picture by {pic?.user}</Author>
              </PictureBlock>
            );
          })}
      </PicsContainer>
    </PageContainer>
  );
};

export default GalleryComponent;
