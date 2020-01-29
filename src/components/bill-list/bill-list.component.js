import React, { useContext, useState } from 'react';
import { BillContext } from '../../context/bill-context';


import './bill-list.styles.css'

const BillList = () => {

    const { bills, editBill, setEditModeEnabled } = useContext(BillContext);


    return (
        <div className='bill-list-container'>
            <button className='edit-mode-btn btn btn-info' onClick={() => setEditModeEnabled(true)}>Edit</button>
            {
                bills.map((bill, index) => {
                    return (
                        <div key={index} className='bill-list-row text-center'>
                            <div className='bill-list-row-content'>
                                <input type='checkbox'
                                    className='form-check-input'
                                    checked={bill.enabled}
                                    onChange={() => editBill({
                                        title: bill.title,
                                        monthlyCost: bill.monthlyCost,
                                        enabled: !bill.enabled
                                    })} />
                                {bill.title} - ${bill.monthlyCost}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default BillList