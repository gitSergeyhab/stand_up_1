import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Container, AppBar, Box, Toolbar, IconButton, Typography, Avatar, Button, MenuItem, Tooltip, Menu } from '@mui/material';

import { useState } from 'react';
import { LogoSvg } from '../logo-svg/logo-svg';
import { Nav, Icon, IconSpan, MenuMobile } from './header-style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import './x.css';
import { ContentName } from '../../const/const';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const MENU_DATA = [
  'Main',
  ContentName.Comedians,
  ContentName.Events,
  ContentName.Places,
  ContentName.Shows
];


export const MenuDesktop = styled.ul`
margin: 0;
list-style: none;
display: none;
display: flex;
flex-flow: row wrap;
justify-content: space-between;

@media (max-width: 900px) {
    display: none;
};
`;

export const MenuLink = styled(Link)`
    cursor: pointer;
    display: block;
    /* line-height: 2; */
    /* padding: 25px 0;  */
    /* width: 100px; */
    color: gold;
    text-decoration: none;
    text-transform: uppercase;

    /* @media (max-width: 900px) {
        display: none;
    }; */
`;

export const MenuLi = styled.li`
flex-grow: 1;
text-align: center;
height: 100%;

`;


export const Header = () => {

  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(true);

  const handleClickMenu = () => {setShown((val) => !val); };
  // const handleClickToggle = () => {
  //   setOpen((val) => !val);
  //   console.log('open', open);
  // };

  // console.log(active, open);


  const navItems = MENU_DATA.map((item) => (
    <MenuLi key={item}>
      <MenuLink to={item}>{item}</MenuLink>
    </MenuLi>
  ));


  return (

    <Nav>
      <MenuDesktop>
        {navItems}
      </MenuDesktop>
      <Icon shown={shown} onClick={handleClickMenu}>
        <IconSpan shown={shown}/>
      </Icon>
      <MenuMobile shown={shown}>
        {navItems}
        {/* <li><MenuLink to={'/'}>Listings</MenuLink></li>
        <li><MenuLink to={'/'}>News</MenuLink></li>
        <li><MenuLink to={'/'}>Blog</MenuLink></li>
        <li><MenuLink to={'/'}>About us</MenuLink></li>
        <li><MenuLink to={'/'}>Contact us</MenuLink></li> */}
      </MenuMobile>
    </Nav>
  );};

// export const Header = () => {
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" sx={{
//       background: '#300606',
//       color: 'gold',
//       position: 'fixed',
//       marginRight: 'auto',
//       top: 0,
//       zIndex: 3
//     }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <LogoSvg width={24}/>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
//           <LogoSvg width={30}/>


//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="GRemy Sharp" src="/img/default/comedian.jpg" />

//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
