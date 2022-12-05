import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { formatDate } from "../../utils/index";
import { COLORS } from "../../constants/colors";

const OrderItem = ({ item, onDelete, onDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>Issued on: {formatDate(item.date)}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.total}>Total: ${item.total}</Text>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color={COLORS.danger} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => {onDetails(item.id)}} style={styles.buttonDetailContainer}>
        <Text style={styles.details}>View Orders Details</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OrderItem