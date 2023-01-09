import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
    <div>
        {props.popMsg && <div className={`alert alert-${props.popMsg.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.popMsg.type)}</strong>: {props.popMsg.msg}
        
        </div>}
    </div>
  )
}
