import { useState } from 'react';
import { Button, StyleSheet, View, ScrollView } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalText from './components/GoalText';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (goal) => {
    setGoals((prevGoals) => [{ text: goal, id: Math.random().toString() }, ...prevGoals]);
    setShowModal(false);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoalDelete = (id) => {
    setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== id));
  };

  return (
    <View style={styles.container}>
      <Button title='Add Goal' onPress={handleModalShow} />
      <GoalInput visible={showModal} onSave={addGoalHandler} onClose={handleCloseModal} />
      <ScrollView>
        {goals.map(goal => (
          <GoalText key={goal.id} goal={goal} onDelete={handleGoalDelete} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
