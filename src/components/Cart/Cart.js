import React from "react";

const Cart = (props) => {
  const { cart } = props;

  // total cost
  const totalReducer = (previous, developer) => previous + developer.salary;
  const total = cart.reduce(totalReducer, 0);

  return (
    <div className="card">
      <div className="card-body">
        <h3>Total Developers: {cart.length}</h3>
        <h4>Total Salary: ${total}</h4>
        {cart.map((developer) => (
          <h5 key={developer.id}>Name: {developer.name}</h5> //  show name
        ))}{" "}
      </div>
    </div>
  );
};

export default Cart;
