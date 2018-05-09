import React, { Component } from 'react';
import './style.css';
import { QUESTIONS } from '../../shared/Contants';
class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      totalCount: QUESTIONS.length,
      answers: {},
      completed: false
    }
  }

  componentDidMount(){
    let answers = {};
    QUESTIONS.forEach((item,index) => {
      answers[index] = '---';
    });
    this.setState({answers: answers});
  }

  handleChange = (event) => {
    let answers = {...this.state.answers};
    if(event.target.value === '---'){
      return;
    }else{  
      answers[event.target.id] = event.target.value; 
      let count = 0;
      for( var item in answers){
        if(answers[item] !== '---'){
          count++;
        }
      }
      if(count === this.state.totalCount){
        this.setState({answers : answers, completed: true});
      }else{
        this.setState({answers : answers});
      }
    }

    
  }

  submit = () => {
    let correct = 0, incorrect = 0;
    QUESTIONS.forEach( (item,index) => {
      if(item.answer === this.state.answers[index]){
        correct += 1;
      }else{
        incorrect += 1;
      }
    });
    if(this.state.completed){
      this.props.submit([incorrect, correct]);
    }
  }

  clear = () => {
    let answers = {};
    QUESTIONS.forEach((item,index) => {
      answers[index] = '---';
    });
    
    this.setState({
      answers: answers,
      completed: false
    });
    this.props.submit([0,0]);
  }
  
  render() {
    return (
      <div>
        {
          QUESTIONS.map( (item,index) => {
            return (
              <div key={index} className="row margin">
                <div className="header">
                  {item.question}
                </div>
                <div className="answerContainer">
                  <select id={index} className="select" onChange={this.handleChange} value={this.state.answers[index]}>
                    <option disabled value="---" >----</option>
                    {
                      item.options.map( option => {
                        return(
                          <option key={option} value={option}>{option}</option>
                        );
                      })
                    }
                    </select>
                </div>
              </div>
            );
          })
        }
        <div className="buttonContainer">
          <button className={this.state.completed ? 'button' : 'button buttonDisabled' } onClick={this.submit} disabled={!this.state.completed}>Submit</button>
          <button className="button" onClick={this.clear}>Clear</button>
        </div>
      </div>
    );
  }
}

export default Question;
