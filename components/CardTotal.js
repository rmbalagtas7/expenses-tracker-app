import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const CardTotal = ({ totalExpenses }) => {
  // Example total expenses value
  //const totalExpenses = 1250.75;

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text variant="headlineSmall" style={styles.title}>Total Expenses</Text>
        <Text variant="headlineSmall" style={styles.amount}>₱ {totalExpenses.toFixed(2)}</Text>
        <Text variant="bodyMedium" style={styles.subtitle}>This is the total amount spent so far.</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    margin: 10,
    backgroundColor: '#ffffff',
    elevation: 5,
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for a positive vibe
    marginBottom: 5,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#FF5733', // Red color for the total amount to catch attention
    marginBottom: 5,
  },
  subtitle: {
    color: '#7F7F7F', // A light grey color for the explanation
  },
});

export default CardTotal;
