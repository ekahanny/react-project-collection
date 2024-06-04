import Input from "./Input"
import Label from "./Label"

const InputForm = (props) => {
    /* Saat komponen InputForm digunakan,
     ia menerima props seperti name, label, type, dan placeholder.
    */ 
    const {type, name, placeholder, label} = props
    return (
        <>
        {/* Meneruskan value dari props ke component label & input */}
            <Label htmlFor={name} label={label} />
            <Input name={name} type={type} placeholder={placeholder} />    
        </>
    )
}
export default InputForm