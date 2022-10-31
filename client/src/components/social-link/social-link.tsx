import { SimpleDict } from '../../pages/one-comedian-page/one-comedian-page';
import { ResourceType } from '../../types/types';

export const ResourceName: SimpleDict = {
  Site: 'Site',
  Facebook: 'Facebook',
  YouTube: 'YouTube',
  WhatsApp: 'WhatsApp',
  Instagram: 'Instagram',
  VKontakte: 'VKontakte',
  Telegram: 'Telegram',
};

const vk = <svg width={16} height={16} data-name="Layer 1" id="Layer_1" fill='currentColor' stroke='inherit' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><path d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0ZM392.363,342.9H359.878a23.41,23.41,0,0,1-18.318-8.8c-9.742-12.231-28.934-33.918-49.085-43.233a7.666,7.666,0,0,0-10.916,6.928v32.128A12.974,12.974,0,0,1,268.585,342.9H253.564c-19.534,0-61.6-11.891-95.119-60.719-28.56-41.6-41.291-73.84-48.715-99.98a10.3,10.3,0,0,1,9.922-13.093h32.862a15.226,15.226,0,0,1,14.6,10.861c6.111,20.439,21.939,64.53,49.917,86.486a5.788,5.788,0,0,0,9.371-4.54V210.449c0-10.171-4.408-20.347-11.288-28.3a7.878,7.878,0,0,1,5.946-13.046h50.666a9.838,9.838,0,0,1,9.838,9.837v69.325a5.468,5.468,0,0,0,8.636,4.456c9.3-6.62,17.265-16.4,24.591-27.393,9.22-13.828,20.471-36.686,26.115-48.549A13.457,13.457,0,0,1,353.06,169.1H388.9a8.788,8.788,0,0,1,7.873,12.7c-9.044,18.14-26.659,51.418-43.235,70.942a13.877,13.877,0,0,0,1.623,19.54c10.805,9.232,27.673,26.3,45.859,54.729A10.305,10.305,0,0,1,392.363,342.9Z"/></svg>;
export const ResourceBootstrapClasses: SimpleDict = {
  Site: '',
  Facebook: 'bi bi-facebook',
  YouTube: 'bi bi-youtube',
  WhatsApp: 'bi bi-whatsapp',
  Instagram: 'bi bi-instagram',
  VKontakte: 'fa fa-vk',
  Telegram: 'bi bi-telegram',
};


export const SocialLink = ({item} : {item : ResourceType}) => {
  const element = ResourceName[item.type] === ResourceName.VKontakte ? vk : <i className={ResourceBootstrapClasses[item.type] || ''}></i>;
  return (
    <a href={item.href} style={{color: '#1C0D0F'}}>{element}</a>
  );
};
