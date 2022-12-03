import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { styles } from "./styles"

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onSelected(item)}
      >
        <Text style={styles.title}>{(item.title).toUpperCase()}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProductItem