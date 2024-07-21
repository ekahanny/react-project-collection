import Filter from "../components/elements/Filter"
import Card from "../components/fragments/Card"
import heroImg from "../assets/hero-image.jpg";
import { useEffect } from "react";
import getDataFromApi from "../services/property.service";
import { useState } from "react";


const PropertyPages = () => {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDataFromApi()
                setProperties(data)
            }catch (error){
                console.log("Error fetching data: ", error);
            }
        }
        fetchData()
    }, [])

    return (
        <div className="relative h-screen w-full bg-dark-gray">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-5/6 object-cover z-0"
      />

      {/* Filter Component */}
      <div className="relative z-10 flex flex-col justify-end h-5/6 ml-20">
        <div className="ml-20 pb-44">
          <h1 className="text-6xl font-bold mb-5 text-black">Peace, nature, and dream.</h1>
          <p className="text-2xl mb-8 text-black">Find and book a great experience.</p>
        </div>
        <Filter />
      </div>
      
      <h1 className="text-2xl text-white font-semibold pl-32 mt-20">Over 200 stays.</h1>
      

      {/* Card Component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => (
          <Card
            key={index}
            image={property.image}
            title={property.title}
            desc={property.description}
            price={property.price}
            rating={property.rating}
            guests={property.capacity.people}
            bedrooms={property.capacity.bedroom}
          />
        ))}
      </div>


    </div>
    )
}

export default PropertyPages