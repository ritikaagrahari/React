import { CDN_URL } from "../utilis/constants";

const ResCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  return (
    <div className="p-4 m-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg h-[160px] w-[220px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default ResCard;
