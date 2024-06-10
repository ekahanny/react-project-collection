const Btn = ({isActive, children, onClick}) => {
    return (
        <button 
        className={`px-4 py-2 rounded-lg focus:outline-none text-white ${isActive ? 'bg-[#6F757C]' : 'bg-none'}`}
        onClick={onClick}
        > 
            {children}
        </button>
    )
}

export default Btn