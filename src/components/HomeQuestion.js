import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomeQuestion extends Component {
  render() {
    const questionLink=`/questions/${this.props.question.id}`;
    console.log(questionLink);
    return (
      <div className="home-question container">
        <header>
          <h2>{`${this.props.users[this.props.question.author].name} asks:`}</h2>
        </header>
        <div className='home-queston-body'>
          <img src={this.props.users[this.props.question.author].avatarURL} alt="" className="home-user-avatar"/>
          <div className="poll-details">
            <h3>Would You Rather</h3>
            <p className='option-1'>{this.props.question.optionOne.text}</p>
            <p className='option-2'>{this.props.question.optionTwo.text}</p>
            <Link style={{textDecoration:'none', padding:'6px 12px',width:'120px',fontFamily:'Arial'}}to={questionLink} className="btn-green">View Poll</Link>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
  users:state.usersInformation.users
});
export default connect(mapStateToProps)(HomeQuestion);

