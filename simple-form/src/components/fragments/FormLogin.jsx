import Btn from "../elements/Button/Btn";
import InputForm from "../elements/Input/Index";

/*

Alur pembuatan form login: buat masing-masing komponen
label & input kemudian satukan pada InputForm (Index.jsx)
kemudian gunakan component InputForm & isi props dari
component input & label sesuai kebutuhan.

*/ 

const FormLogin = () => {
    return (
        <>
            <form>
                <InputForm
                    name="fullname"
                    label="Nama Lengkap"
                    type="text"
                    placeholder="Nama Lengkap"
                />
                <InputForm
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="email@gmail.com"
                />
                <InputForm
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="*******"
                />
                <InputForm
                    name="confirmPass"
                    label="Confirm Password"
                    type="password"
                    placeholder="*******"
                />
                <Btn type="submit" color="bg-slate-700">Submit</Btn>
            </form>
        </>
    );
}

export default FormLogin;
