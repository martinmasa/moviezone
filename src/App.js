import React, { Component } from 'react';
import styled from 'styled-components';

import 'typeface-source-sans-pro';
import GlobalStyle from './Global.style';

const AppContainer = styled.div`
  color: #2e2e2e;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <h1 data-testid="page-title">MovieZone</h1>
      </AppContainer>
    );
  }
}

export default App;
