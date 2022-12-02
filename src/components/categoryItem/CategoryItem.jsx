import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { styles } from "./styles";

const CategoryItem = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => onSelected(item)}
      >
        <Text style={styles.title}>{(item.title).toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CategoryItem