import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "../reducer/cartslice";
const store = configureStore({
    reducer:{
            Cart:cartReducer,
    },

})

export default store;