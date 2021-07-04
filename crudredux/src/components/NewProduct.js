import React, { useState } from "react";
// Actions
import { createProductAction } from "../actions/productsActions";
// Hooks for redux
// useDispatch --> For using Actions functions
// useSelector --> For accessing store's state
import { useDispatch, useSelector } from "react-redux";

const NewProduct = ({history}) => {
  // State
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  // Accessing Store's State
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  // Using useDispatch for creating the function for using Actions
  const dispatch = useDispatch();

  // Calls the Action in charge to create a product through dispatch
  const addProduct = (product) => dispatch(createProductAction(product));

  // Submit form
  const onCreateNewProduct = (e) => {
    e.preventDefault();

    // Form validation
    if (name.trim() === "" || price <= 0) {
      return;
    }

    // Creates product
    addProduct({
      name,
      price,
    });

    // Redirect to home
    history.push('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Create Product
            </h2>
            <form onSubmit={onCreateNewProduct}>
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  name="price"
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add new product
              </button>
            </form>
            { loading ? <p className="text-center">Loading...</p> : null }
            { error ? <p className="alert alert-danger p2 mt-4 text-center">Something went wrong</p> : null }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
