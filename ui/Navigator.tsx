import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UnderCostScreen from "../components/UnderCost/UnderCostScreen";
import ConcertScreen from "../components/Concert/ConcertScreen";
import SportsScreen from "../components/Sports/SportsScreen";
import MusicalTheaterScreen from "../components/MusicalTheater/MusicalTheaterScreen";
import MovieExhibitionScreen from "../components/MovieExhibition/MovieExhibitionScreen";
import GoodsScreen from "../components/Goods/GoodsScreen";
import TicketAdd from "../components/Ticket/TicketAdd";

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => {
  return (
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
        name="TicketAdd"
        component={TicketAdd}
        options={{ title: "티켓 등록" }}
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
  );
};

export default Navigator;
