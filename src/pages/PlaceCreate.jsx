import { useState } from "react";
import { placeService } from "../services/place.service.js";
import { useNavigate } from "react-router-dom";

export function PlaceCreate() {
  const navigate = useNavigate();
  const [place, setPlace] = useState({ name: "", type: "", address: "" });
  async function onSubmit(ev) {
    ev.preventDefault();
    console.log(place);
    await placeService.save(place);
    navigate("/api/place");
  }

  function onChange(ev) {
    const { name, value } = ev.target;
    setPlace((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="place-create">
      <h2>Create a new place</h2>

      <form className="form" onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="place-name">Name</label>
          <input
            id="place-name"
            name="name"
            placeholder="Name"
            onChange={onChange}
            maxLength={25}
          />
        </div>

        <div className="form-row">
          <label htmlFor="place-type">Type</label>
          <select
            id="place-type"
            name="type"
            defaultValue=""
            onChange={onChange}
          >
            <option value="" disabled>
              --Please choose an option--
            </option>
            <option value="restaurant">Restaurant</option>
            <option value="hotel">Hotel</option>
            <option value="park">Park</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="place-address">Address</label>
          <input
            id="place-address"
            name="address"
            placeholder="Address"
            onChange={onChange}
          />
        </div>

        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}
