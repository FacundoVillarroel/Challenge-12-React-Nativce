import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { OrderItem } from "../../components/index";

import { ORDERS } from "../../constants/data/index";
import { styles } from "./styles";

const Orders = ({ navigation }) => {
  
  const onDelete= (id) => {
    console.log(`order ${id} deleted`);
  }

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDelete} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={ORDERS}
        renderItem= {renderItem}
        keyExtractor={ item => item.id.toString() }
      />
    </View>
  )
}

export default Orders