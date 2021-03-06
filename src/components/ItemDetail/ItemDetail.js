import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  // max-width: 540px;

  const [amount, setAmount] = useState(1);
  const [showButton, setShowButton] = useState(false);

  const onAdd = () => {
    console.log("prducto a agregar", data);
    console.log("cantidad elegida", amount);
  };
  return (
    <div className="card mb-3 mt-4" style={{ width: "100%", height: "auto" }}>
      <div className="row g-0">
        <div className="col-md-7">
          <img
            src={`../${data.image}`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.desc}</p>
            <p className="card-text">
              <small className="text-muted">$ {data.price}</small>
            </p>
            {!showButton ? (
              <ItemCount
                amount={amount}
                updateAmount={setAmount}
                setShowButton={setShowButton}
                stock={data.stock}
              />
            ) : (
              <button
                type="button"
                onClick={onAdd}
                className="btn btn-dark btn-add"
              >
                <Link to="/cart">Terminar mi compra</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
