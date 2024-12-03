import * as React from 'react';
import { Modal, Portal, Text, Button, TextInput } from 'react-native-paper';
import { StyleSheet, View, Alert } from 'react-native';

const AddExpenseModal = ({ visible, hideModal }) => {
  const [expenseName, setExpenseName] = React.useState('');
  const [expenseAmount, setExpenseAmount] = React.useState('');

  // Validate inputs before saving
  const handleSave = () => {
    if (!expenseName || !expenseAmount) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }

    // Handle saving the expense data (e.g., save to the server, local storage, etc.)
    console.log('Expense Name:', expenseName);
    console.log('Expense Amount:', expenseAmount);
    hideModal(); // Close modal after saving
  };

  const containerStyle = { backgroundColor: 'white', padding: 20, borderRadius: 10, maxWidth: 400 };

  return (
    <Portal>
      <Modal style={styles.container} visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text style={styles.modalTitle}>Add New Expense</Text>
        <TextInput
          label="Expense Name"
          value={expenseName}
          onChangeText={setExpenseName}
          style={styles.input}
          mode="outlined"
          placeholder="e.g., Groceries"
        />
        <TextInput
          label="Amount"
          value={expenseAmount}
          onChangeText={setExpenseAmount}
          keyboardType="numeric"
          style={styles.input}
          mode="outlined"
          placeholder="e.g., 100.00"
        />
        <View style={styles.buttonContainer}>
          <Button mode="outlined" onPress={hideModal} style={styles.cancelButton}>Cancel</Button>
          <Button mode="contained" onPress={handleSave} style={styles.saveButton}>Save</Button>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 6
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#4CAF50', // Green for saving
    flex: 1,
  },
  cancelButton: {
    flex: 1,
    borderColor: '#6200ea', // Purple border for cancel
    marginRight: 5,
  },
});

export default AddExpenseModal;
