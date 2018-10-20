import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import moment from 'moment';
import Input from './Input';

export default class MessageInput extends Component {
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
    const { recipientInput, messageInput } = this.props;
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
            inputText={recipientInput}
            onChange={this.handleInputChange}
            id="recipient"
            placeholder="User to send to"
          />
          <Input
            label="Message Input"
            inputText={messageInput}
            onChange={this.handleInputChange}
            id="message"
            placeholder="A message"
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

MessageInput.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  recipientInput: PropTypes.string,
  messageInput: PropTypes.string,
};

MessageInput.defaultProps = {
  recipientInput: '',
  messageInput: '',
};
