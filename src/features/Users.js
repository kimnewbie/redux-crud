import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../FakeData';

export const userSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action) => {
            // push
            state.value.push(action.payload);
        },
        deleteUser: (state, action) => {
            // filter
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
        updateUsername: (state, action) => {
            // map
            state.value.map((user => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username;
                }
            }))
        },
    }
});

export const { addUser, deleteUser, username, updateUsername } = userSlice.actions;
export default userSlice.reducer;