import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Developer.css";
const Developer = (props) => {
  const { name, age, img, position, stack, salary } = props.developer;
  const cartIcon = <FontAwesomeIcon icon={faCartPlus} />;
  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">
              Name: <span className="info">{name}</span>
            </h4>
            <h5 className="card-title">
              Age: <span className="info">{age}</span>
            </h5>
            <h5 className="card-title">
              Position: <span className="info">{position}</span>
            </h5>
            <h5 className="card-title">
              Stack: <span className="info">{stack}</span>
            </h5>
            <h5 className="card-title">
              salary: $<span className="info">{salary}</span>
            </h5>
            <button
              onClick={() => props.devAdded(props.developer)}
              className="btn btn-success hire-btn"
            >
              {cartIcon} Hire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
