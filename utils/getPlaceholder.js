import { getImage } from '@plaiceholder/next';
import { getBase64 } from '@plaiceholder/base64';

const getPlaceholder = async (imgSrc) => {
  const img = await getImage(imgSrc);
  const imgBase64 = await getBase64(img);

  return { imgSrc, imgBase64 };
};

export default getPlaceholder;
