import { useState } from 'react';
import { LogoSvg } from '../logo-svg/logo-svg';
import {
  Nav, Icon, IconSpan, MenuMobile, MenuLi, MenuLink, MenuDesktop, UserAvatarBtn , UserAvatarImg, UserMenuLi, UserMenuLink, UserMenu, LogoContainer, UserContainer
} from './header-style';

import { ContentName, DefaultPath } from '../../const/const';


const MENU_DATA = [
  'Main',
  ContentName.Comedians,
  ContentName.Events,
  ContentName.Places,
  ContentName.Shows
];

// const MENU_DATA = [
//   'Main',
//   ContentName.comedians,
//   ContentName.events,
//   ContentName.places,
//   ContentName.shows
// ];


const USER_DATA = [
  {title: 'Профиль', to: '/user/profile'},
  {title: 'Настройки', to: '/user/settings'},
  {title: 'Выйти', to: '#'},
];


const defaultUser = {
  avatar: '/img/test/black.jpg',
  nik: 'user'
};

export const Header = () => {

  const [shown, setShown] = useState(false);
  const [shownUserMenu, setShownUserMenu] = useState(false);

  const user = defaultUser;

  const userSrc = user ? user.avatar : DefaultPath.UserAvatar ;

  const handleClickMenu = () => {setShown((val) => !val); };
  const handleClickUserMenu = () => {setShownUserMenu((val) => !val);};


  const navItems = MENU_DATA.map((item) => (
    <MenuLi key={item}>
      <MenuLink to={item}>{item}</MenuLink>
    </MenuLi>
  ));

  const userMenuItems = USER_DATA.map((item) => (
    <UserMenuLi key={item.title}>
      <UserMenuLink
        onClick={() => setShownUserMenu(false)}
        to={item.to}
      >{item.title}
      </UserMenuLink>
    </UserMenuLi>
  ));

  const userMenu = shownUserMenu ? (
    <UserMenu>
      {userMenuItems}
    </UserMenu>
  ) : null;

  return (

    <Nav>
      <MenuDesktop>
        <LogoContainer width={120}>
          Stand
          <LogoSvg width={20}/>
          Up
        </LogoContainer>
        {navItems}

        <UserContainer width={120}>
          <UserAvatarBtn radius={40} onClick={handleClickUserMenu}>
            <UserAvatarImg src={userSrc}/>
          </UserAvatarBtn>

          {userMenu}
        </UserContainer>
      </MenuDesktop>
      <Icon shown={shown} onClick={handleClickMenu}>
        <IconSpan shown={shown}/>
      </Icon>
      <UserContainer small width={80}>
        <UserAvatarBtn small radius={40} onClick={handleClickUserMenu}>
          <UserAvatarImg src={userSrc}/>
        </UserAvatarBtn>
        {userMenu}
      </UserContainer>
      <MenuMobile shown={shown}>
        {navItems}
      </MenuMobile>
    </Nav>
  );};
