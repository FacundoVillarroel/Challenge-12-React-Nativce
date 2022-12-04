import { React } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./shop";
import OrdersNavigator from "./orders";
import CartNavigator from "./cart";

import { isAndroid } from "../utils";
import { Ionicons } from "@expo/vector-icons" 
import { COLORS } from "../constants/colors";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown:false,
        tabBarLabelStyle:{
          fontSize:15,
          fontFamily:"Anek-SemiBold"
        },
        tabBarActiveTintColor:COLORS.secondary,
        tabBarInactiveTintColor:COLORS.secondaryText,
        tabBarStyle:{
          height:80,
          paddingBottom:10
        }
      }}
    >
      <BottomTab.Screen 
        name="ShopTab" 
        component={ShopNavigator} 
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={22} color={COLORS.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen name="CartTab" component={CartNavigator} 
        options={{
          title:"Cart",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "cart" : "cart-outline"} size={22} color={COLORS.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen name="OrdersTab" component={OrdersNavigator} 
        options={{
          title:"Orders",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "file-tray" : "file-tray-outline"} size={22} color={COLORS.primary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Tabs