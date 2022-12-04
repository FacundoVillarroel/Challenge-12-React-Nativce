import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Orders } from "../screens";

import { COLORS } from "../constants/colors";

const Stack = createBottomTabNavigator()

const OrdersNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.primaryText,
        headerTitleStyle: {
          fontFamily: 'Anek-Bold',
        },
        headerBackTitle:"",
        headerShown:false,
      }}>
        <Stack.Screen
          name="Orders"
          component={Orders}
        />
      </Stack.Navigator>
  )
}

export default OrdersNavigator