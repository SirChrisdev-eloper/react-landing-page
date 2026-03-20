import React from 'react'

const Loginbutton = ({onClick, children, disabled}) => {
  return (
    <div>
        <button type='button' onClick={onclick} disabled={disabled}>{children}
            
        </button>
    </div>
  )
}

export default Loginbutton