import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = UseAxiosSecure();

  // const url = `https://car-doctor-server-orcin-six.vercel.app/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setBookings(data);
    //   });
    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure ?");
    if (proceed) {
      fetch(`https://car-doctor-server-orcin-six.vercel.app/bookings/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = bookings.filter((booking) => booking._id != id);
            setBookings(remaining);
          }
        });
    }
  };
  const handleConfirm = (id) => {
    fetch(`https://car-doctor-server-orcin-six.vercel.app/bookings/${id}`, {
      method: "patch",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("data updated");
          const remaining = bookings.filter((booking) => booking._id != id);
          const updated = bookings.find((booking) => (booking._id = id));
        }
      });
  };
  return (
    <div className="overflow-x-auto mt-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              {/* <label>
                <input type="checkbox" className="checkbox" />
              </label> */}
            </th>
            <th>Customer Details</th>
            <th>Date</th>
            <th>Service Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleConfirm={handleConfirm}
              handleDelete={handleDelete}
            ></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
