import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

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
          onSubmit={this.handleFormSubmit}
          autoComplete="off"
        >
          <div className="form-group mt-4">
            <input
              value={inputDate}
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              id="dateInput"
              placeholder="Enter date"
            />
          </div>
          <button
            disabled={!moment(inputDate).isValid()}
            type="submit"
            className="btn btn-primary mb-4"
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
