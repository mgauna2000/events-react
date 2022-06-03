import React, { useState } from "react";

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1);

    const addCount = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const removeCount = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

  return (
    <>
      <div className="container m-1">
        <div className="row align-items">
          <div className="col-5">
            <button className="btn btn-primary" onClick={removeCount}>-</button>
          </div>
          <div className="col-2">
            <p>{count}</p>
          </div>
          <div className="col-5">
            <button className="btn btn-primary" onClick={addCount}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
