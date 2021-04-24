import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View } from "react-native";

import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Me from "../screens/Me";

import TabIcon from "../components/nav/TabIcon";
import StackNavFactory from "../components/nav/StackNavFactory";
import { SCREENS } from "../screens/Screens";

const Tabs = createBottomTabNavigator();
export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        showLabel: false,
        style: {
          borderTopColor: "rgba(255,255,255,0,3)",
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"home"} focused={focused} color={color} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={SCREENS.Feed} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"search"} focused={focused} color={color} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={SCREENS.Search} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Camera"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"camera"} focused={focused} color={color} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"heart"} focused={focused} color={color} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={SCREENS.Notifications} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"person"} focused={focused} color={color} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={SCREENS.Me} />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
