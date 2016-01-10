'use strict';

import React from 'react';
import classNames from 'classnames';
import ShowListItem from './showListItem.jsx';

let ShowList = React.createClass({
  getInitialState() {
    return { resultsShown: false }
  },

  componentWillMount() {
    if (this.props.dayIsOver) {
      document.getElementById('results').classList.remove('hide');
      this.setState({resultsShown: true});
    }
  },

  render() {
    let list = this.props.list.map((item) => <ShowListItem item={item} key={item.id} completeItem={this.props.completeItem} resultsShown={this.state.resultsShown} />);
    let numberCompleted = this.props.list.filter((item) => item.completed).length
    let doneButton = classNames({'text-center': true, 'hide': !this.props.dayIsOver});
    return (
      <div id='showList'>
        <h1 className='text-center'> Todays To-do List </h1>
        <ul className='text-center'>
          {list}
        </ul>
        <div className={doneButton}>
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