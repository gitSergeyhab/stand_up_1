// import { Header, RegButton, RegForm, RegInput } from './registration-page-style';
// import { FormEventHandler, useRef, useState } from 'react';
// import { useRegisterUserMutation } from '../../store/user-api';
// import { useNavigate } from 'react-router-dom';
// import { ServerError, UserErrorMessage } from '../../const/errors';
// import { UserErrorsBlock } from '../../components/user-errors-block/user-errors-block';
// import { DataErrorType } from '../../types/types';


// type RefType = string | undefined
// type ErrorMessagesArgs = {nik: RefType; email: RefType; password: RefType; passwordRepeat: RefType};

// const getErrorMessages = ({nik, email, password, passwordRepeat}: ErrorMessagesArgs) => {

//   const errorMessages = [];

//   if ([nik, email, password, passwordRepeat].some((item) => !item)) {
//     errorMessages.push(UserErrorMessage.All);
//   }

//   if (nik && (nik.length > 50 || nik.length < 3) ) {
//     errorMessages.push(UserErrorMessage.Nik);
//   }

//   if (password && password.length < 8 ) {
//     errorMessages.push(UserErrorMessage.Password);
//   }

//   if (password && passwordRepeat && password !== passwordRepeat ) {
//     errorMessages.push(UserErrorMessage.PasswordRepeat);
//   }

//   return errorMessages;
// };


// export const RegistrationPage = () => {

//   const [regUser] = useRegisterUserMutation();

//   const nikRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);
//   const passwordRepeatRef = useRef<HTMLInputElement>(null);

//   const [errors, setErrors] = useState<string[]>([]);
//   const [disable, setDisable] = useState(false);
//   const setAble = () => setDisable(false);

//   const navigate = useNavigate();

//   const onSuccessReg = () => navigate('/login');
//   const setDataErrors = (err: DataErrorType) => setErrors(err.data.errors || [ServerError.Default]);


//   const handleRegSubmit: FormEventHandler = ( evt ) => {
//     evt.preventDefault();
//     setDisable(true);

//     const nik = nikRef.current?.value;
//     const email = emailRef.current?.value;
//     const password = passwordRef.current?.value;
//     const passwordRepeat = passwordRepeatRef.current?.value;


//     const errorMessages = getErrorMessages({nik, email, password, passwordRepeat});
//     if (errorMessages.length) {
//       setErrors(errorMessages);
//       setAble();
//     } else {
//       setErrors([]);
//       if (email && nik && password && passwordRepeat) {
//         regUser({ email, nik, password, passwordRepeat }).unwrap()
//           .then(onSuccessReg)
//           .catch(setDataErrors)
//           .finally(setAble);
//       }
//     }
//   };

//   const errorBlock = <UserErrorsBlock errors={errors}/>;


//   return (
//     <>
//       <Header> Регистрация </Header>
//       <RegForm disabled={disable} onSubmit={handleRegSubmit}>
//         <RegInput type={'text'} placeholder='your nik' ref={nikRef} required/>
//         <RegInput type={'email'} placeholder='your email' ref={emailRef} required/>
//         <RegInput type={'password'} placeholder='your password' ref={passwordRef} required/>
//         <RegInput type={'password'} placeholder='repeat password' ref={passwordRepeatRef} required/>
//         {errorBlock}
//         <RegButton disabled={disable}> Зарегистрироваться </RegButton>
//       </RegForm>
//     </>
//   );
// };

import { Header, RegButton, RegForm, RegInput } from './registration-page-style';
import { FormEventHandler, useRef, useState } from 'react';
// import { useRegisterUserMutation } from '../../store/user-api';
import { useNavigate } from 'react-router-dom';
import { /*ServerError,*/ UserErrorMessage } from '../../const/errors';
import { UserErrorsBlock } from '../../components/user-errors-block/user-errors-block';
// import { DataErrorType } from '../../types/types';
import { registrationAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { LogRegMessage } from '../../components/common/common';


type RefType = string | undefined
type ErrorMessagesArgs = {nik: RefType; email: RefType; password: RefType; passwordRepeat: RefType};

const getErrorMessages = ({nik, email, password, passwordRepeat}: ErrorMessagesArgs) => {

  const errorMessages = [];

  if ([nik, email, password, passwordRepeat].some((item) => !item)) {
    errorMessages.push(UserErrorMessage.All);
  }

  if (nik && (nik.length > 50 || nik.length < 3) ) {
    errorMessages.push(UserErrorMessage.Nik);
  }

  if (password && password.length < 8 ) {
    errorMessages.push(UserErrorMessage.Password);
  }

  if (password && passwordRepeat && password !== passwordRepeat ) {
    errorMessages.push(UserErrorMessage.PasswordRepeat);
  }

  return errorMessages;
};

export const RegistrationPage = () => {

  // const [regUser] = useRegisterUserMutation();

  const nikRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<string[]>([]);
  const [disable, setDisable] = useState(false);
  const setAble = () => setDisable(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const setDataErrors = (err: DataErrorType) => setErrors(err.data.errors || [ServerError.Default]);


  const handleRegSubmit: FormEventHandler = ( evt ) => {
    evt.preventDefault();
    setDisable(true);

    const nik = nikRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordRepeat = passwordRepeatRef.current?.value;


    const errorMessages = getErrorMessages({nik, email, password, passwordRepeat});
    if (errorMessages.length) {
      // console.log('!  !reg', {errorMessages});

      setErrors(errorMessages);
      setAble();
    } else {
      // console.log('reg', {errorMessages});
      setErrors([]);
      if (email && nik && password && passwordRepeat) {
        // dispatch(registrationAction({email, password, nik, passwordRepeat}, () => navigate('/login'), setAble, setErrors));
        dispatch(registrationAction({email, password, nik, passwordRepeat}, () => navigate('/login'), setAble, setErrors));

      }
    }
  };

  const errorBlock = <UserErrorsBlock errors={errors}/>;


  return (
    <>
      <Header> Регистрация </Header>
      <RegForm disabled={disable} onSubmit={handleRegSubmit}>
        <RegInput type={'text'} placeholder='your nik' ref={nikRef} required/>
        <RegInput type={'email'} placeholder='your email' ref={emailRef} required/>
        <RegInput type={'password'} placeholder='your password' ref={passwordRef} required/>
        <RegInput type={'password'} placeholder='repeat password' ref={passwordRepeatRef} required/>
        {errorBlock}
        <RegButton disabled={disable}> Зарегистрироваться </RegButton>
        <LogRegMessage offer='вход' question='уже есть аккаунт?' to='/login'/>

      </RegForm>
    </>
  );
};
