import InputToDo from "../components/InputToDo"
import ToDoList from "../components/ToDoList"
import { useState } from "react"


const ToDoPage = () => {
    const [todo, setTodo] = useState("")
    
    const handleChangeToDo = (event) => {
        const {name, value} = event.target
        setTodo((prevToDo) => {
            return {
                ...prevToDo, 
                [name]: value,
            }
        })
     }

    const handleSubmitToDo = (event) => {
        event.preventDefault()
        event.target.todo.value = ""
        console.log(todo)
    }


    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-4xl font-semibold text-cyan-500 text-center mb-4">TO DO LIST</h1>
                <p className="italic text-center text-sm text-rose-400 mb-5">Simple app to manage your daily to-dos...</p>
                <div className="w-full max-w-xl bg-cyan-50 p-10 rounded-md border">
                   <form onSubmit={handleSubmitToDo}>
                        <InputToDo 
                            name="todo"
                            type="text"
                            placeholder="Add a new tasks..."
                            onChange={handleChangeToDo}
                        />
                        <button className="h-10 px-3 font-semibold text-xl rounded-md bg-rose-400 text-black mt-7 ml-3" type="submit">+</button>
                    </form>
                    <ToDoList children={todo.todo}/>
                </div>
            </div>
        </>
    )
}

export default ToDoPage