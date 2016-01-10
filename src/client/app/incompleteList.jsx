'use strict';

import React from 'react';
import IncompleteListItem from './incompleteListItem.jsx';

let IncompleteList = React.createClass({
  render() {
    let list = this.props.list.map((item) => <IncompleteListItem item={item.item} key={item.id} />);
    return (
      <ul className='text-center'>
        {list}
      </ul>
    );
  }
});

export default IncompleteList;