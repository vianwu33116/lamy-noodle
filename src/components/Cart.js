import React, { useState, useEffect, useMemo } from "react";
import Layout from "components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import CartItem from "components/CartItem";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3004/carts`).then((res) => setCarts(res.data));
  }, []);

  const totalPrice = useMemo(() => {
    const totalPrice = carts
      .map((cart) => cart.mount * parseInt(cart.price))
      .reduce((a, value) => a + value, 0);
    return totalPrice;
  }, [carts]);

  const updateCart = (cart) => {
    const newCarts = [...carts];
    const _index = newCarts.findIndex((c) => c.id === cart.id);
    newCarts.splice(_index, 1, cart);
    setCarts(newCarts);
  };

  const deleteCart = (cart) => {
    const _carts = carts.filter((c) => c.id !== cart.id);
    setCarts(_carts);
  };

  return (
    <div className="cart-main">
      <Layout>
        <nav className="cart-nav">
          <div className="container d-flex">
            <Link to="/" className="link">
              首頁
            </Link>
            <span className="material-symbols-outlined">chevron_right</span>
            <Link to="/order" className="link">
              點餐
            </Link>
            <span className="material-symbols-outlined">chevron_right</span>
            訂單確認
          </div>
        </nav>
        <div action="" className="p-form">
          <h1 className="cart-title txt-c pb-3">
            <span className="span-title">訂單確認</span>
          </h1>
          <ul className="cart-list container">
            {carts.map((cart) => (
              <CartItem
                key={cart.id}
                cart={cart}
                updateCart={updateCart}
                deleteCart={deleteCart}
              />
            ))}
          </ul>
          {carts.length === 0 ? (
            <div className="no-dish container txt-c">
              <span className="material-icons face mb-2">sentiment_neutral</span>
              <p className="no fw-bold">您的購物車裡沒有任何餐點</p>
            </div>
          ) : (
            <div className="cart-bottom container d-flex">
              <textarea cols="120" rows="6" placeholder="請輸入備註"/>
              <div className="confirm-container">
                <div className="cart-total d-flex p-price mb-0">
                  Total:
                  <span className="total-price ml-2">NT{totalPrice}</span>
                </div>
                <Link to="/finishOrder"><input type="submit" className="submit btn" value="Confirm" /></Link>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Cart;
