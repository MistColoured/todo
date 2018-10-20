import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import moment from 'moment';
import Input from './Input';

export default class ToDoInput extends Component {
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
    const { todoInput } = this.props;
    // const disabled = !moment(dateInput).isValid();
    const disabled = false;
    return (
      <div>
        <form
          className="form-inline"
          onSubmit={this.handleFormSubmit}
          autoComplete="off"
        >

          <Input
            label="User Input"
            inputText={todoInput}
            onChange={this.handleInputChange}
            id="todo"
            placeholder="User to send to"
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

ToDoInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  todoInput: PropTypes.string,
};

ToDoInput.defaultProps = {
  todoInput: '',
};
