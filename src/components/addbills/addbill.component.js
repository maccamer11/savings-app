import React, { useContext, useState } from 'react';

import './addbill.styles.css'
import { BillContext } from '../../context/bill-context';

const AddBill = () => {

    const [newBillTitle, setNewBillTitle] = useState('');
    const [newBillCost, setNewBillCost] = useState('');

    //let's use context, BillContext, and from this context, I'm grabbing updateBills
    const { updateBills } = useContext(BillContext)

    const validateBill = () => {
        //newBillCost is a number
        const costValid = newBillCost && Number.parseFloat(newBillCost);
        //newBillCost is not only whitespace
        const titleValid = newBillTitle && newBillTitle.split('').find(char => char !== ' ');
        return costValid && titleValid;
    }

    const clearForm = () => {
        setNewBillTitle('');
        setNewBillCost('');
    }


    return (
        <div className='add-bill-container'>
            <h1 className='text-center'>Saver Widget</h1>
            <h3 className='text-center'>See how much you can save!</h3>
            <input
                className='add-bill-form-control form-control'
                placeholder='Enter bill title'
                type='text'
                value={newBillTitle}
                onChange={(e) => setNewBillTitle(e.target.value)} />

            <input
                className='add-bill-form-control form-control'
                placeholder='Enter monthly bill amount'
                type='number'
                value={newBillCost}
                onChange={(e) => setNewBillCost(e.target.value)} />
            <button className='add-bill-form-control btn btn-info'
                onClick={() => {
                    if (validateBill()) {
                        updateBills({
                            title: newBillTitle,
                            monthlyCost: newBillCost,
                            enabled: true
                        });
                        clearForm();
                    }
                }}> Add Bill</button>
        </div>
    );
}

export default AddBill;