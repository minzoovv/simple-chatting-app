import React from 'react';

import * as S from './styles';
import Message from '../../component/message';

const Chat: React.FC = () => {
  console.log(sampleData);
  return (
    <S.Chat>
      <S.Container>
        <S.ChattingRoom>
          {sampleData.map(d => (
            <Message user={d.user} message={d.message} />
          ))}
        </S.ChattingRoom>
        <S.InputContainer>
          <S.Input />
          <S.SendButton>전송하기</S.SendButton>
        </S.InputContainer>
      </S.Container>
    </S.Chat>
  );
};

export default Chat;

var sampleData = [
  {
    user: '당단풍나무',
    message: '???',
  },
  {
    user: 'yo',
    message: 'fuckyou',
  },
  {
    user: 'yo',
    message: 'fuckyou',
  },
  {
    user: 'yo',
    message: 'fuckyou',
  },
  {
    user: 'yo',
    message: 'fuckyou',
  },
  {
    user: 'yo',
    message: 'fuckyou',
  },
  {
    user: 'yo',
    message: 'fuckyou',
  },
  {
    user: 'yo',
    message: 'fuckyou',
  },
  {
    user: 'yo',
    message: 'fuckyou',
  },
];
