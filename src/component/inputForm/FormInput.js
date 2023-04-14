import { useState } from "react";
import "./FormInput.css";

function FormInput(props) {
  console.log(props);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // get data after onchanger input
  const hanldTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };
  const hanldAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };
  const hanldDateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  // click button render data
  const renderData = (e) => {
    e.preventDefault();
    let newData = [...props.data];
    newData.push({
      id: newData.length + 1,
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    });
    props.setData(newData);
  };

  return (
    <div>
      <form onSubmit={renderData}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" onChange={hanldTitleChange}></input>
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" onChange={hanldAmountChange}></input>
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input type="date" onChange={hanldDateChange}></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </form>
    </div>
  );
}

export default FormInput;
