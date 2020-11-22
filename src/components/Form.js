import { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';
import Input from './Input';
import useInputs from '../useInput';

const HandlersContext = createContext()

export default function Form() {

  const { inputs, handlers } = useInputs();
  
  function handleSubmit(e) {
    e.preventDefault();
    let alertMessage = '請確認您所提交的內容'
    inputs.forEach(input => {
      if (input.attributes.type !== 'submit' && input.attributes.value) {
        alertMessage += `\n${input.text}：${input.attributes.value}`
      }
    })
    alert(alertMessage);
  }

  useEffect(() => {
    //console.log(inputs)
  }, [inputs])

  return (
    <HandlersContext.Provider value={handlers}>
      <form onSubmit={handleSubmit}>
        {
          inputs.map(input => {
            return <Input input={input} key={inputs.indexOf(input)} />
          })
        }
      </form>
    </HandlersContext.Provider>
  )
}

export {HandlersContext}