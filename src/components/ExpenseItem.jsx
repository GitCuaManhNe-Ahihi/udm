import React, { Component } from 'react';
import ExpenseDate from './ExpenseDate';
class ExpenseItem extends Component {

    render() {
        return (
            <>  
            <ExpenseDate></ExpenseDate>
            <div>name</div>
            <div>price</div>
            </>
        );
    }
}

