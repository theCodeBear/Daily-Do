import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import CreateList from './createList.jsx';
import ShowList from './showList.jsx';

let AppComponent = React.createClass({
  getInitialState() {
    return { list: window.localStorage.getItem('dailyDo') ? JSON.parse(window.localStorage.getItem('dailyDo')) : [] };
  },

  showList(list) {
    window.localStorage.setItem('dailyDo', JSON.stringify(list));
    this.setState({list: list});
  },

  completeItem(itemId) {
    let tempList = this.state.list;
    tempList[itemId].completed = true;
    window.localStorage.setItem('dailyDo', JSON.stringify(tempList));
    this.setState({list: tempList});
  },

  render() {
    let hideIfList = classNames({'hide': this.state.list.length});
    let hideIfNoList = classNames({'hide': !this.state.list.length});
    return (
      <div>
        <div className={hideIfList}>
          <CreateList showList={this.showList} />
        </div>
        <div className={hideIfNoList}>
          <ShowList list={this.state.list} completeItem={this.completeItem} />
        </div>
      </div>
    );
  }
});


render(<AppComponent />, document.getElementById('app'));