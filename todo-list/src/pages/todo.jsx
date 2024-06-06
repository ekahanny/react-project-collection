import InputToDo from "../components/InputToDo"
import ToDoList from "../components/ToDoList"

const ToDoPage = () => {
    return (
        <>
        
            <div className="flex flex-col justify-center items-center min-h-screen">
                    <h1 className="text-4xl font-semibold text-cyan-500 text-center mb-4">TO DO LIST</h1>
                    <p className="italic text-center text-sm text-rose-400 mb-5">Simple app to manage your daily to-dos...</p>
                <div className="w-full max-w-xl bg-cyan-50 p-10 rounded-md border">
                    <InputToDo/>
                    <ToDoList/>
                </div>
            </div>
        </>
    )
}

export default ToDoPage