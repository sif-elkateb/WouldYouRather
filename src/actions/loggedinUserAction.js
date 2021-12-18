import { LOGIN_USER,LOGOUT_USER } from "./types";
export const  loginUser=(username)=>{
  return {
      type:LOGIN_USER,
      username
  }
}

export const  logoutUser=()=>{
  return {
      type:LOGOUT_USER
  }
}