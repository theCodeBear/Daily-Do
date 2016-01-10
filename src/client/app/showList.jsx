'use strict';

import React from 'react';

let ShowList = React.createClass({
  render() {
    return (
      <div id='showList' className='hide'>
       <h1 className='text-center'> Show List </h1>
       <ul>{this.props.list.map((item) => item.item)}</ul>
      </div>
    );
  }
});

export default ShowList;