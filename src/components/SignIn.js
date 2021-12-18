import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { getInitialData } from '../actions/shared';
import { loginUser } from '../actions/loggedinUserAction';
import { setUserQuestions } from '../actions/questionsActions';
import wouldyouratherlogo from '../utils/assests/wouldyouratherlogo.png';

  class SignIn extends Component {
  state={
    input:''
  }
  handleChange=(e)=>{
    this.setState({
      input:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.input==='')
    return;
    if(this.props.resetState)
    {
      console.log('found yeah sofa')
      this.props.resetState();
    }
    const username=this.state.input;
    const users=this.props.users;
    const userData=users[username];
    this.props.dispatch(loginUser(this.state.input));
    this.props.dispatch(setUserQuestions(userData));


  }
  componentDidMount(){
    this.props.dispatch(getInitialData());
  }
  
  render() {
    
    const usersList=this.props.users?Object.keys(this.props.users):[];
    
    return (
      <div className="sign-in container">
      <header>
        <h2>Would Your Rather Game</h2>
      </header>
      <br />
      <img
        className="sign-in-img"
        src={wouldyouratherlogo}
        alt="wouldyourathergame"
      />

      <form onSubmit={this.handleSubmit}>
        <label> Choose A User From The List Below</label>
        <br />
        <select className="user-list" name="user" id="user" value={this.state.input} onChange={this.handleChange}>
          <option value="" disabled>Select User</option>
          {
            usersList.map(username=>(<option key={username} value={username}>{username}</option>))
          }

        </select>
        <button className="btn-green" type="submit">Submit</button>
      </form>
    </div>
    )
  }
}
const mapStateToProps=(state)=>({
  users:state.usersInformation.users
})


export default connect(mapStateToProps)(SignIn)



