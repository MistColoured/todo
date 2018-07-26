import React from 'react';
import Toggle from './Toggle';
import DateUntil from './DateUntil';

const NewDate = () => (
  <div>
    <Toggle render={({ show, toggle, increase }) => (
      <div>
        <button onClick={toggle}>Change Date</button>
        <button onClick={increase}>+</button>
        {show && <DateUntil />}
      </div>
    )}
    />
  </div>
);

export default NewDate;
