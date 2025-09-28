import { useState } from "react";
import { Button, Modal, TextInput, View, StyleSheet } from "react-native";

const GoalInput = ({ onClose, onSave, visible }) => {
  const [goalText, setGoalText] = useState('');

  const handleTextChange = (enteredText) => {
    setGoalText(enteredText);
  };

  const handleSaveGoal = () => {
    if (!goalText.trim()) return;
    onSave(goalText);
    setGoalText('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter goal"
          onChangeText={handleTextChange}
          value={goalText}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={handleSaveGoal} />
          <Button title="Exit" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 8
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
