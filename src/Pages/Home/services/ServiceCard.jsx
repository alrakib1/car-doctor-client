import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div
      className="card border border-solid border-#E8E8E8
    rounded-none
    "
    >
      <figure className="px-10 pt-10 ">
        <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-[#444] font-bold">{title}</h2>
        <p className="text-[#FF3811] font-semibold text-xl">Price : ${price}</p>
        <div className="card-actions justify-end hover:cursor-pointer">
          <Link to={`/checkout/${_id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke="#FF3811"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
