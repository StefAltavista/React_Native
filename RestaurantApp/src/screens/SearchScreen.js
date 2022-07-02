import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
    const [term, setTerm] = useState("");
    const [searchApi, results, error] = useResults();

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    list={results.filter((x) => x.price === "$")}
                />
                <ResultsList
                    title="Bit Pricier"
                    list={results.filter((x) => x.price === "$$")}
                />
                <ResultsList
                    title="Big Spender"
                    list={results.filter((x) => x.price === "$$$")}
                />
                <ResultsList
                    title="Eliterian"
                    list={results.filter((x) => x.price === "$$$$")}
                />
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({});
