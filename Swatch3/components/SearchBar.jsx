import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class SearchBar extends Component {
  handleInputChange = (e) => {
    const { onInputChange } = this.props;
    onInputChange(e.target.value);
  }

  handleFormSubmit = (e) => {
    const { onFormSubmit } = this.props;
    e.preventDefault();
    onFormSubmit();
  }

  render() {
    const { inputDate } = this.props;
    return (
      <div>
        <form
          className="form-inline my-4"
          onSubmit={this.handleFormSubmit}
          autoComplete="off"
        >
          <div className="form-group">
            <label htmlFor="eventName" className="sr-only">Event name</label>
            <input
              value={inputDate}
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              id="eventName"
              placeholder="Name of event"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateInput" className="sr-only">Date Input</label>
            <div className="input-group">
              <input
                value={inputDate}
                onChange={this.handleInputChange}
                type="text"
                className="form-control"
                id="dateInput"
                placeholder="Enter date"
              />
              <div className="input-group-btn">
                <button
                  disabled={!moment(inputDate).isValid()}
                  className="btn btn-primary"
                  type="submit"
                >
                  <i className="fas fa-check" />
                </button>
              </div>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  inputDate: PropTypes.string,
};

SearchBar.defaultProps = {
  inputDate: '',
};
