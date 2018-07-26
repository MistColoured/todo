import React, { Component } from 'react';
import moment from 'moment';
// import { Form, Button, Checkbox } from 'semantic-ui-react';

export default class Input extends Component {
  state = {
    inputDate: '',
    validDate: true,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  }

  handleChange = (e) => {
    console.log('Change');
    this.setState({
      inputDate: e.target.value,
      validDate: moment(e.target.value, 'DD MMM YYYY').isValid(),
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </div>
          <button type="submit" className="btn btn-primary">{this.state.validDate ? 'True' : 'False'}</button>
        </form>
      </div>
    );
  }
}
