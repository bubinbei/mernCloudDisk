import React, { useState } from 'react'
import Input from '../../utils/input/input'
import './Registration.css'
import {registration} from '../../actions/user.js'

export default function Registration() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    return (
    <div className='registration'>
      <div className='registration__header'>Регистрация</div>
      <Input value={email} setValue={setEmail} type='text' placeholder='email'/>
      <Input value={password} setValue={setPassword} type='text' placeholder='password'/>
      <button className='registration__btn' onClick={()=>{registration(email,password)}}>Регистрация</button>
    </div>
  )
}
