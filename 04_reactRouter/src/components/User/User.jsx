import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='flex bg-gray-600 text-white p-2 font-bold '>User: {userid}</div>
  )
}

export default User