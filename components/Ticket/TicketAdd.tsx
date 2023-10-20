import React from 'react';
import { TextInput } from "react-native-paper";

const TicketAdd: React.FC = () => {
  return (
    <>
      <TextInput label="티켓 이름" />
      <TextInput label="가격" />
      <TextInput label="좌석 정보" />
    </>
  );
};

export default TicketAdd;
