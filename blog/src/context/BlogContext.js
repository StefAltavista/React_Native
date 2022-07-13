import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [
                ...state,
                {
                    id: state.length + 1,
                    title: action.payload.title,
                    content: action.payload.content,
                },
            ];
        case "delete_blogpost":
            return state.filter((x) => x.id != action.payload);
        case "edit_blogpost":
            return state.map((x) =>
                x.id === action.payload.id
                    ? [
                          ...state,
                          {
                              title: action.payload.title,
                              content: action.payload.content,
                          },
                      ]
                    : x
            );
        default:
            return state;
    }
};
const addBlogPost = (dispatch) => {
    return function (title, content, callback) {
        dispatch({ type: "add_blogpost", payload: { title, content } });
        callback();
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => dispatch({ type: "delete_blogpost", payload: id });
};

const editBlogPost = (dispatch) => {
    return (id, title, content) => {
        dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: "test Post", content: "Test Content", id: 1 }]
);
