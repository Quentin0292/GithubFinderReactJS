import React, { useContext } from 'react';
import AlertContext from '../../Context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert, closeAlert } = alertContext;
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
