import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose",
                },
            });
            setResults(response.data.businesses);
        } catch (e) {
            setError("Something Went wrong:", e);
        }
    };
    useEffect(() => {
        searchApi("hamburger");
    }, []);

    return [searchApi, results, error];
};
