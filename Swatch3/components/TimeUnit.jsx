import React from 'react';
import PropTypes from 'prop-types';

const TimeUnit = ({ number, unit }) => (
  <div className="card shadow p-3 mb-5 bg-white rounded">
    <div className="card-body">
      <h1 className="card-title">
        {Math.floor(number)}
      </h1>
      {unit ? number === 1 ? unit : `${unit}s` : ''}
    </div>
  </div>
);

TimeUnit.propTypes = {
  number: PropTypes.number,
  unit: PropTypes.string,
};

TimeUnit.defaultProps = {
  number: 0,
  unit: '',
};

export default TimeUnit;
