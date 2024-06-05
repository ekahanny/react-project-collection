import Input from "./Input"
import Label from "./Label"

const InputForm = (props) => {
    /* component ini mengirimkan 4 props.
    !!! props diinisialisasi hanya pada component
    yang mengirimkan props yang bersangkutan
    */ 
    const {type, name, placeholder, label, onChange} = props
    return (
        <>
        {/* Meneruskan value dari props ke component label & input */}
            <Label htmlFor={name} label={label} />
            <Input name={name} type={type} placeholder={placeholder} onChange={onChange}/>    
        </>
    )
}
export default InputForm