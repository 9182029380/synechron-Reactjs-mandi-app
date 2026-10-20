// function CarDetails({ carName, price }) {
//     console.log("CarDetails rendered");
//
//     return (
//         <div className="car-card">
//             <h2>{carName}</h2>
//             <p>Booking Price: ₹{price}</p>
//         </div>
//     );
// }
//
// export default CarDetails;

import { memo } from "react";

const CarDetails = memo(function CarDetails({
                                                carName,
                                                price
                                            }) {
    console.log("CarDetails rendered");

    return (
        <div className="car-card">
            <h2>{carName}</h2>
            <p>Booking Price: ₹{price}</p>
        </div>
    );
});

export default CarDetails;
