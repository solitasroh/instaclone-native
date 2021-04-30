import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import SelectPhoto from "../screens/SelectPhoto";
import UploadNav from "../navigators/UploadNav";

const Stack = createStackNavigator();

export default function LoggedInNav() {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Tabs" component={TabsNav} />
      <Stack.Screen name="Upload" component={UploadNav} />
    </Stack.Navigator>
  );
}
