import './index.less';
import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const AppWrapper = styled.div`
  position: fixed;
  top: 25vh;
  left: 25vw;
  width: 50vw;
  height: 50vh;
  text-align: center;
`;

const App: React.FC<{}> = () => {
  return <AppWrapper>Hello</AppWrapper>;
};

window.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.querySelector('#root');

  if (!appContainer) {
    throw new Error('Fatal launch error, app container not found.');
  }

  ReactDOM.render(<App />, appContainer);
});
