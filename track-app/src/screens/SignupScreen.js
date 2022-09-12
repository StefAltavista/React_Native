import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./components/Spacer";

export default function SignupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign up for Tracker</Text>
            </Spacer>
            <Input label="email"></Input>
            <Spacer></Spacer>
            <Input label="Password"></Input>
            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={() => navigation.navigate("Signin")}
                ></Button>
            </Spacer>
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        navigationOptions: { header: { visible: false } },
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 100,
    },
});
