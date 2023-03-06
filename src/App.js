import { useState } from "react";
import { Title } from "./components/Title/";
import { Todo } from "./components/Todo";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([
    {
      id:1,
      title: 'Watch the next Marvel Movie',
      completed: false,
    },
    {
      id:2,
      title: 'Record the next video',
      completed: false,
    },
    {
      id:3,
      title: 'Whash the dishes',
      completed: false,
    },
    {
      id:4,
      title: 'Study 2 hours',
      completed : false,
    }

  ])
  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput />
        <TodoList todos={todos} />

      </div>
    </div>
  );
}

export default App;
