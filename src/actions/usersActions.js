import { ANSWER_QUESTION } from "./types";
import { saveAnswer } from "../utils/API/API";

const answerQuestion=(answer)=>{
  return {
    type:ANSWER_QUESTION,
    answer
  }
}
export const saveUserAnswerAction=(answer)=>dispatch=>{
  saveAnswer(answer);
  dispatch(answerQuestion(answer));
}