import { ChangeEvent, FC, SyntheticEvent, useState } from "react"

interface Props {
  addTodoHandler(task: string): void
}

const Header: FC<Props> = ({ addTodoHandler }) => {
  const [task, setTask] = useState<string>("")

  function inputChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  function formSubmitHandler(event: SyntheticEvent): void {
    event.preventDefault()
    addTodoHandler(task)
    setTask("")
  }

  return (
    <div className="p-5 text-center">
      <h1 className="text-5xl mb-8">Hello there!</h1>
      <form
        className="w-2/4 flex items-center justify-center mx-auto"
        onSubmit={formSubmitHandler}
      >
        <span
          className="flex items-center border border-black border-opacity-20 w-2/3"
          style={{ minWidth: "400px" }}
        >
          <input
            className="p-2 focus:outline-none"
            type="text"
            placeholder="Enter a task"
            autoFocus={true}
            style={{ width: "90%" }}
            onChange={inputChangeHandler}
            value={task}
          />
          <button className="bg-green-400 text-sm text-white p-2">Add</button>
        </span>
      </form>
    </div>
  )
}

export default Header
