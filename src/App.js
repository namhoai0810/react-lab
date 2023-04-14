import { useState, useEffect } from "react";
import Expess from "./component/UI/Expess";
import FormInput from "./component/inputForm/FormInput";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [data, setData] = useState(expenses);

  return (
    <div className="App">
      <h1>Get redy</h1>
      <FormInput setData1={setData} data={data}></FormInput>
      <Expess item={data}></Expess>
    </div >
  );
}

export default App;
