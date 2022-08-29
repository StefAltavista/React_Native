import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function BlogPostForm({ onSubmit, initialValues }) {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Post:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title="Save Blog Post"
                onPress={() => {
                    onSubmit(title, content);
                }}
            />
        </View>
    );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: "",
        content: "",
    },
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",

        padding: 5,
        margin: 15,
        marginBottom: 50,
    },
    label: {
        fontSize: 18,
        margin: 15,
        marginBottom: 0,
    },
});
