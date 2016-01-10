'use strict';

import React from 'react';

let ItemInput = React.createClass({
  getInitialState() {
    return { item: '' };
  },

  submitHandler(e) {
    e.preventDefault();
    this.props.addToList(this.state.item);
    this.setState({item: ''});
  },

  inputChangeHandler(e) {
    this.setState({item: e.target.value});
  },

  render() {
    return (
      <form className='text-center' onSubmit={this.submitHandler}>
        <input type='text' className='item-input' value={this.state.item} placeholder='To do...' onChange={this.inputChangeHandler} autoFocus />
      </form>
    );
  }
});

export default ItemInput;