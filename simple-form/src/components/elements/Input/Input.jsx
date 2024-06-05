const Input = (props) => {
    const {type, name, placeholder, onChange} = props;
    return (
            /*
            Props pada komponen Label di file Label.jsx
            berasal dari komponen InputForm di file Index.jsx.
            */ 
        <input 
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-70 border-slate-400" 
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default Input;
