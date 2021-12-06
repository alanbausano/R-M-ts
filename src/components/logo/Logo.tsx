import React from 'react'
import img from '../assets/Logo.png'

export const Logo = () => {
  return (
    <div style={{ display: 'flex', justifyContent:'center' }}>
      <img src={img} alt={'logo'} style={{ width:'500px' }} />
    </div>
  )
}
