import Btn from "../components/elements/Btn"

const ProductPages = () => {
    return (
        <div className="mx-16 -my-20 bg-[#1B1D1F] rounded-lg p-8">
            <div className="text-center my-8 bg-inherit">
                <h1 className="text-white text-4xl font-bold bg-inherit">Our Collection</h1>
                <p className="text-gray-400 mt-5 max-w-lg mx-auto bg-inherit text-md">
                    Introducing our Coffee Collection, a selection of unique coffees
                    from different roast types and origins, expertly roasted in small
                    batches and shipped fresh weekly.
                </p>
            </div>

            <div className="bg-inherit flex justify-center">
                <Btn>All Products</Btn>
                <Btn>Available Now</Btn>

            </div>
        </div>
    )
}

export default ProductPages