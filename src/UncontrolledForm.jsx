import { useRef, useState } from "react";

function UncontrolledForm() {
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const carRef = useRef(null);

    const [booking, setBooking] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        const bookingDetails = {
            customerName: nameRef.current.value,
            phone: phoneRef.current.value,
            carModel: carRef.current.value
        };

        setBooking(bookingDetails);
    }

    return (
        <div className="form-card">
            <h2>Uncontrolled Booking Form</h2>

            <form onSubmit={handleSubmit}>
                <label>Customer Name</label>
                <input
                    type="text"
                    ref={nameRef}
                    required
                    placeholder="Enter your name"
                />

                <label>Phone Number</label>
                <input
                    type="tel"
                    ref={phoneRef}
                    required
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit phone number"
                    placeholder="Enter 10-digit phone number"
                />

                <label>Select Car</label>
                <select ref={carRef} defaultValue="Honda City">
                    <option>Honda City</option>
                    <option>Hyundai Creta</option>
                    <option>Tata Nexon</option>
                    <option>BMW 3 Series</option>
                </select>

                <button type="submit">Book Car</button>
            </form>

            <div className="preview">
                <h3>How it works</h3>
                <p>
                    Enter your details and submit the form.
                    React reads the values only when you submit.
                </p>
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

export default UncontrolledForm;