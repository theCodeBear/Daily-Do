'use strict';

import React from 'react';
import ShowListItem from './showListItem.jsx';

let ShowList = React.createClass({
  getInitialState() {
    return { resultsShown: false }
  },

  displayResults() {
    document.getElementById('done-button').classList.add('hide');
    document.getElementById('results').classList.remove('hide');
    this.setState({resultsShown: true});
    window.localStorage.removeItem('dailyDo');
  },

  render() {
    let list = this.props.list.map((item) => <ShowListItem item={item} key={item.id} completeItem={this.props.completeItem} resultsShown={this.state.resultsShown} />);
    let numberCompleted = this.props.list.filter((item) => item.completed).length
    return (
      <div id='showList'>
        <h1 className='text-center'> Todays List </h1>
        <ul className='text-center'>
          {list}
        </ul>
        <div className='text-center'>
          <button id='done-button' onClick={this.displayResults}>Done with List</button>
        </div>
        <div id='results' className='hide text-center results'>
          {numberCompleted}/{this.props.list.length}
        </div>
      </div>
    );
  }
});

export default ShowList;