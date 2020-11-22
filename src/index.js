import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const StyledFooter = styled.footer`
  position: relative;
  max-width: 1920px;
  height: 60px;
  background-color: #000000;

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 13px;
    color: #999999;
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <App />
    <StyledFooter>
        <p>© 2020 © Copyright. All rights Reserved.</p>
      </StyledFooter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
