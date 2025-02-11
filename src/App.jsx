import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import { useState } from "react";


const InitialStateTodos = [
  {id: 1, title: "Complete onlyne JavaScript bluuweb Curse", completed: true},
  {id: 2, title: "Go to the gym", completed: false},
  {id: 3, title: "10 minutes medication", completed: false},
  {id: 4, title: "pick up groseries", completed: false},
  {id: 5, title: "complete todo app  on frontend mentor", completed: true},


]
const App = () => {
  const [todos, setTodos] = useState(InitialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  const computedItemsLeft =  todos.filter(todo => !todo.completed).length
  
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const [filter, setFilter] = useState ("active");

  const changeFilter = (filter) => setFilter(filter)

  const filterEdTodos =() =>{
    switch (filter) {
      case "all":
        return todos;
        case "active":
          return todos.filter((todo) => !todo.completed);
          case "completed":
            return todos.filter((todo) => todo.completed);
            default:
              return todos;
    };
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen  dark:bg-gray-800 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo} />
        <TodoList 
          todos={filterEdTodos()} 
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>
    </div>
  );
};

export default App;