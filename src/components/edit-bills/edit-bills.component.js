import React, { useContext, useState } from 'react';

import './edit-bills.styles.css'
import { BillContext } from '../../context/bill-context';

const EditBills = () => {
    const { bills, setEditModeEnabled, editBill, deleteBill } = useContext(BillContext);

    return (
        <div className='edit-bill-container text-center'>
            <button className='edit-mode-btn btn btn-info' onClick={() => setEditModeEnabled(false)}>Done</button>
            {
                bills.map((bill, billIndex) => {
                    return (
                        <div key={billIndex} className='edit-bill-row'>
                            <div className='edit-bill-row-content'>
                                <div className='edit-bill-title'>{bill.title}</div>
                                <input className='edit-bill-cost-input' type='number' value={bill.monthlyCost} onChange={(e) => editBill({
                                    title: bill.title,
                                    enabled: bill.enabled,
                                    monthlyCost: e.target.value
                                })} />
                                <button className='btn btn-danger' onClick={() => deleteBill(bill)}>DELETE</button>
                            </div>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default EditBills;