import React, { useState } from "react";
import "./App.css";
import InputField from "./component/InputField";
import { Todo } from "./modal";
import TodoList from "./component/TodoList";
// import { DragDropContext } from "react-beautiful-dnd";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
// import { Droppable, DroppableProps } from "react-beautiful-dnd";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let add;
    let active = todos;
    // let complete = CompletedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      // add = complete[source.index];
      // complete.splice(source.index, 1);
    }
  };
  return (
    <DragDropContext
      onDragEnd={() => {
        // onDragEnd;
      }}
    >
      <div className="App">
        <span className="heading">To-Do-Task</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
