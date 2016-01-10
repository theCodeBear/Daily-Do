'use strict';

import React from 'react';
import classNames from 'classnames';

let ShowListItem = React.createClass({
  completeItem(e) {
    this.props.completeItem(this.props.item.id);
  },

  render() {
    let liClass = classNames({
      'show-list-item': true,
      'completed-item': this.props.item.completed
    });
    let checkedClass = classNames({
      'checked-button': !this.props.item.completed,
      'white-color': this.props.item.completed
    });
    return (
      <li className={liClass}>
        {this.props.item.item}
        <span className={checkedClass} onClick={this.completeItem}>&#x2713;</span>
      </li>
    );
  }
});

export default ShowListItem;