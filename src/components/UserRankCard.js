import React, { Component } from "react";

export default class UserRankCard extends Component {
  render() {
    return (
      <div className='user-leaderboard container'>
        <img
          src={this.props.user.avatarURL}
          alt=''
          className='user-leaderboard-img'
        />
        <div className='user-leaderboard-info'>
          <h3>{this.props.user.name}</h3>
          <p>
          {
            `Answered Questions : ${Object.keys(this.props.user.answers).length}
            `
          }
          </p>
          <p>{`Current Questions : ${this.props.user.questions.length}`}</p>
        </div>
        <div className='user-leaderboard-score'>
          <h3>Total Score</h3>
          <p>
            {this.props.user.questions.length +
              Object.keys(this.props.user.answers).length}
          </p>
        </div>
      </div>
    );
  }
}
