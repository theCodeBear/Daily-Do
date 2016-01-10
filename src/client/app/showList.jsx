'use strict';

import React from 'react';
import ShowListItem from './showListItem.jsx';

let ShowList = React.createClass({
  displayResults() {
    document.getElementById('done-button').classList.add('hide');
    document.getElementById('results').classList.remove('hide');
  },

  render() {
    let list = this.props.list.map((item) => <ShowListItem item={item.item} key={item.id} />);
    return (
      <div id='showList' className='hide'>
        <h1 className='text-center'> Todays List </h1>
        <ul className='text-center'>
          {list}
        </ul>
        <button id='done-button' onClick={this.displayResults}>Done with List</button>
        <div id='results' className='hide'>{this.props.list.length}</div>
        {/*<Results className='hide' total={this.props.list.length} completed={} />*/}
      </div>
    );
  }
});

export default ShowList;