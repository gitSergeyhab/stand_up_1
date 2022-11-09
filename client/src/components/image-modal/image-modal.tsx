import { KeyboardEventHandler, useState, MouseEventHandler } from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import {Box, ImageList, ImageListItem} from '@mui/material';

import {PictureType} from '../../types/types';
import { KeyNext, KeyPrev } from '../../const/const';


const getImageNumbers = (images: PictureType[]) => {
  const len = images.length < 6 ? images.length : 5;
  const current = Math.floor((len - 1) / 2);

  return {len, current};
};


const getImg = (dir: 1 | -1, images: PictureType[], currentPic: PictureType,) => {
  const idx = images.findIndex((item) => item.id === currentPic.id);
  const len = images.length;
  const nextIdx = dir + idx;

  if (nextIdx > len - 1) {
    return images[0];
  }
  if (nextIdx === - 1) {
    return images[len - 1];
  }

  return images[nextIdx];
};


const getCurrentList = (currentPic: PictureType, fullList: PictureType[]) => {
  const {len} = getImageNumbers(fullList);
  const fullLen = fullList.length;
  const id = currentPic.id;
  const idx = fullList.findIndex((item) => item.id === id);

  if (len < 5) {
    return fullList;
  }

  const firstPart = idx - 1 > 0 ?
    fullList.slice(idx - 2, idx) :
    [...fullList.slice(fullLen + idx - 2, fullLen), ...fullList.slice(0, idx)];
  const lastPart = idx + 2 < fullLen ?
    fullList.slice(idx, idx + 3) :
    [...fullList.slice(idx, fullLen), ...fullList.slice(0, 3 - (fullLen - idx))];

  return [...firstPart, ...lastPart];
};


type ImageItemType = {
  item: PictureType;
  currentImg: PictureType;
  handleImgClick: MouseEventHandler<HTMLImageElement>;
}

const ImageItem = ({item, currentImg, handleImgClick} :ImageItemType) => (
  <ImageListItem key={item.id} sx={{
    outline: item.id === currentImg.id ? 'solid #ff9b05 1px;' : '',
    mt: '2px',
    opacity: item.id === currentImg.id ? 1 : 0.5
  }}
  >
    <img
      onClick={handleImgClick}
      src={item.src}
      alt={'item'}
      loading="lazy"
      style={{ maxHeight: '100%', maxWidth: '100%' }}
    />
  </ImageListItem>
);


type ImageModalProps = {
  pictures : PictureType[];
  currentImg: PictureType;
  setImg: ( currentImg: PictureType) => void;
  open: 'center' | 'fullscreen' | undefined;
  onClose: () => void;
}

export const ImageModal = ({pictures, currentImg, setImg, open, onClose} : ImageModalProps) => {

  const [currentImgList, setImgList] = useState(getCurrentList(currentImg, pictures));

  const handleImgClick = (img: PictureType) => {
    setImg(img);
    setImgList(getCurrentList(img, pictures));
  };

  const consDown: KeyboardEventHandler<HTMLDivElement> = (evt) => {
    const key = evt.code;

    if (KeyNext.some((item) => item === key)) {
      handleImgClick(getImg(1, pictures, currentImg));
    }

    if (KeyPrev.some((item) => item === key)) {
      handleImgClick(getImg(-1, pictures, currentImg));
    }
  };

  const imageElements = currentImgList.map((item) => <ImageItem key={item.id} currentImg={currentImg} handleImgClick={() => handleImgClick(item)} item={item}/>);


  return (
    <Modal open={!!open} onClose={onClose} onKeyDown={consDown}>

      <ModalDialog
        aria-labelledby="layout-modal-title"
        aria-describedby="layout-modal-description"
        layout={open || undefined}
        sx={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', bgcolor: 'rgba(7, 0, 1, 0.98);', }}
      >
        <ModalClose sx={{ color: '#ff9b05' }} />

        <Box sx={{ height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={currentImg.src} alt={'currentImg'} style={{ maxHeight: '100%', maxWidth: '100%' }}/>
        </Box>

        <ImageList sx={{ width: '80%', minWidth: 400, height: '20%' }} cols={currentImgList.length} rowHeight={164}>
          {imageElements}
        </ImageList>
      </ModalDialog>
    </Modal>
  );
};
