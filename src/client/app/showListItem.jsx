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
      'checked-button-active': !this.props.item.completed && !this.props.dayIsOver,
      'checked-button-inactive': this.props.item.completed
    });
    return (
      <li className={liClass}>
        <span className='thin'>{this.props.item.item}</span>
        <span id={`check${this.props.item.id}`}
              className={checkedClass}
              onClick={!this.props.item.completed && !this.props.dayIsOver && this.completeItem}>
          &#x2713;
        </span>
      </li>
    );
  }
});

export default ShowListItem;