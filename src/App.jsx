import React, { createContext, useReducer } from 'react'
import Balance from './Balance'
import IndivudualBalance from './IndivudualBalance'
import TransactionHistory from './TransactionHistory'
import AddTransaction from './AddTransaction'


const transactionList = [

]

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.obj]
      
    default:
      return state;

  }
}


export const transactionContext = createContext()

function App() {
  const [mainInfo, dispatch] = useReducer(reducer, transactionList)
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <transactionContext.Provider value={{ mainInfo, dispatch }}>
        <h1 style={{
          color: '#1e3a8a'
        }}>Expense Tracker</h1>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: "100px"
        }}>
          <span>
            <AddTransaction />
          </span>
          <span>
            <Balance />
            <IndivudualBalance />
          </span>
          <span>
            <TransactionHistory />
          </span>
        </div>

      </transactionContext.Provider>
    </div>
  )
}

export default App
