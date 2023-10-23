import React, { useState } from "react";
import { View, Button, Text, FlatList } from "react-native";
import { Menu, Provider, TextInput } from "react-native-paper";

const TicketAdd: React.FC = () => {
  const [ticketName, setTicketName] = useState("");
  const [price, setPrice] = useState("");
  const [seatInfo, setSeatInfo] = useState("");
  const [tickets, setTickets] = useState<
  Array<{ name: string; price: string; seat: string; category: string }>
>([]);

  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("카테고리 선택");

  const handleSubmit = () => {
    if (ticketName && price && seatInfo) {
      setTickets([...tickets, { name: ticketName, price, seat: seatInfo, category: selectedCategory }]);
      setTicketName("");
      setPrice("");
      setSeatInfo("");
    }
  };

  return (
    <Provider>
      <View style={{ padding: 16, flex: 1 }}>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Button
              title={selectedCategory}
              onPress={() => setMenuVisible(true)}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              setSelectedCategory("원가 미만");
              setMenuVisible(false);
            }}
            title="원가 미만"
          />
          <Menu.Item
            onPress={() => {
              setSelectedCategory("콘서트");
              setMenuVisible(false);
            }}
            title="콘서트"
          />
          <Menu.Item
            onPress={() => {
              setSelectedCategory("스포츠");
              setMenuVisible(false);
            }}
            title="스포츠"
          />
          <Menu.Item
            onPress={() => {
              setSelectedCategory("뮤지컬/연극");
              setMenuVisible(false);
            }}
            title="뮤지컬/연극"
          />
          <Menu.Item
            onPress={() => {
              setSelectedCategory("영화/전시");
              setMenuVisible(false);
            }}
            title="영화/전시"
          />
        </Menu>
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
            <View
              style={{
                marginTop: 16,
                padding: 8,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 8,
              }}
            >
              <Text>분류: {item.category}</Text>
              <Text>티켓 이름: {item.name}</Text>
              <Text>가격: {item.price}</Text>
              <Text>좌석 정보: {item.seat}</Text>
            </View>
          )}
        />
      </View>
    </Provider>
  );
};

export default TicketAdd;
