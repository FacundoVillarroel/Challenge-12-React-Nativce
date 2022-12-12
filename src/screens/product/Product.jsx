import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions';
import { styles } from "./styles";

const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected)
  const { title, price, description, id } = product || {}

  const handleAddToCart = () => {
    dispatch(addToCart(product))
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