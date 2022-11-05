import { MouseEventHandler } from 'react';
import { ImageList, ImageListItem } from '@mui/material';

import { PictureType } from '../../types/types';

type ImageItemType = {
  item: PictureType;
  handleImgClick: MouseEventHandler<HTMLImageElement>;
}

const ImgItem = ({item, handleImgClick} :ImageItemType) => (
  <ImageListItem key={item.id}>
    <img
      onClick={handleImgClick}
      src={item.src}
      alt={'item'}
      loading="lazy"
      style={{ maxHeight: '100%', maxWidth: '100%' }}
    />
  </ImageListItem>
);

export const ImgList = ({pictures, handleImgClick}: {pictures: PictureType[]; handleImgClick: (pic: PictureType) => void}) => {

  const imageElements = pictures.map((item) => <ImgItem key={item.id} item={item} handleImgClick={() => handleImgClick(item)}/>);

  return (
    <ImageList
      sx={{ display: 'flex', justifyContent: 'center', cursor: 'pointer'}}
      cols={pictures.length} rowHeight={164}
    >
      {imageElements}
    </ImageList>
  );};
