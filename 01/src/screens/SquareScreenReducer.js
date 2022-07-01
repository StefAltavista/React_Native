import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
const ratio = 30;

const reducer = (state, action) => {
    switch (action.type) {
        case "change_red":
            return state.red + action.payload > 255 ||
                state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };
        case "change_green":
            return state.green + action.payload > 255 ||
                state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case "change_blue":
            return state.blue + action.payload > 255 ||
                state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

export default function SquareScreen() {
    const [state, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                inc={() => dispatch({ type: "change_red", payload: ratio })}
                dec={() => dispatch({ type: "change_red", payload: -ratio })}
                color="Red"
            />
            <ColorCounter
                inc={() => dispatch({ type: "change_blue", payload: ratio })}
                dec={() => dispatch({ type: "change_blue", payload: -ratio })}
                color="Blue"
            />
            <ColorCounter
                inc={() => dispatch({ type: "change_green", payload: ratio })}
                dec={() => dispatch({ type: "change_green", payload: -ratio })}
                color="Green"
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`,
                }}
            ></View>
        </View>
    );
}
const style = StyleSheet.create({});

function check(c, r) {
    return c + r > 255 || c + r < 0 ? 0 : ratio;
}
