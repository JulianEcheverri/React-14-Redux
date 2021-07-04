import React from "react";
import { useHistory } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { deleteProductAction, getProductForEditAction } from "../actions/productsActions";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const { id, name, price } = product;
  const dispatch = useDispatch();
  // Enabling history hook for redirecting to EditProduct component
  const history = useHistory();

  const onDeleteProduct = (id) => {
    // Confirms if the user wants to delete the product
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Deletes the product
        dispatch(deleteProductAction(id));
      }
    });
  };

  const onEditProductRedirect = (product) => {
    dispatch(getProductForEditAction(product));
    history.push(`/products/edit/${product.id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">${price}</span>
      </td>
      <td className="acciones">
        <button 
          type="button" 
          className="btn btn-primary mr-2"
          onClick={() => onEditProductRedirect(product)}
          >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDeleteProduct(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product;
