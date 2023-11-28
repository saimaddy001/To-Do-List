// Home.js
import React from 'react';
import '../styles/Home.css'
import tick from '../Assets/tick.png';
import cross from '../Assets/cross.png';
import ttick from '../Assets/not_tick.png';

const Home = ({ display, text, no }) => {
  return (
    <div className='todo-items'>
      <div className='todo-container'>
        <img src={tick} alt='' />
        <img src={ttick} alt='' />
        <div className='todoitem-text'>{text}</div>
      </div>
      <img src={cross} className='todo-cross' alt='' />
    </div>
  );
};

export default Home;

