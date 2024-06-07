import { useState } from "react"
import ContactInput from "../components/ContactInput"
import ContactOutput from "../components/ContactOutput"

const ContactPages = () => {
    const [contact, setContact] = useState({
        contactName: "",
        phoneNumber: "",
        contactEmail: "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setContact((prevContact) => {
            return {
                ...prevContact,
                [name]: value,
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("contact : ", contact)
    }


    return (
        <div className="flex flex-col justify-center items-center min-h-screen m-4">
            <div className="w-full max-w-xl bg-slate-100 p-10 rounded-md border">
                <h1 className="text-3xl font-semibold text-slate-700 text-center mb-10 mt-3">ADD CONTACT</h1>
                <form onSubmit={handleSubmit}>
                    <ContactInput
                        name="contactName"
                        type="text"
                        placeholder="Add Contact Name"
                        label="Contact Name"
                        onChange={handleChange}
                    />
                    <ContactInput
                        name="phoneNumber"
                        type="number"
                        placeholder="Add Phone Number"
                        label="Phone Number"
                        onChange={handleChange}
                    />
                    <ContactInput
                        name="contactEmail"
                        type="email"
                        placeholder="Add Contact Email"
                        label="Contact Email"
                        onChange={handleChange}
                    />
                    <div className="flex justify-center items-center">
                        <button className="h-8 px-4 font-semibold text-sm rounded-md bg-black text-white mt-7" type="submit">Add</button>
                    </div>
                </form>
            </div>

            <ContactOutput/>
        </div>
    )
}
export default ContactPages