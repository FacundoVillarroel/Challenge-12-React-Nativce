import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from "./styles"
import { colors } from '../../constants/colors'

const Products = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Go to Product"
        color={colors.primary}
        onPress={() => navigation.navigate('Product')}
      />
    </View>
  )
}

export default Products