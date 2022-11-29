import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Categories, Products, Product } from "../screens/index";
import { colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.primaryText,
        headerTitleStyle: {
          fontFamily: 'Anek-Bold',
        },
      }}>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
