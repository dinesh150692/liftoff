import React, { Component } from 'react';
import Question from './components/Question/index';
import Chart from './components/Chart/index';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[0,0],
      label: ['Incorrect', 'Correct']
    }
  }

  onSubmit = (data) => {
    this.setState({data: data});
  }

  render() {
    return (
      <div>
        <header className="App-header row">
          <h1 className="App-title col s12">LiftOff Assgn.</h1>
        </header>
        <br />
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <Question submit={this.onSubmit} />
          </div>
          <div className="col-sm-12 col-lg-6">
            <Chart data={this.state.data} label={this.state.label}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
