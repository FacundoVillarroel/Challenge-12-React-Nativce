import { FlatList } from 'react-native'
import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts, selectProduct } from '../../store/actions';

import { styles } from "./styles";
import { ProductItem } from '../../components';

const Products = ({ navigation}) => {
  const categoryId = useSelector( state => state.category.selected);
  const filteredProducts = useSelector( state => state.products.filteredProducts)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(filterProducts(categoryId.id))
  },[])

  const onSelected = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate("Product", {title: item.title})
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