import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { CartItem } from '../../components';
import { CART } from "../../constants/data/index"

import { styles } from "./styles";


const Cart = ({ navigation }) => {  
  const total = 3210

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
        data={CART}
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