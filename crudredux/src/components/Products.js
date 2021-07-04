import React, { Fragment, useEffect } from "react";
// Actions
import { getProductsAction } from "../actions/productActions";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Components
import Product from "./Product";

const Products = () => {
  // Using useDispatch for creating the function for using Actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Get api
    const getProducts = () => dispatch(getProductsAction());
    getProducts();
    // eslint-disable-next-line
  }, []);

  // Getting state
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  return (
    <Fragment>
      <h2>Products</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center">
          Something went wrong
        </p>
      ) : null}
      {loading ? <p className="text-center">Loading...</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="3">There are no products</td>
            </tr>
          ) : (
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Products;
