import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUserAnswerAction } from '../actions/usersActions';

class UnansweredQuestion extends Component {
  state={
    pollAnswer:''
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const answer={
      authedUser:this.props.loggedinUser,
      qid:this.props.questionId,
      answer:this.state.pollAnswer
    }
    this.props.dispatch(saveUserAnswerAction(answer));

  }
  handleChange=(e)=>{
    this.setState({
      pollAnswer:e.target.value
    })
  }
  render() {
    const questionId=this.props.questionId;
    const questions=this.props.questions;
    const questionData=questions[questionId];
    return (
      <div className="question home-question">
      <header>
        <h2>{`${this.props.users[questionData.author].name} asks:`}</h2>
      </header>
      <div className='home-queston-body'>
        <img src={this.props.users[questionData.author].avatarURL} alt="" className="home-user-avatar"/>
        <div className="poll-details">
          <fieldset className='unanswered'>
            <legend>Would You Rather</legend>
            <form onSubmit={this.handleSubmit}>
              <div className="poll-option"><input type="radio" name="poll-answer" value="optionOne" onChange={this.handleChange}/> <label>{questionData.optionOne.text}</label>
              </div>
              <div className='poll-option'>
                <input type="radio" name="poll-answer" value="optionTwo" onChange={this.handleChange}/> <label>{questionData.optionTwo.text}</label>
              </div>
              <button className="btn-green" type="submit">Vote </button>

            </form>
          </fieldset>
          </div>

    </div>
    </div>
    )
  }
}
const mapStateToProps=(state)=>({
  loggedinUser:state.loggedinUser,
  users:state.usersInformation.users,
  questions:state.questionsInformation.questions
})
export default connect(mapStateToProps)(UnansweredQuestion)
