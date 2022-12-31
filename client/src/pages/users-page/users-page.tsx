import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../../store/axios-api';
import { TestUserCC, TestUserSC } from '../../types/user-types';
import { adaptTestUserToClient } from '../../utils/adapters/user-adapters';

export const User = ({user} : {user: TestUserCC}) => {
  const {id, nik, email, roles, activated} = user;

  const roleElements = roles && roles.length ? roles.map((item) => <li key={item}>{item}</li>) : null;
  return (
    <li>
      <h2>{nik}</h2>
      <p>{email}</p>
      <ul>{roleElements}</ul>
      <p>{activated}</p>
    </li>
  );
};


export const UsersPage = () => {
  // const users = [1,2,3];

  const [users, setUsers] = useState<TestUserCC[]>([]);
  // const dispatch = useDispatch()

  useEffect(() => {
    api.get<{users: TestUserSC[]; count: string}>('/')
      .then((res) => {
        const data = res.data.users;
        console.log(data);
        const usersData = data.map(adaptTestUserToClient);
        setUsers(usersData);
      })
      .catch((err) => console.log(err));
  }, []);

  const usersElements = users.map((item) => <User key={item.id} user={item}/>);

  return (
    <>
      <h1>Users</h1>

      <ul>{usersElements}</ul>

    </>
  );
};
