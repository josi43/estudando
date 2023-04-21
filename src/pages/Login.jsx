import React from 'react'
import {  Main } from '../components/Main';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Caixa } from '../components/Caixa';
import { Imagem } from '../components/Imagem';

export const Login = (props) => {
    const navigate = useNavigate();
    function handleClick(event) {
        props.onLogin(event);
        navigate("/")
    }
  return (
    <>
        <Main>
            <Caixa>
                <Imagem/>
                <Input lacuna="email"/>
                <Input lacuna="password"/>
                <Button onClick={handleClick}/>
            </Caixa>
        </Main>
    </>
  )
}
