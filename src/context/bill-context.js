import React, { useEffect, useState, createContext } from 'react';

const BillContext = createContext();

const BillProvider = ({ children }) => {
    const [bills, setBills] = useState([]);
    const [selectedCostInterval, setSelectedCostInterval] = useState('Monthly');
    const [editModeEnabled, setEditModeEnabled] = useState(false);

    useEffect(() => {
        setBills(JSON.parse(localStorage.getItem('portexe-bills')) || []);
    }, [setBills])


    const updateBills = (bill) => {
        const updatedBills = alphabeticalOrder([
            ...bills, bill
        ]);
        //can only store strings in localstorage, hence stringify
        localStorage.setItem('portexe-bills', JSON.stringify(updatedBills))
        setBills(updatedBills);
    };

    const editBill = (BillToUpdate) => {
        const billsFiltered = bills.filter((bill) => bill.title !== BillToUpdate.title);
        const updatedBills = alphabeticalOrder([
            ...billsFiltered, BillToUpdate
        ]);
        localStorage.setItem('portexe-bills', JSON.stringify(updatedBills))
        setBills(updatedBills);
    };

    //keep order upon toggle
    const alphabeticalOrder = (bills) => {
        return bills.sort((a, b) =>
            a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0);
    }

    const deleteBill = (billToDelete) => {
        const updatedBills = bills.filter((bill) => bill.title !== billToDelete.title);
        localStorage.setItem('portexe-bills', JSON.stringify(updatedBills))
        setBills(updatedBills);
    }

    return (
        <BillContext.Provider value={{
            bills,
            updateBills,
            editBill,
            selectedCostInterval,
            setSelectedCostInterval,
            setEditModeEnabled,
            editModeEnabled,
            deleteBill
        }}>
            {children}
        </BillContext.Provider>
    );
};

export { BillContext, BillProvider };