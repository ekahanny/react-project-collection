const InputToDo = (props) => {
    const {name, type, placeholder, onChange} = props

    return (
        <>
            <input 
                name={name}
                className="mt-7 ml-3 text-sm border rounded w-5/6 h-10 py-2 px-3 text-slate-700 placeholder:opacity-80" 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export default InputToDo