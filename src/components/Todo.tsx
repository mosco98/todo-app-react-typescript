import { FC } from "react"
import { ITodo } from "../interfaces"

interface Props {
  todo: ITodo
  removeTodoHandler(id: string): void
  toggleCompletedHandler(id: string): void
}

const Todo: FC<Props> = ({
  todo,
  removeTodoHandler,
  toggleCompletedHandler
}) => {
  const { id, task, completed } = todo
  return (
    <div className="px-4 py-3 my-4 bg-gray-100 w-96 mx-auto flex items-center justify-between shadow-sm">
      <span>
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={completed}
          onChange={() => toggleCompletedHandler(id)}
        />
      </span>
      <span
        className={
          completed
            ? "text-gray-800 line-through italic opacity-70"
            : "text-gray-800"
        }
      >
        {task}
      </span>
      <button
        className={
          completed
            ? "bg-red-400 select-none text-sm text-white px-2 py-1 focus:outline-none"
            : "bg-red-400 select-none opacity-0 cursor-default text-sm text-white px-2 py-1 focus:outline-none"
        }
        onClick={() => {
          completed && removeTodoHandler(id)
        }}
      >
        X
      </button>
    </div>
  )
}

export default Todo
