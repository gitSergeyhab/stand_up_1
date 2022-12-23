import { useState } from 'react';
import { LogoSvg } from '../logo-svg/logo-svg';
import {
  Nav, Icon, IconSpan, MenuMobile, MenuLi, MenuLink, MenuDesktop, UserAvatarBtn , UserAvatarImg, UserMenuLi, UserMenuLink, UserMenu, LogoContainer, UserContainer
} from './header-style';

import { ContentName, DefaultPath } from '../../const/const';
import { useSelector } from 'react-redux';
import { useLogoutUserMutation } from '../../store/user-api';
import { getUser } from '../../store/user-reducer/user-selectors';


const MENU_DATA = [
  'Main',
  ContentName.Comedians,
  ContentName.Events,
  ContentName.Places,
  ContentName.Shows
];


const USER_DATA = [
  {title: 'Профиль', to: '/user/profile'},
  {title: 'Настройки', to: '/user/settings'},
];


export const Header = () => {

  const [shown, setShown] = useState(false);
  const [shownUserMenu, setShownUserMenu] = useState(false);

  const user = useSelector(getUser);

  const id = user?.id;
  const email = user?.email;


  const [logout] = useLogoutUserMutation();


  const userSrc = user ? user.avatar : DefaultPath.UserAvatar ;
  const src = userSrc || DefaultPath.UserAvatar;

  const handleClickMenu = () => {setShown((val) => !val); };
  const handleClickUserMenu = () => {setShownUserMenu((val) => !val);};
  // const handleClickExit = () => {
  //   // console.log('exit');
  //   setShownUserMenu((val) => !val);
  // };

  const handleClickExit = () => {
    logout(null).unwrap()
      .then((res) => console.log({res}))
      .catch((err) => console.log({err}));
  };


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

  const exit = <UserMenuLi key={'exit'}><UserMenuLink onClick={handleClickExit} to='/'>Выйти</UserMenuLink> </UserMenuLi>;

  const noUserItem = <UserMenuLi><UserMenuLink to={'/login'}>Войти</UserMenuLink></UserMenuLi>;

  const userMenu = shownUserMenu ? (
    <UserMenu>
      {/* { user ? [...userMenuItems, exit] : noUserItem } */}

      {/* test */}
      {exit}
      {noUserItem}
      {/* test */}

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
          {email || 'no-auth'}
          <UserAvatarBtn radius={40} onClick={handleClickUserMenu}>
            <UserAvatarImg src={src}/>
          </UserAvatarBtn>

          {userMenu}
        </UserContainer>
      </MenuDesktop>
      <Icon shown={shown} onClick={handleClickMenu}>
        <IconSpan shown={shown}/>
      </Icon>
      <UserContainer small width={80}>
        {email || 'no-auth'}
        <UserAvatarBtn small radius={40} onClick={handleClickUserMenu}>
          <UserAvatarImg src={src}/>
        </UserAvatarBtn>
        {userMenu}
      </UserContainer>
      <MenuMobile shown={shown}>
        {navItems}
      </MenuMobile>
    </Nav>
  );};
