import { FlatList, SafeAreaView } from 'react-native';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions';
import { styles } from "./styles";
import { CategoryItem } from '../../components';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories)

  const onSelected = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate("Products", { title:item.title })
  }

  const renderItem = ({ item }) => {
    return <CategoryItem item={item} onSelected={onSelected} />
  }

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.container}
        />
      </SafeAreaView>
    )
  }

export default Categories