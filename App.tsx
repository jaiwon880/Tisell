import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const Tab = createBottomTabNavigator();

const UnderCostScreen: React.FC = () => <></>;
const ConcertScreen: React.FC = () => <></>;
const SportsScreen: React.FC = () => <></>;
const MusicalTheaterScreen: React.FC = () => <></>;
const MovieExhibitionScreen: React.FC = () => <></>;
const GoodsScreen: React.FC = () => <></>;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

const App: React.FC = () => {
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

export default App;
