import Btn from "../elements/Button/Btn"
import InputForm from "../elements/Input/Index"

const FormRegist = () => {
    return (
        <>
            <InputForm
                    name="fullname"
                    label="Nama Lengkap"
                    type="text"
                    placeholder="John Doe"
            />
            <InputForm
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="johndoe@gmail.com"
            />
            <InputForm
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="*******"
            />
            <InputForm
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="*******"
            />
            <Btn type="submit" color="bg-slate-700">Register</Btn>
        </>
    )
}

export default FormRegist