export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      // filter function goes through the transactions array and return a new array
      // that fits the condition of the conditional statement
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }
} 