'use strict';

import React from 'react';
import ItemInput from './itemInput.jsx';
import IncompleteList from './incompleteList.jsx';

let CreateList = React.createClass({
  getInitialState() {
    return { unsavedList: [], id: 0 };
  },

  addToList(item) {
    this.setState({unsavedList: this.state.unsavedList.concat({item: item, id: this.state.id, complete: false}), id: this.state.id+1});
  },

  completeList() {
    if (this.state.unsavedList.length) {
      document.getElementById('createList').classList.add('hide');
      document.getElementById('showList').classList.remove('hide');
      this.props.showList(this.state.unsavedList);
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
        <IncompleteList list={this.state.unsavedList}/>
      </div>
    );
  }
});

export default CreateList;