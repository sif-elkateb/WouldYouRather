import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { addNewQuestion } from '../actions/shared';
import { Link } from 'react-router-dom';

class NewQuestion extends Component {
  state={
    firstOption:'',
    secondOption:''
  }
  handleChange=(e)=>{
    const option=e.target.name;
    const value=e.target.value;
    this.setState({
      [option]:value
    })
  };
  handleSubmit=(e)=>{
    if(this.state.firstOption===''||this.state.secondOption===''){
      alert("Can't Add Empty Option ");
      e.preventDefault();
      return ;
    }
    const generatedQuestion={author:this.props.loggedinUser,optionOneText:this.state.firstOption,optionTwoText:this.state.secondOption};
    this.props.dispatch(addNewQuestion(generatedQuestion));
  }
  resetState=()=>{
    this.setState({
      firstOption:'',
      secondOption:''
    })
  }
  render() {
    if(this.props.loggedinUser==='')
    return <SignIn resetState={this.resetState}/>
    return (
      <div className="container new-question">
      <header>
        <h2>Create New Question</h2>
      </header>
      <form >
        <h3>Would You Rather</h3>
        <input type="text" placeholder="First Option" name='firstOption' value={this.state.firstOption} onChange={this.handleChange}/>
        <br/>
        <input type="text" placeholder="Second Option" name='secondOption' value={this.state.secondOption} onChange={this.handleChange}/>
        <Link to='/' style={{textDecoration:'none'}} onClick={this.handleSubmit} className="btn-green" type="submit">Create</Link>
      </form>
      <br />

    </div>
    )
  }
}
const mapStateToProps=(state)=>({
  loggedinUser:state.loggedinUser,
})
export default connect(mapStateToProps)(NewQuestion)




