import React, { useContext, useEffect, useState } from 'react'
import { transactionContext } from './App'





function Balance() {
  const info = useContext(transactionContext)

  useEffect(() => {
    let sum = 0 ;
    for(let i=0 ; i<= info.mainInfo.length - 1 ; i++){
      sum += Number(info.mainInfo[i].value)
    }
    setTotalBalance(sum)
  }, [info.mainInfo])

  const [totalBalance , setTotalBalance] = useState(0)
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }}>
      <h1 style={{
        color:'#2563eb',
      }}>Total Balance</h1>

      <p style={{
        fontSize:'30px',
        margin:'0px',
        color:' rgb(28, 204, 28)',
        padding:'20px 35px',
        borderRadius:'15px',
        background:'white',
        boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      }}>Rs.{totalBalance}</p>
    </div>
  )
}

export default Balance
