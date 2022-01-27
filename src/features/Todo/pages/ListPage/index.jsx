import React, { useState } from "react";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    console.log(todo, idx);

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );

  const handleTodoFormSubmit = (values) => {
    console.log("Form submit: ", values);
  };
  return (
    <div>
      <TodoForm submit={handleTodoFormSubmit}></TodoForm>
      <h3>Todo List</h3>
      <TodoList
        todoList={renderedTodoList}
        onTodoClick={handleTodoClick}
      ></TodoList>

      <button onClick={handleShowAllClick}>Show ALL</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleShowNewClick}>Show New</button>
    </div>
  );
}

export default ListPage;
