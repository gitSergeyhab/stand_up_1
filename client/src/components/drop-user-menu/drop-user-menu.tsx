// import { useLogoutUserMutation } from '../../store/user-api';
// import { AuthUserTypeCC } from '../../types/user-types';
// import { storageUtils } from '../../utils/storage-utils';
// import { UserMenuLi, UserMenuLink, UserMenuUl } from './drop-user-menu-style';


// type DropUserMenuProps = {
//   user: AuthUserTypeCC | null;
// }
// export const DropUserMenu = ({user} : DropUserMenuProps) => {


//   const [logout] = useLogoutUserMutation();

//   const handleClickExit = () => {
//     logout(null).unwrap()
//       .then(() => storageUtils.removeData())
//       .catch((err) => console.log({err}));
//   };


//   const exit = <UserMenuLi key={'exit'}><UserMenuLink onClick={handleClickExit} to='/'>Выйти</UserMenuLink> </UserMenuLi>;

//   const userMenuElement = user ? <UserMenuLi key={'user'}><UserMenuLink to={`/users/${user.id}`}>{user.nik}</UserMenuLink></UserMenuLi> : null;

//   const settings = <UserMenuLi key={'settings'}><UserMenuLink to={'/settings'}>Настройки</UserMenuLink></UserMenuLi>;


//   return (
//     <UserMenuUl>
//       { user ? [userMenuElement, settings, exit] : null }
//     </UserMenuUl>
//   );
// };

// // my-rate

import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { logoutAction } from '../../store/api-actions';
import { AuthUserTypeCC } from '../../types/user-types';
import { UserMenuLi, UserMenuLink, UserMenuUl } from './drop-user-menu-style';


type DropUserMenuProps = {
  user: AuthUserTypeCC | null;
}
export const DropUserMenu = ({user} : DropUserMenuProps) => {


  const dispatch = useAppDispatch();

  const handleClickExit:React.MouseEventHandler<HTMLAnchorElement> = () => {dispatch(logoutAction());};

  const exit = <UserMenuLi key={'exit'}><UserMenuLink onClick={handleClickExit} to='/'>Выйти</UserMenuLink> </UserMenuLi>;

  const userMenuElement = user ? <UserMenuLi key={'user'}><UserMenuLink to={`/users/${user.id}`}>{user.nik}</UserMenuLink></UserMenuLi> : null;

  const settings = <UserMenuLi key={'settings'}><UserMenuLink to={'/settings'}>Настройки</UserMenuLink></UserMenuLi>;

  const login = <UserMenuLi key={'login'}><UserMenuLink to={'/login'}>Вход</UserMenuLink></UserMenuLi>;
  const registration = <UserMenuLi key={'registration'}><UserMenuLink to={'/registration'}>Регистрация</UserMenuLink></UserMenuLi>;


  return (
    <UserMenuUl>
      { user ? [userMenuElement, settings, exit, login, registration] : null }
    </UserMenuUl>
  );
};

// my-rate
