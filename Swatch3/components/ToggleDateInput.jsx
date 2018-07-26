import React from 'react';
import Toggle from './Toggle';
import DateInput from './DateInput';

const NewDate = () => (
  <div>
    <Toggle render={({ show, toggle }) => (
      <div>
        <button className="btn btn-primary mb-3" onClick={toggle}>Change Date</button>
        {show && <DateInput />}
      </div>
    )}
    />
  </div>
);

export default NewDate;
