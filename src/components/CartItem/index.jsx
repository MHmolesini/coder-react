import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { BsTrash } from 'react-icons/bs'
import './cartItem.css'

export const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <>
      <div className="cartItem">
        <div className="cartItem__img">
          <img src={item.productImage} alt="foto" />
        </div>
        <div className="cartItem__detail">
          <h4>{item.productName}</h4>
          <p>Talle: {item.talle}</p>
          <p>Cantidad: {cantidad}</p>
        </div>
        <div className="cartItem__check">
          <button onClick={() => eliminarProducto(item.id)}>
            <i><BsTrash/></i>
          </button>
          <p>Precio: {item.price}</p>
        </div>
      </div>
    </>
  );
};
