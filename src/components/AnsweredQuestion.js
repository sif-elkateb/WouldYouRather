import React, { Component } from 'react';
import { connect } from 'react-redux';

 class AnsweredQuestion extends Component {
  render() {
    const questionId=this.props.questionId;
    const questions=this.props.questions;
    const questionData=questions[questionId];
    const userData=this.props.users[this.props.loggedinUser];
    const userAnswer=userData.answers[questionId];
    const NumberOfUsers=Object.keys(this.props.users).length;
    return (
    <div className="question home-question">
      <header>
        <h2>{`${this.props.users[questionData.author].name} asks:`}</h2>
      </header>
      <div className='home-queston-body'>
        <img src={this.props.users[questionData.author].avatarURL} alt="" className="home-user-avatar"/>
        <div className="poll-details">
          <h3>Results</h3>  
          <fieldset>
            <legend>{userAnswer==='optionOne'?'Your Answer':''}</legend>
            <p className='option-1'>{questionData.optionOne.text}</p>
            <div className="answer-percentage"><p>{`${questionData.optionOne.votes.length*100/NumberOfUsers}%`}</p><div style={{width:`${questionData.optionOne.votes.length*100/NumberOfUsers}%`}}className="percentage"></div></div>
            <div className="option-details">
              {`${questionData.optionOne.votes.length} out of ${NumberOfUsers}`}
            </div>

          </fieldset>
            <fieldset>
              <legend>{userAnswer==='optionTwo'?'Your Answer':''}</legend>
              <p className='option-2'>{questionData.optionTwo.text}</p>
              <div className="answer-percentage"><p>{`${questionData.optionTwo.votes.length*100/NumberOfUsers}%`}</p><div style={{width:`${questionData.optionTwo.votes.length*100/NumberOfUsers}%`}}className="percentage"></div></div>
              <div className="option-details">
              {`${questionData.optionTwo.votes.length} out of ${NumberOfUsers}`}
              </div>
            </fieldset>
        </div>
      </div>
    </div>
    )
  }
};
const mapStateToProps=(state)=>({
  loggedinUser:state.loggedinUser,
  users:state.usersInformation.users,
  questions:state.questionsInformation.questions
})
export default connect(mapStateToProps)(AnsweredQuestion)

