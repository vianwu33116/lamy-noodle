import React, { useState, useMemo } from "react";
import axios from "axios";

const CartItem = (props) => {
  const [mount, setMount] = useState(props.cart.mount);
  const { id, name, image, price } = props.cart;
  const sumPrice = useMemo(() => {
    return mount * parseInt(price)
  }, [mount, price]);

  const handleChange = (e) => {
    const _mount = e.target.value;
    setMount(_mount);
    const newCart = {
      ...props.cart,
      mount: _mount,
    };
    axios
      .put(`http://localhost:3004/carts/${id}`, newCart)
      .then((res) => props.updateCart(newCart));
  };

  const deleteCart = e => {
    axios.delete(`http://localhost:3004/carts/${id}`).then(res =>
    props.deleteCart(props.cart)
    );
  };

  return (
    <>
      <li className="list-item d-flex mb-1">
        <button type="button" className="btn mr-6" onClick={deleteCart}>
          X
        </button>
        <img src={image} alt={name} width="150" className="p-img mr-6" />
        <h2 className="p-name mr-6">{name}</h2>
        <h3 className="p-sub-title mr-1">麵條硬度:</h3>
        <select className="mr-6" defaultValue={"normal"}>
          <option value="hard">微硬</option>
          <option value="normal">正常</option>
          <option value="soft">偏軟</option>
        </select>
        <h3 className="p-sub-title mr-1">鹹度:</h3>
        <select className="mr-6" defaultValue={"normal"}>
          <option value="salty">正宗日本鹹度</option>
          <option value="normal">正常</option>
          <option value="slightly">不要太鹹</option>
        </select>
        <label htmlFor="onion">蔥花</label>
        <input type="checkbox" id="onion" className="box-input onion" />
        <label htmlFor="onion">木耳</label>
        <input type="checkbox" id="fungus" className="box-input mr-6" />
        <p className="p-price mr-6">NT{price}/份</p>
        <label>
          數量
          <input
            type="number"
            className="input num-input txt-c mr-6"
            value={mount}
            onChange={handleChange}
            min={1}
          />
        </label>
        <p className="p-price sum-price">金額: NT{sumPrice}</p>
      </li>
    </>
  );
};

export default CartItem;
