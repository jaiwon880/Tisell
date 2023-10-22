import React, { useState } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import { TextInput } from "react-native-paper";

const TicketAdd: React.FC = () => {
  const [ticketName, setTicketName] = useState('');
  const [price, setPrice] = useState('');
  const [seatInfo, setSeatInfo] = useState('');
  const [tickets, setTickets] = useState<Array<{ name: string, price: string, seat: string }>>([]);

  const handleSubmit = () => {
    if (ticketName && price && seatInfo) {
      setTickets([...tickets, { name: ticketName, price, seat: seatInfo }]);
      setTicketName('');
      setPrice('');
      setSeatInfo('');
    }
  };

  return (
    <View style={{ padding: 16, flex: 1 }}>
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

      <FlatList
        data={tickets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginTop: 16, padding: 8, borderColor: 'gray', borderWidth: 1, borderRadius: 8 }}>
            <Text>티켓 이름: {item.name}</Text>
            <Text>가격: {item.price}</Text>
            <Text>좌석 정보: {item.seat}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TicketAdd;