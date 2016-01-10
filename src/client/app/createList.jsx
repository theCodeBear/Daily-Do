'use strict';

import React from 'react';
import ItemInput from './itemInput.jsx';
import IncompleteList from './incompleteList.jsx';

let CreateList = React.createClass({
  getInitialState() {
    return { list: [], id: 0 };
  },

  addToList(item) {
    this.setState({list: this.state.list.concat({item: item, id: this.state.id}), id: this.state.id+1});
  },

  render() {
    return (
      <div>
        <h1 className='text-center'> Create List </h1>
        <ItemInput addToList={this.addToList} />
        <IncompleteList list={this.state.list}/>
        <div className='text-center'>
          <button>Complete List</button>
        </div>
      </div>
    );
  }
});

export default CreateList;