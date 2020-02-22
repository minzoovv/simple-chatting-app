import React from 'react';

import Main from './view/main';
import Content from './component/content';
import { Header } from './component/header';

function App() {
  return (
    <div>
      <Header />
      <Content>
        <Main></Main>
      </Content>
    </div>
  );
}

export default App;
