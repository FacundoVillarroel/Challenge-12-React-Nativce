import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { CartItem } from '../../components';
import { useSelector } from "react-redux";

import { styles } from "./styles";


const Cart = ({ navigation }) => {  
const cart = useSelector((state) => state.cart.items);
const total = useSelector((state) => state.cart.total);

  const onDelete = (id) => {
    console.log("deleted:",id);
  }

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={onDelete} />
  ) 

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={cart}
        renderItem={renderItem}
        keyExtractor={ item => item.id.toString()}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <Text style={styles.textConfirm}>Confirm order</Text>
            <Text style={styles.textConfirm}>Total: ${total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart