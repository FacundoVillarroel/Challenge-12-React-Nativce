import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart } from "../screens";

import { COLORS } from "../constants/colors";


const Stack = createNativeStackNavigator()

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