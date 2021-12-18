import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import UserRankCard from './UserRankCard';

 class Leaderboard extends Component {
  render() {
    const users=this.props.users;
    const userList=Object.keys(users).map(id=>users[id]);
    const userListSorted=userList.sort((a,b)=>(a.questions.length+Object.keys(a.answers).length<b.questions.length+Object.keys(b.answers).length)?1:-1);
    console.log(userListSorted);
    if(this.props.loggedinUser==='')
    return <SignIn/>
    return (
    <div className="leaderboard container">
      <header>
        <h2>Leaderboard</h2>
      </header>
      {
        userListSorted.map(user=><UserRankCard user={user} key={user.id}/>)
      }
        
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
  users:state.usersInformation.users,
  loggedinUser:state.loggedinUser,
})
export default connect(mapStateToProps)(Leaderboard)



