import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

class OptionButton extends Component {

constructor(props){
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
}
buttonClicked(){
    this.props.onClick(this.props.optionText);
}

  render() {
      const {classes, correct} = this.props;
      var buttonClasses;
    if(correct === undefined){
      buttonClasses = classes.quizButton;
    }else{
      buttonClasses = correct ? classes.quizButton + " " + classes.quizButtonCorrect : classes.quizButton + " " + classes.quizButtonIncorrect;
    }
    return (
    <div onClick={this.buttonClicked} className={buttonClasses}>
        <span> {this.props.optionText} </span>
      </div>
    )
  }
}



const styles = {
    quizButton:{
      margin:'0 auto',
      marginTop:10,
      border: '3px solid black',
      padding: '20px',
      maxWidth:'350px',
      fontSize:18,
      textTransform:'uppercase',
      textAlign:'left',
      '&:hover':{
        border: '3px solid darkblue',
      }
    },
    quizButtonCorrect:{
      backgroundColor:'blue',
      border: '3px solid black'
    },quizButtonIncorrect:{
      backgroundColor:'red',
      border: '3px solid black'
    }
        
    
  };

  OptionButton.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  OptionButton = withStyles(styles)(OptionButton)

OptionButton.propTypes = {
  optionText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export { OptionButton }
   
  
