import React, { useState } from 'react'
import Input from '../../utils/input/input'
import './Registration.css'
import {login} from '../../actions/user.js'
import { useDispatch } from 'react-redux'

export default function Autorization() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
    return (
    <div className='registration'>
      <div className='registration__header'>Авторизация</div>
      <Input value={email} setValue={setEmail} type='text' placeholder='email'/>
      <Input value={password} setValue={setPassword} type='text' placeholder='password'/>
      <button className='registration__btn' onClick={()=>dispatch(login(email,password))}>Войти</button>
    </div>
  )
}
