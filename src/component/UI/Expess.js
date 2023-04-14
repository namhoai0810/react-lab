import "./Expess.css";
import FirtReactItem from "../ItemComponent/ExpessItem";
import NewExpessForm from "../inputForm/NewExpessForm";
function Expess(props) {
  return (
    <div className="expenses">
      <NewExpessForm></NewExpessForm>

      <FirtReactItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></FirtReactItem>
      <FirtReactItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></FirtReactItem>
      <FirtReactItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></FirtReactItem>
      <FirtReactItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></FirtReactItem>
    </div>
  );
}
export default Expess;
