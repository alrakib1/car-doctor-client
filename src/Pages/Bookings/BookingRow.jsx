const BookingRow = ({ booking, handleDelete,handleConfirm  }) => {
 
  const { _id, customerName, date, email, img, price, phone, service } =
    booking;



  return (
    <tr>
      <th>
        {/* <label>
          <input type="checkbox" className="checkbox" />
        </label> */}
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">Email: {email}</div>
            <div className="text-sm opacity-50">Phone: {phone}</div>
          </div>
        </div>
      </td>
      <td>{date}</td>
      <td>{service}</td>
      <td>{price}</td>
      <th>
        <button onClick={()=>handleConfirm(_id)}
          className="btn btn-ghost"
        >
          Confirm
        </button>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-warning hover:bg-red-600"
        >
          X
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
