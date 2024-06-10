import { useEffect, useState } from "react";
import Btn from "../components/elements/Btn";
import CardProduct from "../components/fragments/CardProduct";
import getDataFromApi from "../services/coffe.service";

const ProductPages = () => {
    const [coffe, setCoffe] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDataFromApi();
                setCoffe(data);
            } catch (error) {
                console.log("Error fetching data :", error);
            }
        };
        fetchData();
    }, []);

    const filteredCoffe = coffe.filter((item) => {
        if (filter === "available") {
            return item.available
        }else{
            return true
        }
    })

    return (
        <div className="mx-16 my-20 bg-[#1B1D1F] rounded-lg py-8 px-10 -mt-20 relative">
            <svg className="absolute top-[22px] left-[50%] w-64 h-auto z-0" viewBox="0 0 257 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04" stroke="#302522" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <div className="text-center relative my-8 z-10">
                <h1 className="text-white text-4xl font-bold">Our Collection</h1>
                <p className="text-gray-400 mt-5 max-w-lg mx-auto text-md">
                    Introducing our Coffee Collection, a selection of unique coffees
                    from different roast types and origins, expertly roasted in small
                    batches and shipped fresh weekly.
                </p>
            </div>

            <div className="flex justify-center space-x-2 mb-8">
                <Btn onClick={() => setFilter("")} isActive={filter === ""}>All Products</Btn>
                <Btn onClick={() => setFilter("available")} isActive={filter === "available"}>Available Now</Btn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCoffe.map((item, index) => (
                    <CardProduct
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        rating={item.rating}
                        votes={item.votes}
                        isPopular={item.popular}
                        isAvailable={item.available}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductPages;
