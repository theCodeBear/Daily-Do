import React from 'react';
import {render} from 'react-dom';
import CreateList from './createList.jsx';
import ShowList from './showList.jsx';

let AppComponent = React.createClass({
  getInitialState() {
    return { list: [] };
  },

  showList(list) {
    this.setState({list: list});
  },

  render() {
    return (
      <div>
        <CreateList showList={this.showList} />
        <ShowList list={this.state.list} />
      </div>
    );
  }
});


render(<AppComponent />, document.getElementById('app'));