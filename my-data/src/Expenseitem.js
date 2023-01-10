import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import ExpesnseDetails from "./ExpenseDetails";
import ExpenseAmount from "./ExpenseAmount";

import "./Expenseitem.css";


function Expenseitem(props) {
  return (
    <div className="expense-item ">

      <div className="expense-item ">

        <div className="expense-item__description ">
          <h2>{props.title} </h2>
        </div>
        <div className = "expense-item "><h5>{props.date.toISOString()}</h5> </div>
        <div className="expense-item__description " >
            <h5>{props.LocationOfExpenditure}</h5>
        </div>
        <div classNmae="expense-item__price"> <h3>Rs{props.amount}</h3></div>
      </div>




      < ExpesnseDetails LocationOfExpenditure={props.LocationOfExpenditure}></ExpesnseDetails> 
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpesnseDetails title = {props.title}></ExpesnseDetails>
      < ExpenseAmount amount={props.amount}></ExpenseAmount>
    </div>
  );
}
export default Expenseitem;
