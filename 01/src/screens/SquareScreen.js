import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
const ratio = 30;

export default function SquareScreen() {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <ColorCounter
                inc={() => setRed(red + check(red, ratio))}
                dec={() => setRed(red - check(red, -ratio))}
                color="Red"
            />
            <ColorCounter
                inc={() => setGreen(green + check(green, ratio))}
                dec={() => setGreen(green - check(green, -ratio))}
                color="Blue"
            />
            <ColorCounter
                inc={() => setBlue(blue + check(blue, ratio))}
                dec={() => setBlue(blue - check(blue, -ratio))}
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
