import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function ({ navigation }) {
    const id = navigation.getParam("id");
    const { editBlogPost, state } = useContext(Context);

    const post = state.find((x) => x.id === id);
    console.log(post);

    return (
        <BlogPostForm
            initialValues={{ title: post.title, content: post.content, id }}
            onSubmit={(title, content) => editBlogPost(id, title, content)}
        />
    );
}

const styles = StyleSheet.create({});
