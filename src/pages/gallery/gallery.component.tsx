import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllPics } from '@actions/draw.actions';
import { useTypedSelector } from '@hooks/use-typed-selector.hook';
import { PicObj } from '@interfaces/draw.interface';
import { selectAllPics, selectSortEmail } from '@selectors/draw.selectors';
import { Filter } from './components/filter';
import {
  PageContainer,
  PicsContainer,
  PictureBlock,
  Author,
} from './gallery.styles';

const GalleryComponent: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const arrOfPics: Array<PicObj> = useTypedSelector(selectAllPics);
  const sortEmail = useTypedSelector(selectSortEmail);
  let sortedArr: Array<PicObj> = [];

  if (sortEmail !== '') {
    sortedArr = arrOfPics.filter(({ user }) => user === sortEmail);
  } else if (sortEmail === '') {
    sortedArr = arrOfPics;
  }

  useEffect(() => {
    dispatch(getAllPics());
  }, [dispatch]);

  return (
    <PageContainer>
      <h1>Gallery</h1>
      {arrOfPics.length !== 0 && <Filter arrOfPics={arrOfPics} />}
      <PicsContainer>
        {sortedArr.length !== 0 &&
          sortedArr.map(({ user, picData }) => {
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
