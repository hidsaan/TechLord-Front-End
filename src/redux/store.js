import { configureStore } from "@reduxjs/toolkit";
import {getProductsReducer, addProductReducer} from "./reducers";

const store= configureStore({

reducer:{
    getproducts: getProductsReducer,
    addproducts: addProductReducer
}

})

export default store;