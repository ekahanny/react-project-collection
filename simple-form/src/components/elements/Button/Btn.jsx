const Btn = (props) => {
    const {children, type, color="bg-black"} = props
    return (
        <>
        <div className="flex justify-center items-center">
            <button className={`h-10 px-6 font-semibold rounded-md ${color} text-white mt-7`} type={type}>
               {children}
            </button>
        </div>
        </>
    )
}

export default Btn