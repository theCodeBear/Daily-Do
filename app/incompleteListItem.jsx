'use strict';

import React from 'react';

let IncompleteListItem = React.createClass({
  render() {
    return (
      <li className='incomplete-list-item'>{this.props.item}</li>
    );
  }
});

export default IncompleteListItem;