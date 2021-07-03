import React from "react";
const NewProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Create Product
            </h2>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                ></input>
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  name="Price"
                  type="number"
                  className="form-control"
                  placeholder="Price"
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
