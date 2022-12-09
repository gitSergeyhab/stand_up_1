import { usePostUserMutation } from '../../store/user-api';
import { ErrorBlockUl, Header, RegButton, RegForm, RegInput } from './registration-page-style';
import { FormEventHandler, useRef, useState } from 'react';

type RefType = React.RefObject<HTMLInputElement>;


type ErrorMessagesArgs = {nikRef: RefType; emailRef: RefType; passwordRef: RefType; passwordRepeatRef: RefType};

const getErrorMessages = ({nikRef, emailRef, passwordRef, passwordRepeatRef}: ErrorMessagesArgs) => {

  const errorMessages = [];

  if ([nikRef, emailRef, passwordRef, passwordRepeatRef].some((item) => !item.current?.value)) {
    errorMessages.push('Все поля должны быть заполнены');
  }

  if (nikRef.current?.value && (nikRef.current?.value.length > 50 || nikRef.current?.value.length < 3) ) {
    errorMessages.push('Nik должен быть не больше 50 символов и не меньше 3');
  }

  if (passwordRef.current?.value && passwordRef.current?.value.length < 8 ) {
    errorMessages.push('пароль должен быть не меньше 8 символов');
  }

  if (passwordRef.current?.value && passwordRepeatRef.current?.value && passwordRef.current?.value !== passwordRepeatRef.current?.value ) {
    errorMessages.push('пароли должны совпадать');
  }

  return errorMessages;

};


// const Error = ({error} : { error: string }) => <li></li>

const ErrorBlock = ({errors} : { errors: string[] }) => {

  const errorElements = errors.length ? <ErrorBlockUl>{errors.map((item) => <li key={item}>{item}</li>)}</ErrorBlockUl> : null;

  return errorElements;


};

export const RegistrationPage = () => {
  const [postUser] = usePostUserMutation();

  const nikRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<string[]>([]);


  const handleRegSubmit: FormEventHandler = /*async*/( evt ) => {
    evt.preventDefault();

    const errorMessages = getErrorMessages({nikRef, emailRef, passwordRef, passwordRepeatRef});
    if (errorMessages.length) {
      setErrors(errorMessages);
    } else {
      setErrors([]);
      console.log('ok');
    }
  };

  const errorBlock = <ErrorBlock errors={errors}/>;


  return (
    <>
      <Header> Регистрация </Header>
      <RegForm onSubmit={handleRegSubmit}>
        <RegInput type={'text'} placeholder='your nik' ref={nikRef} required/>
        <RegInput type={'email'} placeholder='your email' ref={emailRef} required/>
        <RegInput type={'password'} placeholder='your password' ref={passwordRef} required/>
        <RegInput type={'password'} placeholder='repeat password' ref={passwordRepeatRef} required/>
        {errorBlock}
        <RegButton> Зарегистрироваться </RegButton>


      </RegForm>
    </>
  );
};
