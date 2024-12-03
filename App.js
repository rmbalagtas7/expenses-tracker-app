import { StyleSheet, View, StatusBar } from 'react-native';
import { PaperProvider, Divider, Text } from 'react-native-paper';
import NavBar from './components/NavBar.js';
import CardTotal from './components/CardTotal.js';
import ExpensesList from './components/ExpensesList.js';
import AddExpense from './components/AddExpense.js';

const expensesData = [
  { id: '1', name: 'Airbnb', amount: 2500.00 },
  { id: '2', name: 'Transport', amount: 150.00 },
  { id: '3', name: 'Utilities', amount: 100.00 },
  { id: '4', name: 'Dining Out', amount: 200.00 },
  { id: '5', name: 'Entertainment', amount: 120.00 },
  { id: '6', name: 'Shopping', amount: 500.00 },
  { id: '7', name: 'Movies', amount: 75.00 },
  { id: '8', name: 'Gym Membership', amount: 150.00 },
  { id: '9', name: 'Online Subscriptions', amount: 300.00 },
  { id: '10', name: 'Fuel', amount: 180.00 },
  { id: '11', name: 'Books', amount: 250.00 },
  { id: '12', name: 'Gifts', amount: 100.00 },
  { id: '13', name: 'Health Insurance', amount: 800.00 },
  { id: '14', name: 'Electricity', amount: 220.00 },
  { id: '15', name: 'Phone Bill', amount: 100.00 },
  { id: '16', name: 'Internet', amount: 350.00 },
  { id: '17', name: 'Subscriptions', amount: 180.00 },
  { id: '18', name: 'Rent', amount: 1000.00 },
  { id: '19', name: 'Car Insurance', amount: 200.00 },
  { id: '20', name: 'Repairs', amount: 450.00 },
];



const totalExpenses = expensesData.length > 0
  ? expensesData.reduce((total, expense) => total + expense.amount, 0)
  : 0.00;

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />  {/* Ensures status bar text is dark */}
      <NavBar />
      <View style={styles.container}>
        <CardTotal totalExpenses={totalExpenses} />
        <Divider style={styles.divider} />
        {expensesData.length === 0 ? (
          <Text style={styles.noTransactionsText}>No transactions yet.</Text>
        ) : (
          // Pass expensesData to ExpensesList
          <ExpensesList expensesData={expensesData} />
        )}
      </View>
      <AddExpense />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8', // Light gray background for better contrast
    paddingHorizontal: 15,  // Add padding for spacing
    paddingTop: 20,  // Add padding from the top for better spacing
  },
  divider: {
    marginVertical: 15,  // Increase vertical margin for better spacing
    borderColor: '#D1D1D1',  // Subtle gray divider color
    borderWidth: 0.5,  // A softer line for the divider
  },
  noTransactionsText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',  // Light gray color to indicate no transactions
    marginTop: 20,
  },
});
