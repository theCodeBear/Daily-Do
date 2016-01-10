import React from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import moment from 'moment';
import CreateList from './createList.jsx';
import ShowList from './showList.jsx';

let AppComponent = React.createClass({
  getInitialState() {
    return { date: moment().format('MM/DD/YYYY'), list: window.localStorage.getItem('dailyDo') ? JSON.parse(window.localStorage.getItem('dailyDo')) : [] };
  },

  showList(list) {
    window.localStorage.setItem('dailyDo', JSON.stringify(list));
    window.localStorage.setItem('dailyDoDate', moment().format('MM/DD/YYYY'));
    this.setState({list: list});
  },

  completeItem(itemId) {
    let tempList = this.state.list;
    tempList[itemId].completed = true;
    window.localStorage.setItem('dailyDo', JSON.stringify(tempList));
    this.setState({list: tempList});
  },

  doneWithResults() {
    window.localStorage.removeItem('dailyDo');
    window.localStorage.removeItem('dailyDoDate');
    this.setState({date: '', list: []});
  },

  render() {
    let dayIsOver = moment().isAfter(moment(this.state.date, 'MM/DD/YYYY').endOf('day')); 
    let hideIfList = classNames({'hide': this.state.list.length});
    let hideIfNoList = classNames({'hide': !this.state.list.length});
    return (
      <div>
        <div className={hideIfList}>
          <CreateList showList={this.showList} />
        </div>
        <div className={hideIfNoList}>
          <ShowList list={this.state.list} completeItem={this.completeItem} dayIsOver={dayIsOver} doneWithResults={this.doneWithResults} />
        </div>
      </div>
    );
  }
});


render(<AppComponent />, document.getElementById('app'));