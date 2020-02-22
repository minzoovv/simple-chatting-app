import React from 'react';

import * as S from './styles';

interface MessageProps {
  user: string;
  message: string;
}

const Message: React.FunctionComponent<MessageProps> = ({ user, message }) => {
  return <S.Message>시발뭐</S.Message>;
};

export default Message;
