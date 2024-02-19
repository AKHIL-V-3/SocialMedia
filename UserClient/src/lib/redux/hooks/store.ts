
import { configureStore } from '@reduxjs/toolkit'
import {UserSliceReducer} from '../Slice/UserSlice'


const store = configureStore({
  reducer: {
    userSlice:UserSliceReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store