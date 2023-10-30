import { useLoaderData } from "react-router-dom";
import Footer from "../shared/footer/Footer";

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;
  const handleConfirm = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = e.target.first.value;
    const lastName = e.target.last.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(firstName, lastName, phone, email, message);
  };

  return (
    <div>
      <div className="mb-24">
        <div className="pt-20 pb-20 bg-[#F3F3F3]">
          <div className="w-5/6 mx-auto p-10 shadow-2xl bg-base-100">
            <form className="grid grid-cols-2 gap-7" onSubmit={handleConfirm}>
              <div className="form-control">
                <input
                  type="text"
                  name="first"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  name="last"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <textarea
                name="message"
                className="w-full p-4 col-span-2 border rounded-xl"
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>
              <div className="form-control w-full mx-auto col-span-2  mt-6">
                <input
                  className="btn w-full btn-discover text-white normal-case"
                  type="submit"
                  value="Order Confirm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CheckOut;
