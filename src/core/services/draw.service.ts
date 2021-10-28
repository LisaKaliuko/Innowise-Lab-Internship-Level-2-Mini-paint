import { firestore } from '../..';
import { PicObj } from '../interfaces/draw.interface';

export const sendPic = (
  picture: string,
  user: string,
  cb: () => void
): void => {
  firestore
    .collection('pics')
    .add({
      user: user,
      picData: picture,
    })
    .then(() => cb());
};

export const getPics = (): Promise<Array<PicObj>> => {
  return firestore
    .collection('pics')
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => ({
        user: doc.data().user,
        picData: doc.data().picData,
      }))
    );
};
