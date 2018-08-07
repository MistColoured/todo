import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import Input from './Input';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class SearchBar extends Component {
  handleInputChange = (e) => {
    const { onInputChange } = this.props;
    onInputChange(e.target.value, e.target.id);
  }

  handleFormSubmit = (e) => {
    const { onFormSubmit } = this.props;
    e.preventDefault();
    onFormSubmit();
  }

  render() {
    const { dateInput, eventInput } = this.props;
    const disabled = !moment(dateInput).isValid();
    return (
      <div>
        <form
          className="form-inline"
          onSubmit={this.handleFormSubmit}
          autoComplete="off"
        >

          <Input
            label="Event Input"
            inputText={eventInput}
            onChange={this.handleInputChange}
            id="eventInput"
            placeholder="Name of event"
          />
          <Input
            label="Date Input"
            inputText={dateInput}
            onChange={this.handleInputChange}
            id="dateInput"
            placeholder="dd mmm yyyy"
          />
          <button
            disabled={disabled}
            className={disabled ? 'btn btn-danger' : 'btn btn-primary'}
            type="submit"
          >
            <i className={disabled ? 'fas fa-times' : 'fas fa-check'} />
          </button>
        </form>
      </div>

    );
  }
}

SearchBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  dateInput: PropTypes.string,
  eventInput: PropTypes.string,
};

SearchBar.defaultProps = {
  dateInput: '',
  eventInput: '',
};
