import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  transactions: []
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
// this provides all the state and any actions to the components that it is wrapped around.
// useReducer takes in a reducer function and an initial state. AppReducer is 
// defined in AppReducer.js
export const GlobalProvider = ({ children }) => {
  // reducers return the state and a dispatch function
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  // in this case, all the children component will have access to initialState.transactions object,
  // deleteTransaction function, and addTransaction function
  return (
    <GlobalContext.Provider value={
      { 
        transactions: state.transactions ,
        deleteTransaction,
        addTransaction
      }
    }>
      {children}
    </GlobalContext.Provider>
  );
}