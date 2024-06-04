import Btn from "../elements/Button/Btn"
import InputForm from "../elements/Input/Index"

const FormRegist = () => {
    return (
        <>
        <h1 className="font-bold text-3xl text-slate-700 mb-5">REGISTER</h1>
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