import * as React from 'react';
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { StyleSheet, View, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import AddExpenseModal from './AddExpenseModal.js';

const AddExpense = () => {

  const [modalVisible, setModalVisible] = React.useState(false); // State to control modal visibility

  const showModal = () => setModalVisible(true); // Show the modal
  const hideModal = () => setModalVisible(false); // Hide the modal

  function handlePress() {
    console.log("pindot")
  }
  return (
    <View>
      <AddExpenseModal visible={modalVisible} hideModal={hideModal} /> {/* Pass state and handler to modal */}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={showModal}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    left: '50%',  // Position the FAB horizontally at the center
    bottom: 5,  // Position it at the bottom with margin
    transform: [{ translateX: -32 }], // Adjust to truly center by translating half of the FAB width
    backgroundColor: '#4CAF50', // You can change the color
  },
});

export default AddExpense;