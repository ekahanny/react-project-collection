const ContactInput = (props) => {
    const {name, type, placeholder, label} = props
    return (
        <div className="flex flex-col ml-3">
            <label htmlFor={name} className="block text-slate-700 text-sm font-semibold mb-2">{label}</label>
            <input
                className="text-sm border border-gray-400 rounded w-full h-10 py-2 px-3 mb-5 text-slate-700 placeholder:opacity-80" 
                name={name}
                type={type}
                placeholder={placeholder}
            />
            
        </div>
    )
}

export default ContactInput