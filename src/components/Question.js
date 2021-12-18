import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';
import SignIn from './SignIn';
import NotFound from './NotFound';
import { connect } from 'react-redux';
import { useParams } from 'react-router';


 const  Question = (props)=> {
  const RequestedQuestionId=useParams().id;
  if(props.loggedinUser===''){
    return <SignIn />
    }
  else if(!props.questions[RequestedQuestionId]){
    return <NotFound/>
  }
  else {
   const loggedinUser=props.users[props.loggedinUser];
   const answered=loggedinUser.answers[RequestedQuestionId]?true:false;
  
  if(answered)
   return <AnsweredQuestion questionId={RequestedQuestionId}/>
   else
   return <UnansweredQuestion questionId={RequestedQuestionId}/>
  }

   
    
  }

const mapStateToProps=(state)=>({
  loggedinUser:state.loggedinUser,
  answeredQuestions:state.questionsInformation.userAnsweredQuestions,
  unansweredQuestions:state.questionsInformation.userUnansweredQuestions,
  users:state.usersInformation.users,
  questions:state.questionsInformation.questions

});
export default connect(mapStateToProps)(Question)

