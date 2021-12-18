import { LOGIN_USER,LOGOUT_USER } from "../actions/types";
const initialState='';

export const loggedinUserReducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case LOGIN_USER:{
      const username=action.username;
      return username;
    }
    case LOGOUT_USER:{
      return '';
    }
    default:
      return state;
  }
}