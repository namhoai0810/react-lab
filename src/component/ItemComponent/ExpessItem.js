import "./ExpessItem.css";
import "./ExpenseDate.css";
import ExpessDate from "./ExpessDate";
import Card from "./Card";
function FirtReactItem(props) {
  // const item1 = "haha";
  // const item2 = "NoOne hope";

  return (
    <Card>
      <ExpessDate date={props.date}></ExpessDate>
      <div>
        <h2 className="expense-item__description">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default FirtReactItem;
