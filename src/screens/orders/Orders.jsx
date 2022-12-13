import { View, FlatList } from 'react-native';
import React,{ useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { OrderItem } from "../../components/index";
import { useSelector, useDispatch } from 'react-redux';

import { styles } from "./styles";
import { getOrders, deleteOrder } from '../../store/actions';

const Orders = ({ navigation }) => {
  const orders = useSelector(state => state.orders.list)
  const distpach = useDispatch();

  const onDelete= (id) => {
    distpach(deleteOrder(id));
  }

  const onDetails = (id) => {
    navigation.navigate("OrderDetail", {orderId:id})
  }

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDelete} onDetails={onDetails}/>
  )

  useFocusEffect(
    useCallback(()=> {
      distpach(getOrders());
    },[distpach])
  )

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={orders}
        renderItem= {renderItem}
        keyExtractor={ item => item.id.toString() }
      />
    </View>
  )
}

export default Orders