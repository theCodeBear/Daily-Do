'use strict';

import React from 'react';
import classNames from 'classnames';
import ShowListItem from './showListItem.jsx';

let ShowList = React.createClass({
  componentWillMount() {
    if (this.props.dayIsOver)
      document.getElementById('results').classList.remove('hide');
  },

  render() {
    let list = this.props.list.map((item) => <ShowListItem item={item} key={item.id} completeItem={this.props.completeItem} dayIsOver={this.props.dayIsOver} />);
    let numberCompleted = this.props.list.filter((item) => item.completed).length
    let doneButtonContainer = classNames({'text-center': true, 'hide': !this.props.dayIsOver});
    return (
      <div id='showList'>
        <header className='text-center'> Todays To-do List </header>
        <ul className='text-center'>
          {list}
        </ul>
        <div className={doneButtonContainer}>
          <button id='done-button' onClick={this.props.doneWithResults}>Make New List</button>
        </div>
        <div id='results' className='hide text-center results'>
          {numberCompleted}/{this.props.list.length}
        </div>
      </div>
    );
  }
});

export default ShowList;