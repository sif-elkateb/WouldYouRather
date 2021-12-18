import {_getUsers,_getQuestions,_saveQuestion,_saveQuestionAnswer} from './_DATA';

export const getAllUsers=()=>{
  return _getUsers();
}
export const getAllQuestions=()=>{
  return _getQuestions();
}
export const saveNewQuestion=(question)=>{
  return _saveQuestion(question);
}
export const saveAnswer=(answer)=>{
  return _saveQuestionAnswer(answer);
}

