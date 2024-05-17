import React, { useContext, useEffect, useState } from 'react'
import { transactionContext } from './App'
import './App.css'

function IndivudualBalance() {
  const info = useContext(transactionContext)

  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    let income = 0;
    let expense = 0;

    for (let i = 0; i <= info.mainInfo.length - 1; i++) {
      if (Number(info.mainInfo[i].value) > 0) {
        income += Number(info.mainInfo[i].value)
        setIncome(income)
      }
      else if (Number(info.mainInfo[i].value) < 0) {
        expense += Number(info.mainInfo[i].value)
        setExpense(expense)
      }

    }
  }, [info.mainInfo])
  return (
    <div style={{
      marginTop:'50px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }}>
      <h1 style={{
        color: '#2563eb',
        margin:'0px'

      }}>Indivudual Balance</h1>
      <div className="inc-exp">
        <div className="income">
          <h4>Income</h4>
          <p>Rs. {income}</p>
        </div>
        <hr />
        <div className="exp">
          <h4>Expense</h4>
          <p>Rs. {expense}</p>
        </div>
      </div>
    </div>
  )
}

export default IndivudualBalance
