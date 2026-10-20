// import ControlledForm from "./ControlledForm";
// import UncontrolledForm from "./UncontrolledForm";

// function App() {
//     return (
//         <div className="container">
//             <header>
//                 <h1>Car Booking Application</h1>
//                 <p>Learn Controlled and Uncontrolled Components</p>
//             </header>
//
//             <div className="forms-container">
//                 <ControlledForm />
//                 <UncontrolledForm />
//             </div>
//         </div>
//     );
// }
//
// export default App;

// import { useState } from "react";
// import CarDetails from "./CarDetails";
//
// function App() {
//     const [count, setCount] = useState(0);
//
//     console.log("App rendered");
//
//     return (
//         <div className="container">
//             <h1>Car Booking Application</h1>
//
//             <div className="counter">
//                 <h3>Counter: {count}</h3>
//
//                 <button onClick={() => setCount(count + 1)}>
//                     Increase Counter
//                 </button>
//             </div>
//
//             <CarDetails carName="BMW" price={5000} />
//         </div>
//     );
// }
//
// export default App;


// import { useState } from "react";
//
// function App() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [customerName, setCustomerName] = useState("");
//     const [carModel, setCarModel] = useState("Honda City");
//     const [booking, setBooking] = useState(null);
//
//     function handleBooking(event) {
//         event.preventDefault();
//
//         setBooking({
//             customerName,
//             carModel
//         });
//     }
//
//     function handleLogout() {
//         setIsLoggedIn(false);
//         setBooking(null);
//     }
//
//     return (
//         <div className="container">
//             <h1>Car Booking Application</h1>
//
//             {/* Conditional rendering using ternary operator */}
//             {isLoggedIn ? (
//                 <div>
//                     <p className="status">Welcome! You are logged in.</p>
//
//                     <button onClick={handleLogout}>
//                         Logout
//                     </button>
//
//                     {/* Show confirmation if booking exists */}
//                     {booking ? (
//                         <div className="confirmation">
//                             <h2>Booking Confirmed!</h2>
//
//                             <p>Customer: {booking.customerName}</p>
//                             <p>Car: {booking.carModel}</p>
//
//                             <button
//                                 onClick={() => setBooking(null)}
//                             >
//                                 Book Another Car
//                             </button>
//                         </div>
//                     ) : (
//                         /* Otherwise, show the booking form */
//                         <form onSubmit={handleBooking}>
//                             <h2>Book Your Car</h2>
//
//                             <label>Customer Name</label>
//
//                             <input
//                                 type="text"
//                                 value={customerName}
//                                 onChange={(event) =>
//                                     setCustomerName(event.target.value)
//                                 }
//                                 placeholder="Enter customer name"
//                                 required
//                             />
//
//                             <label>Select Car</label>
//
//                             <select
//                                 value={carModel}
//                                 onChange={(event) =>
//                                     setCarModel(event.target.value)
//                                 }
//                             >
//                                 <option>Honda City</option>
//                                 <option>Hyundai Creta</option>
//                                 <option>Tata Nexon</option>
//                                 <option>BMW 3 Series</option>
//                             </select>
//
//                             <button type="submit">
//                                 Confirm Booking
//                             </button>
//                         </form>
//                     )}
//                 </div>
//             ) : (
//                 /* Show this when the customer is logged out */
//                 <div className="login">
//                     <h2>Please Login</h2>
//                     <p>Login to book your favourite car.</p>
//
//                     <button
//                         onClick={() => setIsLoggedIn(true)}
//                     >
//                         Login
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }
//
// export default App;
//----------------------------------------------------------------------------------
import useCounter from "./useCounter";
import "./App.css";

function App() {
    const {
        count,
        increment,
        decrement,
        reset
    } = useCounter();

    return (
        <div className="container">
            <h1>React Custom Hook</h1>

            <h2>Counter: {count}</h2>

            <button onClick={increment}>
                Increase
            </button>

            <button onClick={decrement}>
                Decrease
            </button>

            <button onClick={reset}>
                Reset
            </button>
        </div>
    );
}

export default App;




























