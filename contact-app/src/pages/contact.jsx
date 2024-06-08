import { useState } from "react"
import ContactInput from "../components/ContactInput"
import ContactOutput from "../components/ContactOutput"

const ContactPages = () => {
    const [contact, setContact] = useState({
        data: [],
        currentData: {
            contactName: "",
            phoneNumber: "",
            contactEmail: "",
        }
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setContact((prevContact) => {
            return {
                ...prevContact,
                currentData: {
                    ...prevContact.currentData,
                    [name]: value,
                }
            }
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        setContact((prevContact) => {
            console.log("previous contact: ", prevContact);
            return {
                data: [...prevContact.data, prevContact.currentData],
                currentData: {
                    contactName: "",
                    phoneNumber: "",
                    contactEmail: "",
                }
            }
        })
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
                        value={contact.currentData.contactName}
                        onChange={handleChange}
                    />
                    <ContactInput
                        name="phoneNumber"
                        type="text"
                        placeholder="Add Phone Number"
                        label="Phone Number"
                        value={contact.currentData.phoneNumber}
                        onChange={handleChange}
                    />
                    <ContactInput
                        name="contactEmail"
                        type="email"
                        placeholder="Add Contact Email"
                        label="Contact Email"
                        value={contact.currentData.contactEmail}
                        onChange={handleChange}
                    />
                    <div className="flex justify-center items-center">
                        <button className="h-8 px-4 font-semibold text-sm rounded-md bg-black text-white mt-7" type="submit">Add</button>
                    </div>
                </form>
            </div>
            {contact.data.length > 0 && (
                <div className="w-full max-w-xl bg-slate-100 p-10 rounded-md border mt-5">
                    {contact.data.map((con, index) => (
                        <ContactOutput
                            key={index}
                            contactName={con.contactName}
                            phoneNumber={con.phoneNumber}
                            contactEmail={con.contactEmail}
                        />
                    ))}
                </div>
            )}

        </div>
    )
}
export default ContactPages