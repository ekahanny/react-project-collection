const ContactOutput = () => {
    return (
        <div className="w-full max-w-xl bg-slate-100 p-10 rounded-md border mt-5">
            <div className="w-full bg-slate-200 p-5 rounded-md border border-cyan-950 mt-5">
                <div className="flex flex-row">
                    <img 
                    src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png" 
                    className="w-10 h-10 mr-3 rounded-full"
                    alt="icon" />
                    <p className="font-semibold">Contact Name</p>
                </div>
                <div className="flex flex-row items-center space-x-1 ml-12 -mt-4">
                    <p className="text-sm">+62 82398484858</p>
                    <p>•</p>
                    <p className="text-sm">emgail@email.com</p>
                </div>

            </div>
        </div>
    )
}

export default ContactOutput