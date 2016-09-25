import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import BoardTitle from './components/board_title.js';
import MemberList from './components/member_list.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      allTimeData: []
    };

    this.getData();
    this.getAllData();
  }

  getData(){
    $.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent', (result) => {
      this.setState({data: result});
    })
  }

  getAllData(){
    $.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', (result) => {
      this.setState({allTimeData: result});
    })
  }

  render() {
    return (
      <div>
        <BoardTitle />
        <MemberList data={this.state.data}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
