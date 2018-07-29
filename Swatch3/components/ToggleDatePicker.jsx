import React from 'react';
import Toggle from './Toggle';

import ModalPortal from './ModalPortal';
import Modal from './Modal';

const ToggleDatePicker = () => (
  <div>
    <Toggle render={({ show, toggle }) => (
      <div>
        <button className="btn btn-primary m-4" onClick={toggle}>Add New Date</button>
        {show && (
          <ModalPortal>
            <div className="modal">
              <Modal />
            </div>
          </ModalPortal>
        )}
      </div>
    )}
    />
  </div>
);

export default ToggleDatePicker;
