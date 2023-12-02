import React from 'react';
import DangerImage from '../static/images/danger.png';

const ConfirmDeleteModal = ({ isOpen, onCancel, onConfirm, itemName }) => {
  return (
    <div className={isOpen ? 'modal open' : 'modal'}>
      <div className='modal-content'>
        <img src={DangerImage}  style={{objectFit:'cover', width:'100px', height:'100px'}}/>
        <h1>Are you sure?</h1>
        {/* <h3>{`Are you sure you want to delete "${itemName}"?`}</h3> */}
        <p>Do you really want to delete these record? This<br/>process cannot be undone.</p>
        <button className='create' onClick={onCancel}>Cancel</button>
        <button className='cancel'onClick={onConfirm}>Delete</button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
