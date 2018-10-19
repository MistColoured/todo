import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  inputText,
  onChange,
  id,
  placeholder,
}) => (
  <div className="form-group">
    <label htmlFor={id} className="sr-only">{label}</label>
    <input
      value={inputText}
      onChange={onChange}
      type="text"
      className="form-control"
      id={id}
      placeholder={placeholder}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  inputText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: 'Default label',
  inputText: '',
  id: 'defaultId',
  placeholder: 'Default placeholder',
};

export default Input;
