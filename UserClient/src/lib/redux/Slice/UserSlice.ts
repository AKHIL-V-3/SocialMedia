import { createSlice } from "@reduxjs/toolkit"

interface userInterface {
    email:string,
    passwords:object,
    user:object,
    isStepTwo: boolean
}

const initialState: userInterface = {
    email: "",
    passwords: {},
    user: {},
    isStepTwo: false
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
        },
        addUser: (state,action) =>{
            state.user = action.payload
        },
        removeUser: (state,action) =>{
            state.user = {}
        },
        popisStepTwo:(state,action) =>{  
            state.isStepTwo = true
        },
        popisStepOne:(state,action)=>{
             state.isStepTwo = false
        }
    }
})

// const userDataSlice = createSlice({

//     name: "userDataSlice",
//     initialUserData,
//     reducers: {
//         addUser: (state, action) => {
//             state.user = action.payload
//         },
//         removeUser: (state,action)=>{
//             state.user = null
//         },
//     }
      
// })

export const userActions = userSlice.actions
// export const userDataActions = userDataSlice.actions

export const  UserSliceReducer = userSlice.reducer
// export const  UserDataSliceReducer = userDataSlice.reducer