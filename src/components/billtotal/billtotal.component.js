import React, { useContext, useState } from 'react';

import './billtotal.styles.css'
import { BillContext } from '../../context/bill-context';

const BillTotal = () => {

    const { bills, selectedCostInterval } = useContext(BillContext);

    const moneyIntervalTransform = (cost) => {
        const monthlyCost = Number.parseFloat(cost);
        switch (selectedCostInterval) {
            case 'Monthly':
                return monthlyCost;
            case 'Yearly':
                return monthlyCost * 12;
            case 'Weekly':
                return monthlyCost * 12 / 52;
            case 'Daily':
                return monthlyCost * 12 / 365;

            default:
                return 0;
        }
    };

    return (
        <>
            <div className='bill-total-container text-center'>{selectedCostInterval} bill cost:
        <span className='total-cost'>
                    {
                        '$' + bills.reduce((acc, val) => {
                            return val.enabled ?
                                moneyIntervalTransform(val.monthlyCost) + acc : acc
                        }, 0).toFixed(2)
                    }
                </span>
            </div>
            <div className='total-saved-container text-center'>
                {selectedCostInterval} saved:
                <span className='total-saved'>
                    {
                        '$' + bills.reduce((acc, val) => {
                            return !val.enabled ?
                                moneyIntervalTransform(val.monthlyCost) + acc : acc
                        }, 0).toFixed(2)
                    }
                </span>
            </div>
        </>
    );
}

export default BillTotal;