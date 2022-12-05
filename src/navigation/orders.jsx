import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Orders, OrderDetail } from "../screens";

import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.secondary,
        },
        headerTintColor: COLORS.primaryText,
        headerTitleStyle: {
          fontFamily: 'Anek-Bold',
        },
        headerBackTitle:""
      }}>
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
        />
      </Stack.Navigator>
  )
}

export default OrdersNavigator