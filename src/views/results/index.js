import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import QuestionResult from './questionResult';
import { setUpAndStartQuiz } from '../../actions'

class Results extends Component {
  constructor(props){
    super(props);
    this.playAgain = this.playAgain.bind(this);
  }

  playAgain(){
    this.props.setupAndStartQuiz(this.props.history);
  }

  render() {
    const {classes, questionResultInfo, correct, outOf, location} = this.props;
    if(questionResultInfo.length === 0){
      return(<Redirect to={{ pathname: "/", state: { from: location }}} />);
    }else{
    return (
      <div>
          <Typography className={classes.headerQuiz} variant="h2">
            Results
          </Typography>
          <hr/>
          
          <Typography className={classes.welcomeInfo} variant="h4">
            {correct} out of {outOf}
          </Typography>

          {questionResultInfo.map((result, id)=>(<QuestionResult key={"result "+id} {...result}/>))}

          <div className={classes.nextButtonContainer}>
            <Button onClick={this.playAgain} variant="outlined" color="primary">Play again? </Button>
          </div>
      </div>
    )
  }
  }
}

const styles = {
  headerQuiz: {
    fontWeight:500
  },
  cardContent:{
    textAlign: 'center'
  },
  questionNumber:{
    color:'grey'
  }

};

Results.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {

  return {
    questionResultInfo:state.result.questionResultInfo,
    correct: state.result.score.correct,
    outOf: state.result.score.outOf
  };
}

const mapActionsToProps = {
  setupAndStartQuiz:setUpAndStartQuiz
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Results))