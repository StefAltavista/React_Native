import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

export default function SearchScreen() {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const searchApi = async () => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term,
                    location: "san jose",
                },
            });
            setResults(response.data.businesses);
        } catch (e) {
            setError("Something Went wrong:", e);
        }
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={searchApi}
            />
            {error ? <Text>{error}</Text> : null}
            <Text>We found {results.length} restaurants</Text>
        </View>
    );
}
const styles = StyleSheet.create({});
