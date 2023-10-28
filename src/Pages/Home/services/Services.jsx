import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="mt-5">
      <div className="text-center space-y-5">
        <h3 className="text-3xl font-semibold text-[#FF3811]">Our Services</h3>
        <h2 className="text-5xl font-bold ">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or Randomised <br />
          words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12">
        {
            services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
