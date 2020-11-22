import { useContext } from 'react';
import styled from 'styled-components';
import { HandlersContext } from './Form';

const SpanRed = styled.span`
  color: #e74149;
  font-weight: bold;
`

export const SpanErrorMessage = styled(SpanRed)`
  display: inline-block;
  height: 1rem;
`

const StyledInput = styled.input`
  width: 287px;
  height: 23px;
  border: solid 1px #d0d0d0;
  font-weight: 300;
  ${({type}) => type === 'submit' && `
    width: 92px;
    height: 40px;
    border-radius: 3px;
    background-color: #fad312;
    font-size: 15px;
  `}
`

export default function Input({ input }) {

  const { attributes } = input;
  const handlers = useContext(HandlersContext);
  const { handleChange, handleValidationCheck } = handlers;
  
  function InputTitle({ title, required }) {
    return (
      <h2>
        {title}
        {required ? <SpanRed>*</SpanRed> : ''}
      </h2>
    )
  }
  
  return (
    <div>
      <label htmlFor={attributes.name}>
        <InputTitle title={input.text} required={input.attributes.required}/>
        {input.description ? <p>{input.description}</p> : ''}
      </label>
      {input.attributes.type === 'radio'
        ? input.options.map(option => {
          return (
            <div key={option.key}>
              <label htmlFor={option.id}>
                <input
                  {...attributes}
                  {...option}
                  onInvalid={handleValidationCheck}
                  onChange={handleChange}
                  onBlur={handleValidationCheck}
                />
                  {option.value}
              </label>
            </div>
          )
        })
        : <StyledInput
            {...attributes}
            onInvalid={handleValidationCheck}
            onBlur={handleValidationCheck}
            onChange={handleChange}
          />
      }
      <div><SpanErrorMessage>{input.errorMessage}</SpanErrorMessage></div>
    </div>
  )
}
