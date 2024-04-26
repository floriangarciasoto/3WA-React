import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostsAndUsers = createAsyncThunk(
    'fetchPostsAndUsers',
    async () => {
        const resPosts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const resUsers = await axios.get('https://jsonplaceholder.typicode.com/users')
        return [resPosts.data, resUsers.data];
    }
)

export const fetchComments = createAsyncThunk(
    'fetchComments',
    async (postId) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        return res.data;
    }
)

export const addPostToAPI = createAsyncThunk(
    'addPostToAPI',
    async (arg, { getState }) => {
        const state = getState();
        const post = {
            ...state.post.post,
            id: 1,
            userId: 1
        };
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
        return res;
    }
)

export const addCommentToPost = createAsyncThunk(
    'addCommentToPost',
    async (postId, { getState }) => {
        const state = getState();
        const userWithId1 = state.post.users.find(user => user.id === 1);
        const newComment = {
            postId,
            name: state.post.comment.name,
            email: userWithId1.email, // Use of with Id = 1
            body: state.post.comment.body
        }
        const res = await axios.post(`https://jsonplaceholder.typicode.com/comments`, newComment);
        return res.data;
    }
)


const postSlice = createSlice({
    name: 'post',
    reducers: {
        setPostValue(state, action) {
            state.post[action.payload.name] = action.payload.value;
        },
        setCommentValue(state, action) {
            state.comment[action.payload.name] = action.payload.value;
        }
    },
    initialState: {
        post: {
            title: '',
            body: ''
        },
        posts: [],
        users: [],
        comment: {
            name: '',
            body: ''
        },
        comments: [],
        loading: {
            // 'idle' | 'loading' | 'error'
            getPostsFromAPIState: 'idle',
            getCommentsFromAPIState: 'idle',
            addPostToAPIState: 'idle',
            addCommentToAPIState: 'idle'
        }
    },
    extraReducers: (builder) => {
        // Get posts and users
        builder.addCase(fetchPostsAndUsers.pending, (state, action) => {
            state.loading.getPostsFromAPIState = 'loading'
        })
        builder.addCase(fetchPostsAndUsers.fulfilled, (state, action) => {
            state.posts = action.payload[0];
            state.users = action.payload[1];
            state.loading.getPostsFromAPIState = 'idle'
        })
        builder.addCase(fetchPostsAndUsers.rejected, (state, action) => {
            state.loading.getPostsFromAPIState = "error"
        })

        // Get comments
        builder.addCase(fetchComments.pending, (state, action) => {
            state.loading.getPostsFromAPIState = 'loading'
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload
            state.loading.getPostsFromAPIState = 'idle'
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.loading.getPostsFromAPIState = "error"
        })

        // Add post
        builder.addCase(addPostToAPI.pending, (state, action) => {
            state.loading.addPostToAPIState = 'loading'
        })
        builder.addCase(addPostToAPI.fulfilled, (state, action) => {
            let postFromAPI = action.payload.data
            // Check same ID
            if (state.posts.find(post => post.id === postFromAPI.id)) {
                postFromAPI = {
                    ...postFromAPI,
                    id: Date.now()
                }
            }
            state.posts.push({
                ...postFromAPI
            });
            state.post = {
                title: '',
                body: ''
            };
            state.loading.addPostToAPIState = 'idle'
        })
        builder.addCase(addPostToAPI.rejected, (state, action) => {
            state.loading.addPostToAPIState = "error"
        })

        // Add comment
        builder.addCase(addCommentToPost.pending, (state, action) => {
            state.loading.addCommentToAPIState = 'loading'
        })
        builder.addCase(addCommentToPost.fulfilled, (state, action) => {
            let commentFromAPI = action.payload
            // Check same ID
            if (state.comments.find(comment => comment.id === commentFromAPI.id)) {
                commentFromAPI = {
                    ...commentFromAPI,
                    id: Date.now()
                }
            }
            state.comments.push({
                ...commentFromAPI
            });
            state.comment = {
                name: '',
                body: ''
            };
            state.loading.addCommentToAPIState = 'idle'
        })
        builder.addCase(addCommentToPost.rejected, (state, action) => {
            state.loading.addCommentToAPIState = "error"
        })
    }
})



export const {
    setPostValue,
    setCommentValue
} = postSlice.actions

export default postSlice.reducer