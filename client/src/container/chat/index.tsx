import React from 'react';

import * as S from './styles';
import Message from '../../component/message';

const Chat: React.FC = () => {
  return (
    <S.Chat>
      <S.Container>
        <S.ChattingRoom>
          {sampleData.map((d, idx) => (
            <Message key={idx} user={d.user} message={d.message} />
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
    message: 'I love you',
  },
  {
    user: 'yo',
    message: 'I love you',
  },
  {
    user: 'yo',
    message: 'I love you',
  },
  {
    user: 'yo',
    message: 'I love you',
  },
  {
    user: 'yo',
    message: 'I love you',
  },
  {
    user: 'yo',
    message: 'I love you',
  },
  {
    user: 'yo',
    message: 'I love you',
  },
  {
    user: 'yo',
    message: 'I love you',
  },
];
