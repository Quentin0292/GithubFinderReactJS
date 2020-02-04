import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT, CLOSE_ALERT } from '../types';

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  // Close Alert
  const closeAlert = () => {
    dispatch({
      type: CLOSE_ALERT
    });
  };

  // Remove Alert

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
        closeAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
