import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../utils/productos";
import { useParams, useNavigate } from "react-router-dom";


const ItemDetailContainer = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const [product, setProduct] = useState({});



  useEffect(() => {
    // console.log("producto filtrado por: ", productFilter)
      setProduct(productFilter)
  }, []);

  const productFilter = productos.find((product) => {
    return product.id == id
  })

  return (
    <>
      <div className="container">
        <ItemDetail data={product} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
