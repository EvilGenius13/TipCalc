import React from 'react';
import './calc.css';
import { useState } from 'react';

function Calculator() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [total, setTotal] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  
  function calculateTotal(bill, tip, people) {
    setTipTotal((bill * tip) / 100);
    tip = (tip / 100) + 1;
    let total = ((bill * tip) / people).toFixed(2);
    
    setTotal(total)
    setTotalPerPerson(total / people);
  }

  return (
    <div className="Container">
      <h1>Tip Calculator</h1>
        <div className="Display">
          <h2>Bill Amount</h2>
          <input type="number" placeholder="0.00"
           onChange={(e) => setBill(e.target.value)}
           />
          <h2>Tip %</h2>
          <input type="number" placeholder="0.00"
           onChange={(e) => setTip(e.target.value)}
           />
          <h2>No. of people splitting?</h2>
          <input type="number" placeholder="0.00"
           onChange={(e) => setPeople(e.target.value)}
          />
          <div className="Button"
          onClick={() => calculateTotal(bill, tip, people)}
          >
            <button>Calculate</button>
          </div>
        <div className="Results">
          <h2>Tip Amount</h2>
          {tipTotal > 0 ? <h3>${tipTotal}</h3> : ""}
          <h2>Total Per Person</h2>
          {totalPerPerson > 0 ? <h3>${totalPerPerson}</h3> : ""}
          <h2>Total Amount</h2>
          {total >0 ? <h3>${total}</h3> : ""}
        </div>
      </div>
    </div>
  );
}

export default Calculator;