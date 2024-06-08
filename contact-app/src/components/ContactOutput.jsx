const ContactOutput = ({contactName, phoneNumber, contactEmail}) => {
    return (
            <div className="w-full bg-slate-200 p-5 rounded-md border border-cyan-950 mt-5">
                <div className="flex flex-row">
                    <img 
                    src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png" 
                    className="w-10 h-10 mr-3 rounded-full"
                    alt="icon" />
                    <p className="font-semibold">{contactName}</p>
                </div>
                <div className="flex flex-row items-center space-x-1 ml-12 -mt-4">
                    <p className="text-sm">{phoneNumber}</p>
                    <p>•</p>
                    <p className="text-sm">{contactEmail}</p>
                </div>
            </div>
    )
}

export default ContactOutput