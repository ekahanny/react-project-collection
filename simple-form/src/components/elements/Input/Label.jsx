const Label = (props) => {
    const {name, label} = props
    return (
            /*
            Props pada komponen Label di file Label.jsx
            berasal dari komponen InputForm di file Index.jsx.
            */ 
            <label htmlFor={name} className="block text-slate-700 text-sm font-medium mb-1 mt-3">
                {label}
            </label>
    )
}
export default Label