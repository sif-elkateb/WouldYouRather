import { FETCH_DATA,ADD_QUESTION} from "./types";
import { getAllQuestions,getAllUsers,saveNewQuestion } from "../utils/API/API";

const  initialDataAction=(questions,users)=>{
  return {
    type:FETCH_DATA,
    questions,
    users
  }
}
const addQuestion=(question)=>{
  return {
    type:ADD_QUESTION,
    question
  }
}
export const getInitialData=()=>dispatch=>{
   Promise.all([
    getAllQuestions(),
    getAllUsers()
  ]).then(([questions,users ]) => {
    dispatch(initialDataAction(questions, users))
  })
}
export const addNewQuestion=(question)=>dispatch=>{
  saveNewQuestion(question).then(generatedQuestion=>{
    dispatch(addQuestion(generatedQuestion))});
}
