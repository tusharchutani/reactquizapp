import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { tabulateResults } from '../../actions';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { OptionButton } from '../../components/buttons';
import { formatString } from '../../shared/utilityFunctions';

class Quiz extends Component {

  constructor(props){
    super(props);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.resetState = this.resetState.bind(this);
    this.tabulateResult = this.tabulateResult.bind(this);
    this.showResults = this.showResults.bind(this);
    this.state = {
      currentQuestion:0,
      answerReveled:false,
      isAnswerCorrect: null,
      results:[]
    }
  }

  resetState(){
    this.setState({
      answerReveled:false,
      isAnswerCorrect: null
    });
  }

  

  /**
   * 
   * @param {"The option that was selected"} selectedOption 
   * This method is called when an option is selected.
   * 
   */
  checkAnswer(selectedOption){
    const {questions} = this.props;
    var question = questions[this.state.currentQuestion];
    
    if(question.correct_answer === selectedOption){
      this.setState({isAnswerCorrect:true});
      this.tabulateResult(selectedOption, true);
    }else{
      this.setState({isAnswerCorrect:false});
      this.tabulateResult(selectedOption, false);
    }
    
    this.setState({answerReveled:true});
    
  }

  /**
   * Set up the results and when that is go the results page
   */
  showResults(){
    this.props.showResulst(this.state.results);
    this.props.history.push('/results');
  }

  tabulateResult(selectedOption, answerCorrect){
    const {questions} = this.props;
    var questionInfo = questions[this.state.currentQuestion];
    var result = {
      question: questionInfo.question,
      correct: answerCorrect,
      userSelected:selectedOption
    }
    
    var newResults = this.state.results;
    newResults.push(result)
    this.setState({results: newResults});
  }

  nextQuestion(){
    var nextQuestion = this.state.currentQuestion+1;
    this.setState({
      currentQuestion:nextQuestion
    });
    this.resetState();
  }


  renderQuestion(){
    const {classes,questions} = this.props;
    var question = questions[this.state.currentQuestion];

    //union of correct and incorrect answers will give us all the options
    var options = new Array(question.correct_answer);
    options.push(...question.incorrect_answers);
    options.sort();
    
    return (
      <div>
        <Typography className={classes.questionNumber} variant="h6">
          Question {this.state.currentQuestion+1} of 10
        </Typography>
        <Typography className={classes.welcomeInfo} variant="h4">
          {formatString(question.question)}
        </Typography>
        {options.map((option, index)=> {
          if(!this.state.answerReveled){
            return (<OptionButton key={index + " "+option} onClick={this.checkAnswer} optionText={option}/>);
          }else{
            if(option === question.correct_answer){
              return (<OptionButton key={index + " "+option} correct={true} onClick={this.checkAnswer} optionText={option}/>);
            }
            return (<OptionButton key={index + " "+option} correct={false} onClick={this.checkAnswer} optionText={option}/>);
          }
        })}
        
        <div className={classes.nextButtonContainer}>
          {this.state.currentQuestion !== questions.length-1 && <Button variant="outlined" disabled={this.state.isAnswerCorrect === null} onClick={this.nextQuestion} color="primary">Next > </Button>}
          {this.state.currentQuestion === questions.length-1 && <Button variant="outlined" disabled={this.state.isAnswerCorrect === null} onClick={this.showResults} color="primary">Results  </Button>}
        </div>        
      </div>
    )
  }

  render() {
    const {classes, questions, location} = this.props;
    if(questions.length === 0){
      return(<Redirect to={{ pathname: "/", state: { from: location }}} />);
    }else{
      return (
        <div>
            <div className={classes.topHeading}>
              <Typography className={classes.headerQuiz} variant="h2">
                  Trivia Quiz
                </Typography>
                {!this.state.isAnswerCorrect && this.state.answerReveled && <div className={classes.wrongAnswerIcon}>
                  <i className="fas fa-times-circle"></i>
              </div>}
              {this.state.isAnswerCorrect && this.state.answerReveled && <div className={classes.correctAnswerIcon}>
                  <i className="fas fa-check"></i>
              </div>}
            </div>

              <hr/>
              {this.renderQuestion()}
         
        </div>
      );
    }
  }
}

const styles = {
  topHeading:{
    fontWeight:500,
    display:'flex'
  },headerQuiz:{
    flex:5
  },
  cardContent:{
    textAlign: 'center'
  },
  questionNumber:{
    color:'grey'
  },nextButtonContainer:{
    textAlign:'right',
    marginTop:'10px'
  },
  wrongAnswerIcon:{
    fontSize: '50px',
    margin: '3px 10px',
    color: 'red'
},
correctAnswerIcon:{
  fontSize: '50px',
  margin: '3px 10px',
  color: 'green'
}

};

Quiz.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    questions:state.quiz.questions
  };
}

const mapActionsToProps = {
  showResulst: tabulateResults
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Quiz))