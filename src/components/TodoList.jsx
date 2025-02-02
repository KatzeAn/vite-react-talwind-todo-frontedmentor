import TodoItem from "./TodoItem";
const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        <div className= "[&>article]:p-4 bg-white rounded-md  mt-8 transition-all duration-500">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            ))}
        </div>
    );

}
export default TodoList;