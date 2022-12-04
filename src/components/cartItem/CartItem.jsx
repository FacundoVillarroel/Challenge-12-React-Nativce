import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";

import { styles } from './styles';
import { COLORS } from "../../constants/colors";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title.toUpperCase()}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
          <Text style={styles.price}>price: ${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color={COLORS.danger} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItem