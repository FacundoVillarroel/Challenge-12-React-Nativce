import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { CartItem } from '../../components';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, confirmCart } from '../../store/actions';

import { styles } from "./styles";


const Cart = ({ navigation }) => {  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const onDelete = (id) => {
    dispatch(removeFromCart(id))
  }

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={onDelete} />
  ) 

  const onCreateOrder = () => {
    dispatch(confirmCart(cart, total))
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={cart}
        renderItem={renderItem}
        keyExtractor={ item => item.id.toString()}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={cart.length===0?{...styles.buttonConfirm, backgroundColor:"gray"} : styles.buttonConfirm } 
          onPress={onCreateOrder} 
          disabled={cart.length === 0}
          >
            <Text style={styles.textConfirm}>Confirm order</Text>
            <Text style={styles.textConfirm}>Total: ${total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Cart