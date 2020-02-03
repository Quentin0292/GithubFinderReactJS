import React from 'react';

const Alert = ({ alert, closeAlert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
        <i
          className='fas fa-times-circle'
          onClick={closeAlert}
          style={{ float: 'right', paddingTop: '5px', cursor: 'pointer' }}
        ></i>
      </div>
    )
  );
};

export default Alert;
