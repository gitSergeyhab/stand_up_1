import { ResourceName } from '../../const';
import { SimpleDict } from '../../pages/one-comedian-page/one-comedian-page';
import { ResourceType } from '../../types/types';
import { SocialSVG } from '../social-svg/social-svg';


export const ResourceBootstrapClasses: SimpleDict = {
  Site: '',
  Facebook: 'bi bi-facebook',
  YouTube: 'bi bi-youtube',
  WhatsApp: 'bi bi-whatsapp',
  Instagram: 'bi bi-instagram',
  VKontakte: 'fa fa-vk',
  Telegram: 'bi bi-telegram',
};


export const SocialLink = ({item} : {item : ResourceType}) => (


  <a href={item.href} style={{color: '#1C0D0F'}}>
    <SocialSVG name={item.type as ResourceName}/>
  </a>
);
