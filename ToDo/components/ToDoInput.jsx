import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ToDoInput extends Component {
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
    const { todoInput } = this.props;
    return (
      <div>
        <form
          className="form-inline"
          onSubmit={this.handleFormSubmit}
          autoComplete="off"
        >
          <input
            value={todoInput}
            onChange={this.handleInputChange}
            type="text"
            id="todo"
            placeholder="Type something here"
          />
          <button className="btn btn-primary" type="submit">
            <i className="fas fa-check" />
          </button>
        </form>
      </div>
    );
  }
}

ToDoInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  todoInput: PropTypes.string,
};

ToDoInput.defaultProps = {
  todoInput: '',
};
