import { FETCH_DATA,SET_USER_QUESTIONS,ADD_QUESTION ,ANSWER_QUESTION} from "../actions/types";
const initialState={questions:{},userAnsweredQuestions:[],userUnansweredQuestions:[]};

export const questionsReducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case FETCH_DATA:{
      const questions=action.questions;
      return {
        ...state,questions
      }
    }
    case SET_USER_QUESTIONS:{
      const QuestionsIdList=Object.keys(state.questions);
      const userData=action.user;
      const userAnsweredQuestionsIds=Object.keys(userData.answers);
      const userUnansweredQuestionsIds=QuestionsIdList.filter(question=>!userAnsweredQuestionsIds.includes(question));
      const userAnsweredQuestions=userAnsweredQuestionsIds.map(id=>state.questions[id]);
      const userUnansweredQuestions=userUnansweredQuestionsIds.map(id=>state.questions[id]);
      const userAnsweredQuestionsSorted=userAnsweredQuestions.sort((a,b)=>(a.timestamp<b.timestamp)?1:-1);
      const userUnansweredQuestionsSorted=userUnansweredQuestions.sort((a,b)=>(a.timestamp<b.timestamp)?1:-1);
      return {
        ...state,
        userAnsweredQuestions:userAnsweredQuestionsSorted,
        userUnansweredQuestions:userUnansweredQuestionsSorted
      }
    };
    case ADD_QUESTION:{
      return {
        ...state,
        userUnansweredQuestions:[action.question,...state.userUnansweredQuestions],
        questions:{...state.questions,[action.question.id]:action.question}
      }
    }

    case ANSWER_QUESTION:{
      const questionId=action.answer.qid;
      const loggedinUser=action.answer.authedUser;
      const userAnswer=action.answer.answer;
      return {
        ...state,
        userAnsweredQuestions:[state.questions[questionId],...state.userAnsweredQuestions].sort((a,b)=>(a.timestamp<b.timestamp)?1:-1),
        userUnansweredQuestions:state.userUnansweredQuestions.filter(q=>q.id!==questionId),
        questions:{...state.questions,[questionId]:{...state.questions[questionId],[userAnswer]:{...state.questions[questionId][userAnswer],votes:[...state.questions[questionId][userAnswer].votes,loggedinUser]}}}
      } 
    }
    
    default:
      return state;
  }
}