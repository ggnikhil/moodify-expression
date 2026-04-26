import React from 'react'

const FromGroup = ({label,value,onChange,placeholder}) => {
  return (
    <div>
        <div className='fromgroup'>
              <label htmlFor={label}>{label}</label>
              <input
                value={value}
                onChange={onChange} 
                type="text" 
                id={label} 
                name={label}
                placeholder={placeholder}
                required
                />
        </div>
    </div>
  )
}

export default FromGroup
