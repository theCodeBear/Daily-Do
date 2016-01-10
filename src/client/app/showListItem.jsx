'use strict';

import React from 'react';

let ShowListItem = React.createClass({
  render() {
    return (
      <li className='show-list-item'>
        {this.props.item}
        <span className='checked-button'>&#x2713;</span>
      </li>
    );
  }
});

export default ShowListItem;