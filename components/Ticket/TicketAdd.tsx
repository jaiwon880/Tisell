import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { TextInput } from "react-native-paper";

const TicketAdd: React.FC = () => {
  const [ticketName, setTicketName] = useState('');
  const [price, setPrice] = useState('');
  const [seatInfo, setSeatInfo] = useState('');

  const handleSubmit = () => {
    console.log("Ticket Info:", ticketName, price, seatInfo);
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        label="티켓 이름"
        value={ticketName}
        onChangeText={setTicketName}
      />
      <TextInput
        label="가격"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        label="좌석 정보"
        value={seatInfo}
        onChangeText={setSeatInfo}
      />
      <Button title="등록" onPress={handleSubmit} />
    </View>
  );
};

export default TicketAdd;
