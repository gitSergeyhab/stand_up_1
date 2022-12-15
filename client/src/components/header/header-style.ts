import { Link } from 'react-router-dom';
import styled from 'styled-components';


type NavProps = { shown: boolean }


type UserAvatarProps = {
  radius: number;
  small?: boolean;
}

export const UserAvatarBtn = styled.button.attrs({ type: 'button' })<UserAvatarProps>`
  width: ${({ radius }) => radius}px;
  height: ${({ radius }) => radius}px;
  overflow: hidden;
  background-color: #000000;
  border-radius: 50%;
  cursor: pointer;
  outline: goldenrod solid 2px;

  &:hover, &:focus {
    outline: gold solid 2px;
  }

  @media (min-width: 900px) {
    display: ${({ small }) => small ? 'none' : ''}
  }
`;

export const UserAvatarImg = styled.img.attrs({ width: 40, height: 40 })`
  width: 100%;
  height: 100%;
`;


export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
    @media (min-width: 900px) {
      background: #300606;
    };
`;


export const MenuDesktop = styled.ul`
  display: none;


  @media (min-width: 900px) {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    height: 50px;
  };
`;

export const MenuMobile = styled.ul<NavProps>`
  margin: 0;

  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  background: #300606;
  z-index: 10;
  transition: all .4s ease-in-out;
  transform: translateY(-200%);
  border-bottom: #0d0101 2px solid;

  ${({ shown }) => shown ? 'transform: translateY(0);' : '' };

  @media (min-width: 900px) {
      display: none;
  };
`;


export const MenuLi = styled.li`
  flex-grow: 1;
  text-align: center;
  vertical-align: middle;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const MenuLink = styled(Link)`
    cursor: pointer;
    display: block;
    color: gold;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    &:hover, &:focus {
      background-color: #0d0101;
    }
`;

export const Icon = styled.a<NavProps>`
    height: 32px;
    width: 43px;
    margin: 3%;
    position: absolute;
    top: 10px;
    left: 3%;
    display: inline-block;
    vertical-align: middle;
    z-index: 20;
    border: none;
    background-color: inherit;
    cursor: pointer;

    @media (min-width: 900px) {
        display: none;
    };

    &::before, &::after {
        content: "";
        display: block;
        background: goldenrod;
        width: 100%;
        height: 4px;
        position: absolute;
        left: 0;
        transform-origin: center center;
        transform: rotate(0deg);
        transition: all 0.3s ease;

    }
    &::before {
        top: 2px;
        margin-top: -2px;
        ${({ shown }) => shown ? 'top: 50%;transform: rotate(45deg); background: rgb(255, 238, 0);' : '' }
    }

    &::after  {
        bottom: 2px;
        margin-bottom: -2px;
        ${({ shown }) => shown ? 'bottom: 50%; transform: rotate(-45deg); background: rgb(255, 238, 0);' : '' }
    }
`;

export const IconSpan = styled.span<NavProps>`
    display: block;
    background: goldenrod;
    width: 100%;
    height: 4px;
    margin-top: -2px;
    position: absolute;
    left: 0;
    top: 50%;

  background: ${({ shown }) => shown ? 'transparent;' : ''};
`;


export const UserMenu = styled.ul`
  position: absolute;
  top: 50px;
  right: 22px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 40;
  background-color: grey;
  border-radius: 3px;
  padding: 4px;
  outline: 2px solid #000000;
`;

export const UserMenuLi = styled.li`
  flex-grow: 1;
  text-align: left;
  vertical-align: middle;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const UserMenuLink = styled(Link)`
    cursor: pointer;
    display: block;
    color: gold;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    font-size: 10px;

    &:hover, &:focus {
      background-color: #0d0101;
    }
`;
type LogoContainerProp = {
  width: number;
  small?: boolean;
}

export const LogoContainer = styled(Link).attrs({ to: '/' })<LogoContainerProp>`
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => `${width}px`};
`;


export const UserContainer = styled.div<LogoContainerProp>`
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3%;
  position: absolute;
  top: 10px;
  right: 0;
  z-index: 20;
  display: inline-block;
  vertical-align: middle;
  width: ${({ width }) => `${width}px`};

  @media (min-width: 900px) {
    margin: 0;
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => `${width}px`};
    display: ${({ small }) => small ? 'none' : ''}
  }
`;
