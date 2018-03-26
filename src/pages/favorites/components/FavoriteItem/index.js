import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const FavoriteItem = ({ repository }) => (
  <View>
    <Text>{repository.full_name}</Text>
  </View>
);

export default FavoriteItem;
