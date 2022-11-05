import { PictureType } from '../../types/types';

export const Picture = ({item, name} : {item : PictureType; name: string}) => (
  <img src={item.src} alt={name} width={'20%'}/>
  // <img src={'/img/default/comedian.jpg' || item.src} alt={name} width={'20%'}/>

);
