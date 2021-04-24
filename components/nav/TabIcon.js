import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TabIcon({ iconName, focused, color }) {
  return (
    <Ionicons
      name={focused ? iconName : `${iconName}-outline`}
      color={color}
      size={24}
    />
  );
}
