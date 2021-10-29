import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllPics } from '@actions/draw.actions';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { PicObj } from '@interfaces/draw.interface';
import { selectAllPics } from '@selectors/draw.selectors';
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
          arrOfPics.map(({ user, picData }) => {
            return (
              <PictureBlock key={picData}>
                <img src={picData} alt="pic" />
                <Author>Picture by {user}</Author>
              </PictureBlock>
            );
          })}
      </PicsContainer>
    </PageContainer>
  );
};

export default GalleryComponent;
