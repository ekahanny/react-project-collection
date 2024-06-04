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
        <h1 className="font-bold text-3xl text-slate-700 mb-5">LOGIN</h1>
            <form>
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
                <Btn type="submit" color="bg-slate-700">Login</Btn>
            </form>
        </>
    );
}

export default FormLogin;
