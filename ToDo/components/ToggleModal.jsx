import React from 'react';
import Toggle from './Toggle';

import ModalPortal from './ModalPortal';
import Modal from './Modal';

const ToggleModal = () => (
  <div>
    <Toggle render={({ show, toggle }) => (
      <div>
        <button className="btn btn-primary m-4" onClick={toggle}>Add New Date</button>
        {show && (
          <ModalPortal>
            <Modal toggle={toggle} />
          </ModalPortal>
        )}
      </div>
    )}
    />
  </div>
);

export default ToggleModal;
