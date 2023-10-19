import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const Tab = createBottomTabNavigator();

const UnderCostScreen = () => <></>;
const ConcertScreen = () => <></>;
const SportsScreen = () => <></>;
const MusicalTheaterScreen = () => <></>;
const MovieExhibitionScreen = () => <></>;
const GoodsScreen = () => <></>;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="UnderCost">
          <Tab.Screen
            name="UnderCost"
            component={UnderCostScreen}
            options={{ title: "원가 미만" }}
          />
          <Tab.Screen
            name="Concert"
            component={ConcertScreen}
            options={{ title: "콘서트" }}
          />
          <Tab.Screen
            name="Sports"
            component={SportsScreen}
            options={{ title: "스포츠" }}
          />
          <Tab.Screen
            name="MusicalTheater"
            component={MusicalTheaterScreen}
            options={{ title: "뮤지컬/연극" }}
          />
          <Tab.Screen
            name="MovieExhibition"
            component={MovieExhibitionScreen}
            options={{ title: "영화/전시" }}
          />
          <Tab.Screen
            name="Goods"
            component={GoodsScreen}
            options={{ title: "굿즈" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
