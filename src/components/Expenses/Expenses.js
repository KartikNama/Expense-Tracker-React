import React,{ useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (expenses) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {/* {filteredExpenses.length === 0 ? <p>No Expenses Found</p> : filteredExpenses.map((expense) =>(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) )} */}
      {/* another method for this above */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p> }
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) =>(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) ) } */}

        <ExpensesChart expenses={filteredExpenses} />

    {/* Getting rid of inline return */}
      <ExpensesList items={filteredExpenses}/>

      {/* New Method Working In Loop */}
      {/* {filteredExpenses.map((expense) =>(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) )} */}
      {/* <ExpenseItem expense = {expenses[0]} />
      <ExpenseItem expense = {expenses[1]} />
      <ExpenseItem expense = {expenses[2]} />
      <ExpenseItem expense = {expenses[3]} /> */}
      {/* Old Method By Manually Displaying Each Items */}
      {/* <ExpenseItem title={expenses.items[0].title} amount={expenses.items[0].amount} date={expenses.items[0].date}></ExpenseItem>
      <ExpenseItem title={expenses.items[1].title} amount={expenses.items[1].amount} date={expenses.items[1].date}></ExpenseItem>
      <ExpenseItem title={expenses.items[2].title} amount={expenses.items[2].amount} date={expenses.items[2].date}></ExpenseItem>
      <ExpenseItem title={expenses.items[3].title} amount={expenses.items[3].amount} date={expenses.items[3].date}></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;