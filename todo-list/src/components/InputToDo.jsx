const InputToDo = () => {
    return (
        <>

                <div className="flex flex-row">
                    <input 
                        name="todo"
                        className="mt-7 text-sm border rounded w-full h-10 py-2 px-3 text-slate-700 placeholder:opacity-80" 
                        type="text"
                        placeholder="Add a new task..."
                    />
                    <button className="h-10 px-3 font-semibold text-xl rounded-md bg-rose-400 text-black mt-7 ml-4">+</button>
                </div>
        </>
    )
}

export default InputToDo