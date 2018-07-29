import React from 'react';

const Modal = () => (
  <div className="modal" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Select new date.</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          Pick a Date
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">Add Date</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
