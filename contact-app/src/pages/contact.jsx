import ContactInput from "../components/ContactInput"

const ContactPages = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="w-full max-w-xl bg-slate-100 p-10 rounded-md border">
                <h1 className="text-3xl font-semibold text-slate-700 text-center mb-10 mt-3">ADD CONTACT</h1>
                <form>
                    <ContactInput
                        name="contactName"
                        type="text"
                        placeholder="Add Contact Name"
                        label="Contact Name"
                    />
                    <ContactInput
                        name="phoneNumber"
                        type="number"
                        placeholder="Add Phone Number"
                        label="Phone Number"
                    />
                    <ContactInput
                        name="contactEmail"
                        type="email"
                        placeholder="Add Contact Email"
                        label="Contact Email"
                    />
                    <div className="flex justify-center items-center">
                        <button className="h-8 px-4 font-semibold rounded-md bg-black text-white mt-7" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactPages