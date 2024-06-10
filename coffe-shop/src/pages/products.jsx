import { useEffect, useState } from "react";
import Btn from "../components/elements/Btn";
import CardProduct from "../components/fragments/CardProduct";
import getDataFromApi from "../services/coffe.service";

const ProductPages = () => {
    const [coffe, setCoffe] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDataFromApi()
                setCoffe(data)
            } catch (error) {
                console.log("Error fetching data :", error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="mx-16 my-20 bg-[#1B1D1F] rounded-lg py-8 px-10 -mt-20">
            <div className="text-center my-8">
                <h1 className="text-white text-4xl font-bold">Our Collection</h1>
                <p className="text-gray-400 mt-5 max-w-lg mx-auto text-md">
                    Introducing our Coffee Collection, a selection of unique coffees
                    from different roast types and origins, expertly roasted in small
                    batches and shipped fresh weekly.
                </p>
            </div>

            <div className="flex justify-center space-x-2 mb-8">
                <Btn>All Products</Btn>
                <Btn>Available Now</Btn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coffe.map((item, index) => (
                    <CardProduct
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        rating={item.rating}
                        votes={item.votes}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductPages;
