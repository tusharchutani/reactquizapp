import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { formatString } from '../../shared/utilityFunctions';

/**
 * Each row will be a component on its since the results file was too big
 * We can easliy chand how the result info will look like
 */
class QuestionResult extends Component {

  render() {
      const {classes, question} = this.props;
      var rightOrWrong = this.props.correct ? classes.correctUserAnswer : classes.wrongUserAnswer;
      var userAnswerClassNames = classes.userAnswer + " " + rightOrWrong;
    return (
      <div id="questionResultContainer" className={classes.resultContainer}>
            {this.props.correct && <div className={classes.correctAnswerIcon}>
                <i class="fas fa-check-circle"></i>
            </div>}

            {!this.props.correct && <div className={classes.wrongAnswerIcon}>
                <i class="fas fa-times-circle"></i>
            </div>}        
            <div className={classes.userQAResultText} id="question">
                <Typography align="left" variant="h5">
                    {formatString(question)}
                </Typography>
                <span id="userAnswerContainer" class={classes.userAnswerContainer}>
                    You answerd:&nbsp;
                    <span class={userAnswerClassNames}>{this.props.userSelected.toString()}</span>
                </span>
                
            </div>
      </div>
    )
  }
}

const styles = {
    resultContainer:{
        border:'2px solid black',
        marginBottom:10,
        boxShadow:'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);',
        display:'flex'
    },question:{
        textAlign:'left'
    },correctAnswerIcon:{
        fontSize: '50px',
        margin: '10px',
        color: 'green'
    },wrongAnswerIcon:{
        fontSize: '50px',
        margin: '10px',
        color: 'red'
    },userQAResultText:{
        marginTop:'10px',

    },
    userAnswerContainer:{
        display:'block',
        textAlign:'left'
    },
    userAnswer:{
        textTransform:'uppercase',
        fontWeight:600
    }, correctUserAnswer:{
        color:'green'
    }, wrongUserAnswer:{
        color:'red'
    }
}


QuestionResult.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(QuestionResult)


