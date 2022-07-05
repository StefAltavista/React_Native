import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";

export default withNavigation(function ResultsList({
    title,
    list,
    navigation,
}) {
    if (!list.length) {
        return null;
    }
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={list}
                keyExtractor={(list) => list.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Result", { id: item.id })
                            }
                        >
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
});
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 10,
    },
});
