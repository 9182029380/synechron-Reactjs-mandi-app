import { useState } from "react";

function ControlledForm() {
    const [customerName, setCustomerName] = useState("");
    const [phone, setPhone] = useState("");
    const [carModel, setCarModel] = useState("Honda City");
    const [booking, setBooking] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        setBooking({
            customerName,
            phone,
            carModel
        });
    }

    return (
        <div className="form-card">
            <h2>Controlled Booking Form</h2>

            <form onSubmit={handleSubmit}>
                <label>Customer Name</label>
                <input
                    type="text"
                    value={customerName}
                    onChange={(event) =>
                        setCustomerName(event.target.value)
                    }
                    required
                    placeholder="Enter your name"
                />

                <label>Phone Number</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                        setPhone(event.target.value)
                    }
                    required
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit phone number"
                    placeholder="Enter 10-digit phone number"
                />

                <label>Select Car</label>
                <select
                    value={carModel}
                    onChange={(event) =>
                        setCarModel(event.target.value)
                    }
                >
                    <option>Honda City</option>
                    <option>Hyundai Creta</option>
                    <option>Tata Nexon</option>
                    <option>BMW 3 Series</option>
                </select>

                <button type="submit">Book Car</button>
            </form>

            <div className="preview">
                <h3>Live Preview</h3>
                <p>Name: {customerName || "Not entered"}</p>
                <p>Phone: {phone || "Not entered"}</p>
                <p>Car: {carModel}</p>
            </div>

            {booking && (
                <div className="success">
                    <h3>Booking Submitted!</h3>
                    <p>Customer: {booking.customerName}</p>
                    <p>Phone: {booking.phone}</p>
                    <p>Car: {booking.carModel}</p>
                </div>
            )}
        </div>
    );
}

export default ControlledForm;