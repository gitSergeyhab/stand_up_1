import { FormEventHandler, useRef, useState } from 'react';
import { useLoginUserMutation } from '../../store/user-api';
import { useNavigate } from 'react-router-dom';
import { Header, RegButton, RegForm, RegInput } from '../registration-page/registration-page-style';
import { ServerError, UserErrorMessage } from '../../const/errors';
import { UserErrorsBlock } from '../../components/user-errors-block/user-errors-block';
import { DataErrorType } from '../../types/types';


export const LoginPage = () => {

  const [loginUser] = useLoginUserMutation();


  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<string[]>([]);
  const [disable, setDisable] = useState(false);

  const setAble = () => setDisable(false);


  const navigate = useNavigate();

  const onSuccessReg = () => navigate('/');
  const setDataErrors = (err: DataErrorType) => setErrors(err.data.errors || [ServerError.Default]);


  const handleLoginSubmit: FormEventHandler = ( evt ) => {
    evt.preventDefault();
    setDisable(true);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;


    if (!password || password.length < 8) {
      setErrors([UserErrorMessage.Password]);
      setAble();
    } else if (email) {
      loginUser({ email, password }).unwrap()
        .then(onSuccessReg)
        .catch(setDataErrors)
        .finally(setAble);
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


      </RegForm>
    </>
  );
};
