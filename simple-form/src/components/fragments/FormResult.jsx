import { useLocation } from "react-router-dom";

const FormResult = () => {
    // untuk mengakses data yg dikirim dari component lain, gunakan useLocation
    const location = useLocation()
    const {fullname, email} = location.state || {}
    console.log("location : ",location)

    return (
        <div className=" flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-semibold text-sky-800">
                Data Diri
            </h1>
                <p className="text-xl font-bold">
                    Nama: <span className="font-normal">{fullname}</span>
                </p>
                <p className="text-xl font-bold">
                    Email: <span className="font-normal">{email}</span>
                </p>
        </div>
    );
};

export default FormResult;
