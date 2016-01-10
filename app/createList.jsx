'use strict';

import React from 'react';
import ItemInput from './itemInput.jsx';
import IncompleteList from './incompleteList.jsx';

let CreateList = React.createClass({
  getInitialState() {
    return { list: [], id: 0 };
  },

  addToList(item) {
    this.setState({list: this.state.list.concat({item: item, id: this.state.id, complete: false}), id: this.state.id+1});
  },

  completeList() {
    if (this.state.list.length) {
      document.getElementById('createList').classList.add('hide');
      document.getElementById('showList').classList.remove('hide');
      this.props.showList(this.state.list);
    }
  },

  render() {
    return (
      <div id='createList'>
        <h1 className='text-center'> Create Todays To-do List </h1>
        <ItemInput addToList={this.addToList} />
        <div className='text-center'>
          <button className='create-list-button' onClick={this.completeList}>Complete List</button>
        </div>
        <IncompleteList list={this.state.list}/>
      </div>
    );
  }
});

export default CreateList;