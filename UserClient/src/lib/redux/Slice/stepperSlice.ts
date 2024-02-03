import { createSlice } from "@reduxjs/toolkit"

interface stepperinterface {
    data: string;
    loading: boolean;
    error: string | null;
}

const initialState: stepperinterface = {
    data: '',
    loading: false,
    error: null,
}

const stepperSlice = createSlice({

    name: "stepperslice",
    initialState,
    reducers: {
        addnextStep: (state, action) => {
            state.data = action.payload
        },
        addPrevStep:(state,action)=>{

             state.data = action.payload
        }
    }
})

export const {addnextStep,addPrevStep } = stepperSlice.actions

export default stepperSlice.reducer