import React, { useContext, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

export default function IndexScreen({ navigation }) {
    const { state, deleteBlogPost, getBlogPost } = useContext(Context);
    console.log(state, state);
    useEffect(() => {
        getBlogPost();
    }, []);
    return (
        <View>
            <FlatList
                data={state}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Show", { id: item.id })
                            }
                            key={item.id}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>

                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "gray",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
    },
    icon: {
        fontSize: 24,
    },
});
