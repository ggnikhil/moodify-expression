import React from 'react'
import { useAuth } from '../hooks/useAuth'

const Demo = () => {

    const {user} = useAuth()
    console.log(user)
  return (
    <div>
      <h1>demo</h1>
    </div>
  )
}

export default Demo
