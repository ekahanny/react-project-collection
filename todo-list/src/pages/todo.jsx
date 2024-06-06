import InputToDo from "../components/InputToDo"
import ToDoList from "../components/ToDoList"
import { useState } from "react"


const ToDoPage = () => {
    const [todo, setTodo] = useState({tasks: [], currentTask: ""})
    
    // memperbaharui currentTask dalam state todo dengan inputan user
    const handleChangeToDo = (event) => {
        const {value} = event.target
        setTodo((prevToDo) => {
            console.log("previous to do: ", prevToDo)
            console.log("inputan user: ", event.target.value)
            return {
                // menyalin semua property yg ada dalam todo
                ...prevToDo, 
                // mengubah nilai currentTask dengan inputan user
                currentTask: value,
            }
        })
     }

    // menambahkan currentTask kedalam array tasks pada state todo
    const handleSubmitToDo = (event) => {
        event.preventDefault()

        // jika `currentTask` kosong, fungsi tidak melakukan apa-apa
        if(todo.currentTask.trim() === "") return;

        setTodo(prevTodo => ({

            // menyalin semua tugas yang ada dalam array tasks dan menambahkan currentTask ke dalamnya

            /* ...prevTodo.tasks mengambil tasks sebelumnya, 
                agar ketika user menambahkan tasks baru, tasks
                sebelumnya tidak tergantikan oleh tasks yang baru
            */ 

            tasks: [...prevTodo.tasks, prevTodo.currentTask ],
            currentTask: ""
        }))        
        console.log("state todo: ", todo)
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
                            // Setiap kali currentTask berubah, nilai input field juga akan diperbarui secara otomatis.
                            value={todo.currentTask}
                            onChange={handleChangeToDo}
                        />
                        <button className="h-10 px-3 font-semibold text-xl rounded-md bg-rose-400 text-black mt-7 ml-3" type="submit">+</button>
                    </form>
                    {todo.tasks.length > 0 && todo.tasks.map((task, index) => (
                        <ToDoList key={index}>{task}</ToDoList>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ToDoPage