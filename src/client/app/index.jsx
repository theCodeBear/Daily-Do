import React from 'react';
import {render} from 'react-dom';
import CreateList from './createList.jsx';

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
        <h1 id='showList' className='hide'> Show List </h1>
      </div>
    );
  }
});


render(<AppComponent />, document.getElementById('app'));