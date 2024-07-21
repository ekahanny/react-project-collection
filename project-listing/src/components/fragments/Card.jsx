import BedroomIcon from "../elements/BedroomIcon";
import GuestsIcon from "../elements/GuestsIcon";
import StarIcon from "../elements/StarIcon";

function Card({image, title, desc, price, rating, guests, bedrooms, isSuperhost}) {
    return (
      <div className="bg-dark-gray text-white p-3 m-6">
        <div className="ml-6 border border-white w-[357px] rounded-lg">
            
            {isSuperhost && (
              <div className="absolute m-2 bg-dark-gray px-3 py-1.5 rounded-full flex flex-row">
                <p className="mb-1.5 ml-1 text-xs font-semibold">Superhost</p>
                <span className="-mt-1.5 ml-1 flex items-center">
                  <StarIcon width={18} height={18}/>
                </span>
              </div>
            )}

            <img className="rounded-lg" src={image} alt={title} />
            <div className="p-5">
              <h1 className="font-bold">{title}</h1>
              <p className="text-sm font-semibold mt-2 text-gray-500">{desc}</p>
              
              <div className="flex flex-row py-4">
                <BedroomIcon/>
                <p className="text-xs my-1.5 ml-1">{bedrooms} bedrooms</p>

                <GuestsIcon/>
                <p className="text-xs my-1.5 ml-1">{guests} guests</p>
              </div>

              <hr className="bg-slate-700" />

              <div className="flex justify-between my-3">
                  <div className="flex items-baseline">
                      <p className="font-bold text-xl">${price}/</p>
                      <p className="mt-1.5 text-sm">night</p>
                  </div>

                  <div className="flex items-center">
                    <StarIcon width={24} height={24}/>
                      <p className="mx-1 font-semibold text-sm mt-0.5">{rating}</p>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  