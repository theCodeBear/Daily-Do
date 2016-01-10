import React from 'react';
import {render} from 'react-dom';
import CreateList from './createList.jsx';

render(
  <CreateList />,
  document.getElementById('createList')
);

render(
  <h1 className='hide'>  Show List </h1>,
  document.getElementById('showList')
);