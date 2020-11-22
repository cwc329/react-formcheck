import { useEffect } from 'react';
import styled from 'styled-components';
import Form from './components/Form';

const AppWrapper = styled.div`
  box-sizing: border-box;
  max-width: 645px;
  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border-top: solid 8px #fad312;
  margin: 120px auto 60px auto;
  padding: 35px 45px;

  @media(max-width: 768px) {
    align-self: center;
    margin: 0px auto 60px auto;
    padding: 35px 25px;
    box-shadow: none;
    border: solid 1px rgba(0, 0, 0, 0.3);
    border-top: solid 8px #fad312;
  }
`

const StyledSpan = styled.span`
  color: #e74149;
  font-weight: bold;
`

function App() {

  useEffect(() => {

  }, [])
  return (
    <AppWrapper className="App">
      <h1>新拖延運動報名表單</h1>
      <p>
        活動日期：2020/12/10 ~ 2020/12/11<br/>
        活動地點：台北市大安區新生南路二段1號<br/>
      </p>
      <p>
        <StyledSpan>必填 *</StyledSpan>
      </p>
      <Form />
    </AppWrapper>
  );
}

export default App;
