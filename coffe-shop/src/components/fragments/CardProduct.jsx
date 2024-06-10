import Star from "../elements/Star";
import StarFilled from "../elements/StarFilled";

const CardProduct = ({ image, name, price, rating, votes, isPopular, isAvailable }) => {
  return (
    <div className="w-full p-4 mt-2">
      
      {/* badge popular */}
      {isPopular && (
        <p className="absolute m-2 bg-[#F6C768] w-fit px-3 py-1 text-sm font-semibold rounded-full">Popular</p>
      )}

      <img 
        src={image}
        alt={name}
        className="rounded-2xl w-full"
      />

      <div className="mt-3 flex justify-between items-center">
        <p className="text-white text-lg font-medium">{name}</p>
        <p className="bg-[#BEE3CC] px-2 py-1 rounded-md font-semibold text-sm">{price}</p>
      </div>

      <div className="flex items-center mt-1">
        
        {/* star */}
        {votes > 0 ? (<StarFilled/>) : (<Star/>)}
        
        {/* ratings */}
        <p className="text-white ml-1 font-semibold">{rating}</p>
        
        {/* sum of votes */}
        <p className="text-[#6F757C] ml-1 font-semibold">
          {votes > 0 ? (`(${votes} votes)`) : "No Ratings" }
        </p>

        {/* available or not */}
        {!isAvailable && (
          <p className="text-[#ED735D] ml-auto text-sm font-semibold mt-2 ">Sold out</p>
        )}

      </div>

    </div>
  );
};

export default CardProduct;
