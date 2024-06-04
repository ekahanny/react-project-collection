import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    const {children, title, type} = props
    return (
        /*
        AuthLayout berguna untuk mengatur
        tampilan ketika user sudah memiliki
        akun atau belum.
        */ 
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-xl bg-slate-100 p-10 rounded-md border-sky-700 border">
                {/* title berisikan judul halaman, apakah login/register */}
                <h1 className="font-bold text-3xl text-slate-700 mb-5">{title}</h1>
                <p className="font-medium text-slate-500 mb-5">
                Welcome, please enter your details
                </p>
                {/* children akan menampilkan FormLogin/FormRegister sesuai pagenya */}
                {children}
                <p className="mt-7 text-sm text-center">
                    {/* typenya akan diatur pada LoginPage atau RegisterPage */}
                    {type === "login" ? "Don't have any account? " : "Already have an account? "}
                    {type === "login" && (
                        <Link to="/register" className="font-medium text-sky-500">Register</Link>
                    )}
                    {type === "register" && (
                        <Link to="/" className="font-medium text-sky-500">Login</Link>
                    )}

                </p>
            </div>
        </div>
    )
}

export default AuthLayouts