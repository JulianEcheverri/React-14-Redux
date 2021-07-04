import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/productActions";
import { useHistory } from "react-router-dom";

const EditProduct = () => {
  // Local State
  const [product, setProduct] = useState({
    name: "",
    price: 0,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  // Product to edit from store
  const productEdit = useSelector((state) => state.products.editProduct);

  useEffect(() => {
    setProduct(productEdit);
  }, [productEdit]);

  if (!productEdit) return null;

  const { name, price } = product;

  const onSubmitEditProduct = (e) => {
    e.preventDefault();
    dispatch(editProductAction(product));
    history.push("/");
  };

  const onChangeEditProduct = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>
            <form onSubmit={onSubmitEditProduct}>
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={onChangeEditProduct}
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
                  onChange={onChangeEditProduct}
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
