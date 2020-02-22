import React from 'react';

import * as S from './styles';

interface MessageProps {
  user: string;
  message: string;
}

const Message: React.FunctionComponent<MessageProps> = ({ user, message }) => {
  return (
    <S.Message>
      <S.User>{user}:</S.User>
      <S.Content>{message}</S.Content>
    </S.Message>
  );
};

export default Message;
