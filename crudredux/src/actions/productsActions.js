import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types/index.js';

// Axios Client
import axiosClient from '../config/axios'

// Crate products
export function createProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            // Add product to db (json fake)\
            await axiosClient.post('/products', product);
            // Updating the state
            dispatch(addProductSuccess(product));
        } catch (error) {
            console.log(error);
            dispatch(addProductError(true));
        }
    }
};

// Saving product
const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

// When product is saved successful
const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

// Error saving product
const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});