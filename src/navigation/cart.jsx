import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart } from "../screens";

import { COLORS } from "../constants/colors";


const Stack = createBottomTabNavigator()

const CartNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="Cart"
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
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
  )
}

export default CartNavigator