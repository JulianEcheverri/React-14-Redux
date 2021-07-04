import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from "../types/index.js";

// Axios Client
import axiosClient from "../config/axios";
// Sweetalert2
import Swal from "sweetalert2";

// Crate products
export function createProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            // Add product to db (json fake)\
            await axiosClient.post("/products", product);
            // Updating the state
            dispatch(addProductSuccess(product));

            Swal.fire("Success", "Product created successful", "success");
        } catch (error) {
            console.log(error);
            dispatch(addProductError(true));
            Swal.fire({
                icon: "error",
                title: "Something went wrong",
                text: "Cannot create product",
            });
        }
    };
}

// Saving product
const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true,
});

// When product is saved successful
const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product,
});

// Error saving product
const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state,
});


// Getting products
export function getProductsAction() {
    return async (dispatch) => {
        dispatch(getProducts());
        try {
            const response = await axiosClient.get('/products');
            dispatch(getProductsSuccess(response.data));
        } catch (error) {
            console.log(error);
            dispatch(getProductsError());
        }
    }
}

const getProducts = () => ({
    type: GET_PRODUCTS,
    payload: true
});

const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
});

const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR,
    payload: true
});