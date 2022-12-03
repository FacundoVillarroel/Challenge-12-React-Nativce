import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from "./styles"
import { PRODUCTS } from '../../constants/data'

const Product = ({ navigation, route }) => {
  const { productId } = route.params 

  const filteredProduct = PRODUCTS.find( item => item.id === productId)
  const { title, price, description } = filteredProduct || {}

  const handleAddToCart = () => {
    return null
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