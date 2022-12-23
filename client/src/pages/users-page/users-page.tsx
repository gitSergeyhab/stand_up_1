export const User = ({user} : {user: number}) => {
  const x = (user + 1) * 1101;
  return (
    <li>
      <h2>{user}</h2>
      <p>{x}</p>
    </li>
  );
};


export const UsersPage = () => {
  const users = [1,2,3];

  const usersElements = users.map((item) => <User key={item} user={item}/>);

  return (
    <>
      <h1>Users</h1>

      <ul>{usersElements}</ul>

    </>
  );
};
