import React from 'react'

let divStyle = {
    width: '350px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    
    padding: '13px 20px',
    margin: '4px',
    borderRadius: '5px',
    fontSize: '20px',
    borderRight: 'none',
}

function EachTransaction(props) {
    if (props.value > 0) {
        divStyle = {...divStyle, borderRight: 'green 8px solid', background: '#a7f3d0'}
    }
    else if (props.value < 0){
        divStyle = {...divStyle, borderRight: 'red 8px solid', background: '#fecdd3'}
    }
        return (
            <div style={divStyle}>
                <p style={{
                    margin: '0px',
                }}>{props.description}</p>
                <p style={{
                    margin: '0px'
                }}>{props.value}</p>
            </div>
        )
}

export default EachTransaction
