import { ADD_QUESTION, FETCH_DATA,ANSWER_QUESTION } from "../actions/types";
const initialState={users:{}};

export const usersReducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case FETCH_DATA:{
      const users=action.users;
      return {
        ...state,users
      }
    };
    case ADD_QUESTION:{
      const questionId=action.question.id;
      const authorId=action.question.author;
      return {
        ...state,
        users:{...state.users,[authorId]:{...state.users[authorId],questions:[...state.users[authorId].questions,questionId]}}
      }
    };
    case ANSWER_QUESTION:{
      const questionId=action.answer.qid;
      const loggedinUser=action.answer.authedUser;
      const userAnswer=action.answer.answer;
      return {

        ...state,
        users:{...state.users,[loggedinUser]:{...state.users[loggedinUser],answers:{...state.users[loggedinUser].answers,[questionId]:userAnswer}}}
      }

    }

    default:
      return state;
  }
}