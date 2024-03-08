import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {id:"e1"},
    {title : "Car Insurance",amoung : 294.67,date :new Date(2021,2,28)},
    {title : "Car Insurance",amoung : 294.67,date :new Date(2021,2,28)},
    {title : "Car Insurance",amoung : 294.67,date :new Date(2021,2,28)},
    {title : "Car Insurance",amoung : 294.67,date :new Date(2021,2,28)}
  ];
  
  return (
    <div>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
