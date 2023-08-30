import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  
  const SaveDataHandler = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toString()
    };
    props.onAdd(data);
    
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveData={SaveDataHandler} />
    </Card>
  );
};

export default NewExpense;
