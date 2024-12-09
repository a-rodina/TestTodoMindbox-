import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoRedux, removeTodoRedux, changeTodoRedux, deleteAllTodoRedux, deleteLastTodoRedux, updateAllCounterRedux, updateCompletedCounterRedux, showCompletedRedux, showAllRedux} from './slice/todo';
import { TTodo } from './types';

function App() {

  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo);
  
  function addTodo() {
    if (inputText !== "") {
        let formatDate = String(new Date()).slice(4, 10);
        let todoObject = {
            id: Date.now(),
            text: inputText,
            date: formatDate,
            isChecked: false
        }
        dispatch(addTodoRedux(todoObject));
        dispatch(updateAllCounterRedux());
    }
    setInputText("");
  }

  function remove(id: number) {
    dispatch(removeTodoRedux(id));
    dispatch(updateAllCounterRedux());
    dispatch(updateCompletedCounterRedux())
  }

  function changeTodo(id: number) {
    dispatch(changeTodoRedux(id));
    dispatch(updateCompletedCounterRedux());
  }

  function showTodos() {
    if (todos.isOnlyCompletedShown) {
      return (<div data-testId='cypress-cardContainer' className='card-container'>
        {todos.checkedTodo.map((item: TTodo, index: number) => <Card key={index} oneTodo={item} remove={remove} changeTodo={changeTodo}></Card>)}
        </div>)
    } else {
      return (<div data-testId='cypress-cardContainer' className='card-container'>
      {todos.todo.map((item: TTodo, index: number) => <Card key={index} oneTodo={item} remove={remove} changeTodo={changeTodo}></Card>)}
      </div>)
    }
  }

  return (
    <>
    <div className='container'>
      <h1 className='title'>todos</h1>
      <Header 
        inputText={inputText} 
        setInputText={setInputText} 
        addTodo={addTodo} 
        deleteAllTodo={() => {dispatch(deleteAllTodoRedux()); dispatch(updateAllCounterRedux()); dispatch(updateCompletedCounterRedux())}} 
        deleteLastTodo={() => {dispatch(deleteLastTodoRedux()); dispatch(updateAllCounterRedux()); dispatch(updateCompletedCounterRedux())}} 
        showAll={() => dispatch(showAllRedux())}
        showCompleted={() => dispatch(showCompletedRedux())}
        ></Header>
        {todos.todo.length > 0 ? showTodos() : null}
    </div>
    </>
  );
}

export default App;
