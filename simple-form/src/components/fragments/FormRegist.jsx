import { useState } from "react"
import Btn from "../elements/Button/Btn"
import InputForm from "../elements/Input/Index"
import { useNavigate } from "react-router-dom"

const FormRegist = () => {
        const navigate = useNavigate()

        // untuk menyimpan data inputan user
        const [inputData, setInputData] = useState({
                fullname: "",
                email: "",
                password: "",
                confirmPassword: "",
        })

        // untuk mengambil data inputan user
        const handleChange = (event) => {
                const {name, value} = event.target
                setInputData((prevData) => {
                        return {
                                ...prevData,
                                [name]: value,
                        }
                })
        }
        
        const handleSubmit = (event) => {
                event.preventDefault();

                // navigate digunakan utk mengarahkan user ke laman lain
                // state digunakan utk mengirimkan data saat melakukan navigasi
                navigate("/data-diri", {state: inputData})
                console.log("data : ",inputData)
        }

    return (
        <>
                <form onSubmit={handleSubmit}>
                        <InputForm
                                name="fullname"
                                label="Nama Lengkap"
                                type="text"
                                placeholder="John Doe"
                                onChange={handleChange}
                        />
                        <InputForm
                                name="email"
                                label="Email"
                                type="email"
                                placeholder="johndoe@gmail.com"
                                onChange={handleChange}
                        />
                        <InputForm
                                name="password"
                                label="Password"
                                type="password"
                                placeholder="*******"
                                onChange={handleChange}
                        />
                        <InputForm
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                placeholder="*******"
                                onChange={handleChange}
                        />
                        <Btn type="submit" color="bg-slate-700">Register</Btn>
                </form>
        </>
    )
}

export default FormRegist