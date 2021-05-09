import React from 'react';
import './admin-summaryCard.styles.scss'

function AdminSummaryCardComponent(props) {
    return (
        <div className={props.colorSection}>
            <h3 className='admin-summaryCardTitle'>{props.title}</h3>
            <p className='admin-summaryCardNumber'>{props.number}</p>
            <div className='admin-increaseDiv'>
                <p className='admin-summaryCardIncrease'>{props.increase}</p>
                <p className='admin-summaryCardDays'>{props.days}</p>
            </div>

        </div>
    );
}

export default AdminSummaryCardComponent;
