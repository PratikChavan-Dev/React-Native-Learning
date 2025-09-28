import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

const GoalText = ({ goal, onDelete }) => {
  return (
    <Pressable onPress={() => onDelete(goal.id)}>
      <View style={styles.goalItem}>
        <Text>{goal.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalText;

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 5
  }
});
