import React from 'react';
import {render} from 'react-dom';
import CreateList from './createList.jsx';

render(
  <div>
    <CreateList />
    <h1 id='showList' className='hide'> Show List </h1>
  </div>,
  document.getElementById('app')
);