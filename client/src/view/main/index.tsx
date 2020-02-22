import React from 'react';

import * as S from './styles';
import Chat from '../../container/chat';

const Main = () => {
  return (
    <S.Main>
      <S.Container>
        <Chat></Chat>
      </S.Container>
    </S.Main>
  );
};

export default Main;
