import "./Expess.css";
import FirtReactItem from "../ItemComponent/ExpessItem";
function Expess(props) {
  return (
    <div className="expenses">
      {
        props.item.map((item, index) => {
          return <FirtReactItem
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></FirtReactItem>
        })}
    </div>
  );
}
export default Expess;
