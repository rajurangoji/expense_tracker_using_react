import React, { useContext } from 'react'
import { transactionContext } from './App'
import './App.css'
import EachTransaction from './EachTransaction'

function TransactionHistory() {
    const info = useContext(transactionContext)
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    }}>
      <h1 style={{
        color:'#2563eb'
      }}>Transaction History</h1>
      <div className="transactions" >
          <p>{info.mainInfo.map((item)=><EachTransaction key={item.id} description={item.description} value={item.value}/>)}</p>
      </div>
    </div>
  )
}

export default TransactionHistory
