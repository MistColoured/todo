import React from 'react';
import Toggle from './Toggle';
import DateUntil from './DateUntil';

const NewDate = () => (
  <div>
    <Toggle render={({ show, toggle, increase }) => (
      <div>
        <button className="btn btn-primary mb-3" onClick={toggle}>Change Date</button>
        {show && <DateUntil />}
      </div>
    )}
    />
  </div>
);

export default NewDate;
