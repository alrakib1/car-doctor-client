import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import Footer from "../shared/footer/Footer";

const BookService = () => {
  const { title, _id, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleConfirm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const date = e.target.date.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const booking = {
      customerName: name,
      email,
      date,
      phone,
      service_id: _id,
      price: price,
      service: title,
      img,
    };
    fetch("http://localhost:5000/bookings", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.insertedId) {
          Swal.fire("Service has been added");
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="mb-24">
        <div className="pt-20 pb-20 bg-[#F3F3F3]">
          <div className="w-5/6 mx-auto p-10 shadow-2xl bg-base-100">
            <h2 className="text-center text-4xl mb-6">
              Book Service : {title}
            </h2>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-7"
              onSubmit={handleConfirm}
            >
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.name}
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="date"
                  name="date"
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
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control w-full mx-auto md:col-span-2  mt-6">
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

export default BookService;
