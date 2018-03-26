import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const FavoriteItem = ({ repository: { name, owner, description } }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: owner.avatar_url }} />
    <View style={styles.info}>
      <Text style={styles.title}>{name}</Text>
      <Text numberOfLines={2} style={styles.description}>{description}</Text>
    </View>
  </View>
);

FavoriteItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
    }).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteItem;
