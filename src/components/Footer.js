import React from 'react'

const Footer = () => {
    const date = new Date()
  return (
    <div className='footer'>
        <p>copywrite &copy; {date.getFullYear()}</p>
    </div>
  )
}

export default Footer