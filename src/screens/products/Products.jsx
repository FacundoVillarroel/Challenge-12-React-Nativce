import { FlatList } from 'react-native'
import React from 'react'

import { PRODUCTS } from "../../constants/data/index"
import { styles } from "./styles"
import { ProductItem } from '../../components'

const Products = ({ navigation, route}) => {
  const { categoryId } = route.params

  const filteredProducts = PRODUCTS.filter(product => product.categoryId == categoryId) 

  const onSelected = (item) => {
    navigation.navigate("Product", {productId:item.id})
  }

  const renderItem = ({item}) => {
    return <ProductItem item={item} onSelected={onSelected} />
  }

  return (
    <FlatList
      style={styles.container}
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default Products