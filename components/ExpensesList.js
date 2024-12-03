import * as React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';




const ExpensesList = ({ expensesData }) => (
  <FlatList
    data={expensesData}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.expenseItem}>
        <Text style={styles.expenseName}>{item.name}</Text>
        <Text style={styles.expenseAmount}>₱ {item.amount.toFixed(2)}</Text>
      </View>

    )}
  />
);


const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#D1D1D1',
  },
  expenseName: {
    fontSize: 16,
    color: '#333',
  },
  expenseAmount: {
    fontSize: 16,
    color: '#FF5733', // Red color for amounts
  },
});

export default ExpensesList;