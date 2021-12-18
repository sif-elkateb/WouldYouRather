import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/loggedinUserAction';

 class NavBar extends Component {
    handleLogout=()=>{
      this.props.dispatch(logoutUser());
    }
  render() {
    const username=this.props.loggedinUser?this.props.loggedinUser:'';
    const userData=this.props.users?this.props.users[username]:{};

    
    return (
        <nav className="navbar">
          <div className="nav-links" id="nav-links">
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/leaderboard">Leader Board</Link></li>
                  <li><Link to="/add">New Question</Link></li>
              </ul>
          </div>
          {
          this.props.loggedinUser?
          <div className='nav-user'>
            <div className="user-welcome">
              {`Hello, ${userData.name}`}
            </div>
            <img src={userData.avatarURL} alt="" className="user-avatar"/>
            <img src="https://cdn3.iconfinder.com/data/icons/glypho-computers-andother-tech/64/door-exit-512.png" onClick={this.handleLogout} alt="" className="logout-icon"/>
          </div>:<div className='nav-user'></div>
          }
        </nav>

    )
  }
}
const mapStateToProps=(state)=>({
  loggedinUser:state.loggedinUser,
  users:state.usersInformation.users
})
export default connect(mapStateToProps)(NavBar)



