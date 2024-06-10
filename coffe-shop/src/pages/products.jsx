import Btn from "../components/elements/Btn";
import CardProduct from "../components/fragments/CardProduct";

const ProductPages = () => {
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
                <CardProduct
                    image="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg"
                    name="Cappucino"
                    price="5.20"
                    rating="4.7"
                    votes="65"
                />
                <CardProduct
                    image="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg"
                    name="House Coffee"
                    price="3.50"
                    rating="4.85"
                    votes="14"
                />
                <CardProduct
                    image="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/espresso.jpg"
                    name="Espresso"
                    price="2.50"
                    rating="4.9"
                    votes="55"
                />
                <CardProduct
                    image="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/coffee-latte.jpg"
                    name="Coffee Latte"
                    price="4.50"
                    rating="5.0"
                    votes="23"
                />
                <CardProduct
                    image="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg"
                    name="Chocolate Coffee"
                    price="4.00"
                    rating="4.65"
                    votes="122"
                />
                <CardProduct
                    image="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/valentine-special.jpg"
                    name="Valentine Special"
                    price="6.50"
                    rating="No ratings"
                    votes="0"
                />
            </div>
        </div>
    );
}

export default ProductPages;
