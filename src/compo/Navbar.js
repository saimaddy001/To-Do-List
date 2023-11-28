// Navbar.js
// Navbar.js
import React, { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css';
import Home from './Home';

const Navbar = () => {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);
  let count = 0;

  const add = () => {
    setTodo([...todo, { no: count++, text: inputRef.current.value, display: '' }]);
    inputRef.current.value = '';
  };

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem('todo'));
    if (storedTodo) {
      setTodo(storedTodo);
    }
  }, []);

  useEffect(() => {
    const saveToLocalStorage = setTimeout(() => {
      localStorage.setItem('todo', JSON.stringify(todo));
    }, 100);

    return () => clearTimeout(saveToLocalStorage);
  }, [todo]);

  return (
    <div className='todo'>
      <div className='todolist'>To_Do_List</div>
      <div className='additem'>
        <input type='text' ref={inputRef} placeholder='Add your task' className='todo-input' />
        <div className='todo-add' onClick={add}>Add</div>
      </div>
      <div className='todo-list'>
        {todo.map((item, index) => (
          <Home key={index} no={item.no} display={item.display} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;


