import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // Method 1 Seperate UseStates
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // Method 2 Single UseStates

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // const titleChangeHandler = (event) => {
    //     // Method 1
    // //    setUserInput({ 
    // //     ...userInput,
    // //     enteredTitle: event.target.value
    // //    })

    //     // Method 2
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value};
    //     });
    // };

    // const amountChangeHandler = (event) => {
    //     // Method 1
    //     // setUserInput({ 
    //     //     ...userInput,
    //     //     enteredAmount: event.target.value
    //     //    })

    //     // Method 2
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredAmount: event.target.value};
    //     });
    // }
    // const dateChangeHandler = (event) => {
    //     // Method 1
    //     // setUserInput({ 
    //     //     ...userInput,
    //     //     enteredDate: event.target.value
    //     //    })

    //     // Method 2
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredDate: event.target.value};
    //     });
    // }

    // Method 3 
    // const inputChangeHandler = (identifier,value) =>{
    //     if(identifier === 'title'){
    //         setEnteredTitle(value);
    //     }
    //     else if (identifier === 'amount'){
    //         setEnteredAmount(value);
    //     }
    //     else if(identifier === 'date'){
    //         setEnteredDate(value);
    //     }
    // }

    const submitHandler = (event) => {

        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    {/* Method - 3 Output  */}
                    {/* <input type="text" onChange={(event) => {inputChangeHandler('title',event.target.value)}} /> */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                    {/* Method - 3 Output  */}
                    {/* <input type="number" min="0.01" step="0.01" onChange={(event) => {inputChangeHandler('amount',event.target.value)}}/> */}
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2000-01-01" max="2027-12-31" value={enteredDate} onChange={dateChangeHandler} />
                    {/* Method - 3 Output  */}
                    {/* <input type="date" min="2019-01-01" max="2027-12-31" onChange={(event) => {inputChangeHandler('date',event.target.value)}} /> */}
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm