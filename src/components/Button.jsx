import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

export const Button = (props) => {

  return (
    <div className='centro'>
        <button onClick={props.onClick} type="submit" className="btn btn-primary" >entrar</button>
    </div>
  )
}
