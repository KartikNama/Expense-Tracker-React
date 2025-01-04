import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';



// export default function ExpenseItem(props) {

//     return (<div className="expense-item">
//         <div>{props.expense.date.toISOString()}</div>
//         <div className="expense-item__description">
//             <h2>{props.expense.title}</h2>
//             <div className="expense-item__price">${props.expense.amount}</div>
//         </div>
//     </div>
//     );
// }
export default function ExpenseItem({ date, title, amount }) {

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>
        </li>
    );
}

