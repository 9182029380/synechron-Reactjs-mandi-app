
import { useState, useEffect } from "react";

function useMandiPrices() {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchPrices() {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    "https://mandi-api.onrender.com/v1/prices?state=Karnataka"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch mandi prices");
                }

                const result = await response.json();

                if (result.success === false) {
                    throw new Error("Unable to load mandi prices");
                }

                setPrices(result.data || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPrices();
    }, []);

    return { prices, loading, error };
}

export default useMandiPrices;
