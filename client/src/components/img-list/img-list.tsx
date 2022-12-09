import { MouseEventHandler } from 'react';
// import { ImageList, ImageListItem } from '@mui/material';

import { PictureType } from '../../types/types';
import { Image, ImageList, ItemLi } from './img-list-style';

type ImageItemType = {
  item: PictureType;
  handleImgClick: MouseEventHandler<HTMLImageElement>;
}

const ImgItem = ({item, handleImgClick} :ImageItemType) => (
  // <ImageListItem key={item.id}>
  <Image
    onClick={handleImgClick}
    src={item.src}
    // alt={'item'}
    // loading="lazy"
    // style={{ maxHeight: '100%', maxWidth: '100%' }}
  />
  // </ImageListItem>
);

// const ImgItem = ({item, handleImgClick} :ImageItemType) => (
//   <ImageListItem key={item.id}>
//     <img
//       onClick={handleImgClick}
//       src={item.src}
//       alt={'item'}
//       loading="lazy"
//       style={{ maxHeight: '100%', maxWidth: '100%' }}
//     />
//   </ImageListItem>
// );

type ImgListProps = {
  pictures: PictureType[];
  handleImgClick: (pic: PictureType) => void;
  info?: boolean;
}
export const ImgList = ({pictures, info, handleImgClick}: ImgListProps) => {

  const imageElements = pictures.map((item) => <ItemLi info={info} key={item.id}><ImgItem item={item} handleImgClick={() => handleImgClick(item)}/></ItemLi>);

  return (
    <ImageList info={info}>{imageElements}</ImageList>
  );};
