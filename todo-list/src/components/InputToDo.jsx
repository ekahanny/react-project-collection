const InputToDo = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="w-full max-w-xl bg-slate-100 p-10 rounded-md border-sky-700 border">
                <h1 className="text-3xl font-semibold text-sky-900 text-center mb-4">TO DO LIST</h1>
                <p className="italic text-center text-sm">Your all in one tasks...</p>
                <div className="flex flex-row">
                    <input 
                        name="todo"
                        className="mt-7 text-sm border rounded w-full h-10 py-2 px-3 text-slate-700 placeholder:opacity-80 border-slate-400" 
                        type="text"
                        placeholder="Add a new task..."
                    />
                    <button className="h-10 px-3 font-semibold text-xl rounded-md bg-sky-600 text-white mt-7 ml-4">+</button>
                </div>
            </div>       
        </div>
    )
}

export default InputToDo