import { configureStore } from '@reduxjs/toolkit'
import MyReduxComponentSlice from "../components/myredux/MyReduxComponentSlice"
export default configureStore({
  reducer: {
    counter: MyReduxComponentSlice,
  },  
})
