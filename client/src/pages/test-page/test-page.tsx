
import { AnyAction } from '@reduxjs/toolkit';
import { useEffect, useState, ChangeEventHandler, useRef, FormEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ReducerType } from '../../store/store';
import { fetchTodos, Todo, deleteTodo, addTodo } from '../../store/test-store';
import { checkSortedArray, getMinMax, sort } from '../../utils/test-utils';


const arr = [1,4,0,3,7,10, -100, -22,5,0, -1, 100];

const aa = [1,4,0,3,7,10, -100, -22,5,0, -1, 100];

const arr2 = ['1', '123', '34', '5'];

const sorted = [1,4,7,9,111];

const strArr = sort(arr).join(', ');
arr2.sort((a, b) => (+a - +b));

const check = checkSortedArray(sorted) ? 'YES' : 'NO';
const check2 = checkSortedArray(aa) ? 'YES' : 'NO';

const arrStr2 = arr2.join(', ');

const {min, max} = getMinMax(arr) || {};

const TodoItem = ({todo} : {todo: Todo}) => {

  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(deleteTodo(todo.id) as unknown as AnyAction);
  };

  const {completed, id, title, userId} = todo;
  // console.log({t});
  return (
    <>
      <h3>{title}</h3>
      {completed ? 'Completed' : 'No Completed'}
      <p>User ID: {userId}</p>
      <p>ID: {id}</p>
      <button onClick={handleClickDelete} type='button'>Delete</button>
    </>
  );
};


const AddTodoForm = () => {

  const [name, setName] = useState('');
  const checkBoxRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();


  const handleChange:ChangeEventHandler<HTMLInputElement> = (evt) => {
    setName(evt.currentTarget.value);
  };


  const handleSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();
    if (checkBoxRef.current && name) {
      const title = name;
      const completed = checkBoxRef.current.checked;
      const userId = 1;

      dispatch(addTodo({title, completed, userId}) as unknown as AnyAction);

    }
  };

  return(
    <form onSubmit={handleSubmit}>
      <input type={'text'} value={name} onChange={handleChange} />
      <label>
        <input type={'checkbox'} ref={checkBoxRef}/> Completed
      </label>

      <button>Add</button>
    </form>
  );
};


export const TestPage = () => {

  const test = 'Test';

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos() as unknown as AnyAction);
  }, [dispatch]);

  const {error, isLoading, todos} = useSelector((state: ReducerType) => state.test);

  if (error) {
    return <div>{error}!!!</div>;
  }

  if (isLoading) {
    return <div>Loading .... </div>;
  }

  const todosElements = todos.map((item) => <li key={item.id}><TodoItem todo={item}/></li> );


  return (
    <>
      <br/>
      <AddTodoForm/>
      <h1>Test</h1>
      {test}
      <ul>{todosElements}</ul>
      {min} / {max} / /{strArr} / {arrStr2}
      <br/>
      {check} /    {check2}

    </>
  );
};
