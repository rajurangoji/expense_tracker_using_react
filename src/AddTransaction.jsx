import React, { useContext, useEffect } from 'react'
import './App.css'
import { transactionContext } from './App'

let inputstyle = {
  border: 'none'

}
function AddTransaction() {
  const info = useContext(transactionContext)
  return (
    <div>
      <div>
        <h1 style={{
          color: '#2563eb'
        }}>Add New Transaction</h1>
      </div>
      <div className='addtrans'>
        <input type="text" name="text" id="text" className='inputstyle' placeholder='Enter a description' style={inputstyle} /><br />
        <input type="number" name="value" id="value" className='inputstyle' placeholder='Enter a Amount' style={inputstyle} /><br />
        <button id='btn-add-trans' onClick={() => {
          if (document.getElementById('text').value != "" || document.getElementById('value').value != "") {
            let text = document.getElementById('text').value
            let value = document.getElementById('value').value

            document.getElementById('text').value = ''
            document.getElementById('value').value = ''


            let obj = {
              id: Math.floor(Math.random() * 9000000000),
              description: text,
              value: value
            }

            info.dispatch({ type: 'add', obj: obj })
            document.getElementById('text').style.border = 'none'
            document.getElementById('text').style.boxShadow = 'none'
            document.getElementById('value').style.border = 'none'
            document.getElementById('value').style.boxShadow = 'none'
          }
          else if (document.getElementById('text').value == "" || document.getElementById('value').value == "") {
            document.getElementById('text').style.border = '1px solid red'
            document.getElementById('text').style.boxShadow = '0px 0px 8px red'
            document.getElementById('value').style.border = '1px solid red'
            document.getElementById('value').style.boxShadow = '0px 0px 8px red'
          }

        }}>Add Transaction</button>
      </div>
    </div>
  )
}

export default AddTransaction
