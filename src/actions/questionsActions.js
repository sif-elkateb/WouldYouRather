
import { SET_USER_QUESTIONS } from "./types"

export const setUserQuestions=(user)=>{
  return {
    type:SET_USER_QUESTIONS,
    user
  }
}