import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

export default class PageNotFound extends Component {
    render() {
        
          return (
            <div>
                <div>
                  <Typography variant="h2">
                      404 page not found
                    </Typography>
                    <hr/>
                    <Typography variant="h6">
                      Oops you are not suppose to here
                    </Typography>
                    <Button variant="outlined" component={Link} to="/" color="primary">Go to home</Button>

                </div>
            </div>)
          
    }
}
