import { FlatList, SafeAreaView } from 'react-native';
import React from 'react';

import { CATEGORIES } from "../../constants/data/index";
import { styles } from "./styles";
import { CategoryItem } from '../../components';

const Categories = ({ navigation }) => {

  const onSelected = (item) => {
    console.warn("onSelected", item)
  }

  const renderItem = ({ item }) => {
    return <CategoryItem item={item} onSelected={onSelected} />
  }

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.container}
        />
      </SafeAreaView>
    )
  }

export default Categories