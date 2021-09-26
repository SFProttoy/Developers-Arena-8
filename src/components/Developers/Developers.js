import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Developer from "../Developer/Developer";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  // load data from json file
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  // state for cart
  const [cart, setCart] = useState([]);

  // button handler
  const devAdded = (developer) => {
    const newCart = [...cart, developer];
    setCart(newCart);
  };
  return (
    <div className="row g-4 mt-5">
      <div className="col-md-9">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {developers.map((developer) => (
            <Developer
              key={developer.id}
              developer={developer}
              devAdded={devAdded}
            ></Developer>
          ))}
        </div>
      </div>
      <div className="col-md-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Developers;
