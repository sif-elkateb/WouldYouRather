import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import HomeQuestion from './HomeQuestion';


 class Home extends Component {
  state={
    unanswered:true
  }
  changType=(bool)=>{
    if(bool)
    this.setState({unanswered:true});
    else 
    this.setState({unanswered:false}); 
  }
  resetState=()=>{
    this.setState({unanswered:true})
  }

  render(){
    const questionsList=this.state.unanswered?this.props.unansweredQuestions:this.props.answeredQuestions;
    if(this.props.loggedinUser===''){
    return <SignIn resetState={this.resetState}/>
    }
    return (
      <div className="home container">
      <header>
        <div className="nav-links" id="nav-links">
          <ul>
              <li><a href="#AnsweredQuestions" style={{backgroundColor:!this.state.unanswered?'#83e997':'#b4e7bb'}} onClick={(e)=>{e.preventDefault();this.changType(false)}}>Answered Questions</a></li>
              <li><a href="#UnansweredQuestions" style={{backgroundColor:this.state.unanswered?'#83e997':'#b4e7bb'}} onClick={(e)=>{e.preventDefault();this.changType(true)}}>Unanswered Questions</a></li>
          </ul>
      </div>
      </header>
      {
        questionsList.map(question=>(
          <HomeQuestion question={question} key={question.id}/>
        ))}
    </div>
    )
  }
}
const mapStateToProps=(state)=>({
  loggedinUser:state.loggedinUser,
  answeredQuestions:state.questionsInformation.userAnsweredQuestions,
  unansweredQuestions:state.questionsInformation.userUnansweredQuestions,
  users:state.usersInformation.users
})
export default connect(mapStateToProps)(Home)




