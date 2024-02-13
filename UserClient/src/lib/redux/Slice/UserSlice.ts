import { createSlice } from "@reduxjs/toolkit"

interface userInterface {
    email:string,
    passwords:object,
}

const initialState: userInterface = {
    email: "",
    passwords: {}
}

const userSlice = createSlice({

    name: "userSlice",
    initialState,
    reducers: {
        addEmail: (state, action) => {
            state.email = action.payload
        },
        addPassword:(state,action)=>{
             state.passwords = action.payload
        },
        removeEmail: (state,action)=>{
              state.email = ""
        },
        removePassword: (state,action)=>{
            state.passwords = {}
        }
    }
})

export const userActions = userSlice.actions

export default userSlice.reducer