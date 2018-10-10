import React, { Component } from 'react'

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import Fade from '@material-ui/core/Fade';

export default class ErrorDialog extends Component {
  render() {
    return (
      <Snackbar
      id="errorSnackBar"
      open={true}
      TransitionComponent={Fade}
      
      message={<span id="message-id">
      <i className="fas fa-exclamation-circle"></i>&nbsp;{this.props.error}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={this.handleClose}
        >
          <i className="fas fa-times"></i>
        </IconButton>,
      ]}
    />
    )
  }
}
