import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from "./styles";

const Product = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected)
  const { title, price, description, id } = product || {}

  const handleAddToCart = () => {
    console.warn(`product: ${title} Id: ${id} added to the cart`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <TouchableOpacity
        style={styles.addToCartContainer}
        onPress={handleAddToCart}
      >
        <Text style={styles.addToCart}> Agregar al Carrito </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Product