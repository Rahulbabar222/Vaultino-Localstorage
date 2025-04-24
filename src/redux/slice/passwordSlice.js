import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    storedPassword: JSON.parse(localStorage.getItem("passwords")) || [],
    addopen: false,
    passwordView: false,
    form: { id: "",title:"" , site: "", username: "", password: "", note: "" }
}

const passwordSlice = createSlice({
    name: 'passwords',
    initialState,
    reducers: {
        addPassword: (state, action) => {
            state.storedPassword.push(action.payload);
            localStorage.setItem("passwords", JSON.stringify(state.storedPassword));
        },
        deletePassword: (state, action) => {
            state.storedPassword = state.storedPassword.filter(item => item.id !== action.payload);
            localStorage.setItem("passwords", JSON.stringify(state.storedPassword));
        },
        updatePassword: (state, action) => {
            const index = state.storedPassword.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.storedPassword[index] = action.payload;
                localStorage.setItem("passwords", JSON.stringify(state.storedPassword));
            }
            state.form={ id: "", title:"", site: "", username: "", password: "", note: "" }
        },
        toggleAdd: (state,action) => {
            state.addopen = action.payload;
        },
        togglepasswordView: (state,action) => {
            state.passwordView = action.payload;
        },
        setForm: (state, action) => {
            state.form = action.payload;
        }
    }
})

export const { addPassword, deletePassword, toggleAdd, togglepasswordView, setForm, updatePassword } = passwordSlice.actions;
export default passwordSlice.reducer;