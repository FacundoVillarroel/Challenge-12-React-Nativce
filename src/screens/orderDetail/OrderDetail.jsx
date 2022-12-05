import { View, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';

import { styles } from "./styles"
import { ORDERS } from '../../constants/data';
import { formatDate } from '../../utils';

const OrderDetail = ({navigate, route }) => {
  const { orderId } = route.params 

  const filteredOrder = ORDERS.find(order => order.id === orderId)
  const { id, date, total, items } = filteredOrder

  const renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Text style ={styles.productTitle}>{item.title.toUpperCase()}</Text>
      <Text style ={styles.productDescription}>Description: {item.description}</Text>
      <Text style ={styles.productQuantity}>Quantity: {item.quantity}</Text>
    </View>
  )

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>Order number: {id}</Text>
          <Text style={styles.text}>Issued on: {formatDate(date)}</Text>
          <Text style={styles.text}>Total: ${total}</Text>
        </View>
        <View style={styles.productsContainer}>
          <Text style={styles.products}>PRODUCTS:</Text>
          <FlatList 
            nestedScrollEnabled
            data={items}
            keyExtractor={item => item.id}
            renderItem={renderItem }
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default OrderDetail