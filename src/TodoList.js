import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const TodoList = ({ todos }) => {
  return (
    <View style={styles.container}>
      { todos.map(todo => <Text>{todo}</Text>) }
    </View>
  );
};

const matStateToProps = state => ({
  todos: state.todos,
});

export default connect(matStateToProps)(TodoList);
