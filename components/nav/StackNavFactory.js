import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Photo from "../../screens/Photo";
import Profile from "../../screens/Profile";
import Feed from "../../screens/Feed";
import Search from "../../screens/Search";
import Notifications from "../../screens/Notifications";
import Me from "../../screens/Me";
import { SCREENS } from "../../screens/Screens";

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }) {
  return (
    <Stack.Navigator>
      {screenName === SCREENS.Feed ? (
        <Stack.Screen name={SCREENS.Feed} component={Feed} />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name={"Search"} component={Search} />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name={"Notifications"} component={Notifications} />
      ) : null}
      {screenName === SCREENS.Me ? (
        <Stack.Screen name={SCREENS.Me} component={Me} />
      ) : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
