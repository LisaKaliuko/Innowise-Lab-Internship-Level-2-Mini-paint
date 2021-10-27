import { firestore } from '../..';

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
