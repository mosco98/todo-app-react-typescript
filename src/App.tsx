import { FC, useState } from "react"
import Header from "./components/Header"
import Todo from "./components/Todo"
import { ITodo } from "./interfaces"
import { v4 } from "uuid"

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  function addTodoHandler(task: string): void {
    const newTodo = { id: v4(), task, completed: false }

    setTodos([...todos, newTodo])
  }

  function removeTodoHandler(id: string): void {
    const newTodos = todos.filter((todo: ITodo) => todo.id !== id)
    setTodos(newTodos)
  }

  function toggleCompletedHandler(id: string): void {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div>
      <Header addTodoHandler={addTodoHandler} />

      <section className="text-center p-5 mt-2">
        {todos.length ? (
          <>
            {todos.map((todo: ITodo, i: number) => (
              <Todo
                key={i}
                todo={todo}
                removeTodoHandler={removeTodoHandler}
                toggleCompletedHandler={toggleCompletedHandler}
              />
            ))}
          </>
        ) : (
          <span className="text-4xl font-light">No todos</span>
        )}
      </section>
    </div>
  )
}

export default App
