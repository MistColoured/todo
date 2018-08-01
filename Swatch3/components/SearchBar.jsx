import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
// import icons from 'glyphicons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// const element = <FontAwesomeIcon icon={faCoffee} />;

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
          className="form-inline"
          onSubmit={this.handleFormSubmit}
          autoComplete="off"
        >


          <div className="form-group col-md-4">
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
          <div className="form-group col-md-4">
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

            </div>
          </div>
          <button
            disabled={!moment(inputDate).isValid()}
            type="submit"
            className="btn btn-primary"
          >
        Submit
          </button>

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
