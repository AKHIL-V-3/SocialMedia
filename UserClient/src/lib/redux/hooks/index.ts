
import { configureStore } from '@reduxjs/toolkit'
import stepperSlice from '../Slice/stepperSlice'


const store = configureStore({
  reducer: {
    stepperSlice:stepperSlice
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store