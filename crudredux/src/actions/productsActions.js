import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  GET_EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from "../types/index.js";

// Axios Client
import axiosClient from "../config/axios";
// Sweetalert2
import Swal from "sweetalert2";

//#region Crate product

export function createProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());
    try {
      // Add product to db (json fake)\
      const response = await axiosClient.post("/products", product);
      // Updating the state
      product.id = response.data.id;
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
//#endregion Crate product

//#region Getting products
export function getProductsAction() {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      const response = await axiosClient.get("/products");
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getProductsError());
    }
  };
}

const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: true,
});

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
  payload: true,
});

//#endregion Getting products

//#region Delete product

export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(deleteProduct(id));
    try {
      await axiosClient.delete(`/products/${id}`);
      dispatch(deleteProductSuccess());
      Swal.fire("Deleted!", "Product has been deleted.", "success");
    } catch (error) {
      console.log(error);
      dispatch(deleteProductError());
    }
  };
}

const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true,
});

//#endregion Delete product

//#region Edit product
export function getProductForEditAction(product) {
  return (dispatch) => {
    dispatch(getProductForEdit(product));
  };
}

const getProductForEdit = (product) => ({
  type: GET_EDIT_PRODUCT,
  payload: product,
});

export function editProductAction(product) {
  return async (dispatch) => {
    try {
      await axiosClient.put(`/products/${product.id}`, product);
      dispatch(editProductSuccess(product));
    } catch (error) {
      console.log(error);
      dispatch(editProductError(true));
    }
  };
}

const editProductSuccess = (product) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product,
});

const editProductError = (error) => ({
  type: EDIT_PRODUCT_ERROR,
  payload: error,
});

//#endregion Edit product
