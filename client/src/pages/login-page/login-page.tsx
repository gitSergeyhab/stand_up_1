// import { FormEventHandler, useRef, useState } from 'react';
// import { LoginSendType, useLoginUserMutation } from '../../store/user-api';
// import { useNavigate } from 'react-router-dom';
// import { Header, RegButton, RegForm, RegInput } from '../registration-page/registration-page-style';
// import { ServerError, UserErrorMessage } from '../../const/errors';
// import { UserErrorsBlock } from '../../components/user-errors-block/user-errors-block';
// import { DataErrorType } from '../../types/types';
// import { LoginUserDataCC, LoginUserDataSC } from '../../types/user-types';
// import { storageUtils } from '../../utils/storage-utils';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../store/actions';
// import { api } from '../../store/axios-api';
// import { adaptLoginUserDataToClient } from '../../utils/adapters/user-adapters';


// export const LoginPage = () => {

//   const [loginUser] = useLoginUserMutation();


//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);

//   const [errors, setErrors] = useState<string[]>([]);
//   const [disable, setDisable] = useState(false);

//   const setAble = () => setDisable(false);


//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // const onSuccessReg = () => navigate('/');
//   const onSuccessReg = (res: LoginUserDataCC) => {
//     storageUtils.setData(res);
//     dispatch(setUser(res.user));
//     navigate('/');
//   };

//   // const setDataErrors = (err: DataErrorType) => setErrors(err.data.errors || [ServerError.Default]);

//   const setDataErrors = (res: { response: DataErrorType}) => {
//     console.log(res.response.data);
//     setErrors(res.response.data.errors || [ServerError.Default]);};

//   const logUser2 = ({email, password}: LoginSendType) => {
//     api.post<LoginUserDataSC>('/login', {email, password})
//       .then((res) => {
//         console.log(res.data);
//         console.log(res.headers);

//         return adaptLoginUserDataToClient(res.data);
//       })


//       .then(onSuccessReg)
//       .catch(setDataErrors)
//       .finally(setAble);
//   };


//   const handleLoginSubmit: FormEventHandler = ( evt ) => {
//     evt.preventDefault();
//     setDisable(true);

//     const email = emailRef.current?.value;
//     const password = passwordRef.current?.value;


//     if (!password || password.length < 8) {
//       setErrors([UserErrorMessage.Password]);
//       setAble();
//     } else if (email) {
//       logUser2({email,password});
//       // loginUser({ email, password }).unwrap()
//       //   .then((res) => onSuccessReg(res))
//       //   .catch(setDataErrors)
//       //   .finally(setAble);
//     }

//   };

//   const errorBlock = <UserErrorsBlock errors={errors}/>;


//   return (
//     <>
//       <Header> Вход </Header>
//       <RegForm disabled={disable} onSubmit={handleLoginSubmit}>
//         <RegInput type={'email'} placeholder='your email' ref={emailRef} required/>
//         <RegInput type={'password'} placeholder='your password' ref={passwordRef} required/>
//         {errorBlock}
//         <RegButton disabled={disable}> Войти </RegButton>


//       </RegForm>
//     </>
//   );
// };


import { FormEventHandler, useRef, useState } from 'react';
import { Header, RegButton, RegForm, RegInput } from '../registration-page/registration-page-style';
import { UserErrorMessage } from '../../const/errors';
import { UserErrorsBlock } from '../../components/user-errors-block/user-errors-block';

import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { LogRegMessage } from '../../components/common/common';
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {


  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<string[]>([]);
  const [disable, setDisable] = useState(false);

  const setAble = () => setDisable(false);


  const navigate = useNavigate();


  // const setDataErrors = (err: DataErrorType) => setErrors(err.data.errors || [ServerError.Default]);

  const dispatch = useAppDispatch();


  const handleLoginSubmit: FormEventHandler = ( evt ) => {
    evt.preventDefault();


    setDisable(true);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;


    if (!password || password.length < 8) {
      setErrors([UserErrorMessage.Password]);
      setAble();
    } else if (email) {
      dispatch(loginAction({password, email}, () => navigate('/'), setAble, setErrors));
    }

  };


  const errorBlock = <UserErrorsBlock errors={errors}/>;


  return (
    <>
      <Header> Вход </Header>
      <RegForm disabled={disable} onSubmit={handleLoginSubmit}>
        <RegInput type={'email'} placeholder='your email' ref={emailRef} required/>
        <RegInput type={'password'} placeholder='your password' ref={passwordRef} required/>
        {errorBlock}
        <RegButton disabled={disable}> Войти </RegButton>
        <LogRegMessage offer='регистрация' question='нет аккаунта?' to='/registration'/>


      </RegForm>
    </>
  );
};

