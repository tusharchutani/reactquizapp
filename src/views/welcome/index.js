import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.png';
import { connect } from 'react-redux';
import { setUpAndStartQuiz } from '../../actions'
import { withRouter } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



class Welcome extends Component {
  constructor(props){
    super(props);
    this.setupAndStartQuiz = this.setupAndStartQuiz.bind(this);
  }

/**
 * NOTE: this piece of code is not an ideal solution IMO. 
 * However, the documentation says it should be done this 
 * https://reacttraining.com/react-router/core/guides/redux-integration
 * Search: "In most cases, you can use Link, NavLink and Redirect to perform navigation actions. Sometimes you might also need to navigate programmatically,"
 */
  setupAndStartQuiz(){
    this.props.setupAndStartQuiz(this.props.history);
  }

  render() {
    const {classes} = this.props;
    return (
      <div id="welcomContainer">
            <CardMedia
            className={classes.logo}
            image={logo}
            title="Contemplative Reptile"/>

            <Typography variant="h3">
              Welcome to trivia challenge
            </Typography>
            <hr/>
            <Typography variant="h6">
              You will be presented with 10 True or False questions
            </Typography>
            <Button  size="large" color="primary" onClick={this.setupAndStartQuiz} className={classes.begin}>Start quiz</Button>
          
      </div>
    )
  }
}



const styles = {
  container:{
    width:'960px'
  },
  logo:{
    height:100,
    width:100,
    margin: '0 auto'
  },
};

Welcome.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapActionsToProps = {
  setupAndStartQuiz:setUpAndStartQuiz
}
Welcome = withRouter(Welcome);
export default connect(()=>({}), mapActionsToProps )(withStyles(styles)(Welcome))