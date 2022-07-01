import React, { useState, useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

///Excercise with useReducer
const reducer = (state, action) => {
    switch (action.type) {
        case "increment_counter":
            return { ...state, counter: state.counter + action.payload };
        case "decrement_counter":
            return { ...state, counter: state.counter - action.payload };
    }
};
export default function CounterScreen() {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                    dispatch({ type: "increment_counter", payload: 1 });
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    dispatch({ type: "decrement_counter", payload: 1 });
                }}
            />
            <Text>Count: {state.counter}</Text>
        </View>
    );
}

//Excercise with useState
// export default function CounterScreen() {
//     const [counter, setCounter] = useState(0);

//     return (
//         <View>
//             <Button
//                 title="Increase"
//                 onPress={() => {
//                     setCounter(counter + 1);
//                 }}
//             />
//             <Button
//                 title="Decrease"
//                 onPress={() => {
//                     setCounter(counter - 1);
//                 }}
//             />
//             <Text>Count: {counter}</Text>
//         </View>
//     );
// }
const style = StyleSheet.create({});
