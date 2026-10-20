
import useMandiPrices from "./useMandiPrices";
import "./App1.css";

function App() {
    const { prices, loading, error } = useMandiPrices();

    if (loading) {
        return <h2 className="message">Loading .........</h2>;
    }

    if (error) {
        return <h2 className="error">Error: {error}</h2>;
    }

    return (
        <div className="container">
            <h1>Maharashtra Mandi Prices</h1>
            <p className="subtitle">
                Latest available onion market reports
            </p>

            {prices.length === 0 ? (
                <p className="message">
                    No onion price records found.
                </p>
            ) : (
                <div className="table-wrapper">
                    <table>
                        <thead>
                        <tr>
                            <th>Market</th>
                            <th>District</th>
                            <th>Commodity</th>
                            <th>Variety</th>
                            <th>Arrival Date</th>
                            <th>Min Price</th>
                            <th>Max Price</th>
                            <th>Modal Price</th>
                        </tr>
                        </thead>

                        <tbody>
                        {prices.map((item, index) => (
                            <tr
                                key={`${item.market}-${item.arrival_date}-${index}`}
                            >
                                <td>{item.market || "N/A"}</td>
                                <td>{item.district || "N/A"}</td>
                                <td>{item.commodity || "N/A"}</td>
                                <td>{item.variety || "N/A"}</td>
                                <td>{item.arrival_date || "N/A"}</td>
                                <td>₹{item.min_price ?? "N/A"}</td>
                                <td>₹{item.max_price ?? "N/A"}</td>
                                <td className="modal-price">
                                    ₹{item.modal_price ?? "N/A"}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            <p className="note">
                Prices are reported per quintal. Check the arrival
                date for the actual reporting date of each market.
            </p>
        </div>
    );
}

export default App;
