import { CDN_URL } from "../Utils/constants";

const Restraucard = (props) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla: { deliveryTime },
  } = props.resData.info;

  return (
    <div className="m-4 flex-1 bg-pink-50 rounded-xl overflow-hidden shadow-lg hover:bg-pink-400 flex flex-col">
      <div className="h-48">
        <img
          className="w-full h-full object-cover "
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>

      <div className="p-3 flex-1 flex flex-col justify-between">
        <h6 className="font-bold">{name}</h6>
        <h6>{avgRating} ⭐</h6>
        <h6>Delivery Time: {deliveryTime} min</h6>
      </div>
    </div>
  );
};

export default Restraucard;
