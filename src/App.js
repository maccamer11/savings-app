import React, { useContext } from 'react';
import AddBill from './components/addbills/addbill.component';
import './App.css';
import { BillContext } from './context/bill-context';
import BillList from './components/bill-list/bill-list.component';
import BillTotal from './components/billtotal/billtotal.component';
import BillOptions from './components/bill-options/bill-options.component';
import EditBills from './components/edit-bills/edit-bills.component';

const App = () => {


  const { editModeEnabled } = useContext(BillContext);

  //provider wrap provides state to component, thrown in index.js around our entire app, need to wrap whole app in it


  // if editMode is enabled, we only want to display editBills component
  //if editMode is not enabled we want to display everything else
  return (
    <div className='container-fluid panel'>
      <div className='bills-container'>
        {
          editModeEnabled ? <EditBills /> : <span><BillOptions /> <AddBill /><BillTotal /> <BillList /></span>
        }
      </div>
    </div>
  );
}

export default App;
