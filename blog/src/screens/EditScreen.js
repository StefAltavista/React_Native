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
            initialValues={{ title: post.title, content: post.content }}
            onSubmit={(title, content) =>
                editBlogPost(id, title, content, () => navigation.pop())
            }
        />
    );
}

const styles = StyleSheet.create({});
