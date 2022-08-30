import React from "react";
import Layout from "components/Layout";
import Dish from "components/Dish";
import axios from "axios";
import { Link } from "react-router-dom";

class Order extends React.Component {
  state = {
    dishes: [],
    sourceDishes: [],
    display: true,
    searchText: "",
    cartNum: 0,
  };

  componentDidMount() {
    axios.get("http://localhost:3004/dishes").then((res) => {
      this.setState({
        dishes: res.data,
        sourceDishes: res.data,
      });
    });
    this.updateCartNum();
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchText: value,
    });
    this.search(value);
  };

  clearText = () => {
    this.setState({
      searchText: "",
    });
    this.search("");
  };

  search = (text) => {
    console.log(text);
    let _dishes = [...this.state.sourceDishes];
    _dishes = _dishes.filter((p) => {
      const matchArray = p.name.match(new RegExp(text, "gi"));
      return !!matchArray;
    });
    this.setState({
      dishes: _dishes,
    });
  };

  toggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  updateCartNum = async () => {
    const res = await axios.get(`http://localhost:3004/carts`);
    const carts = res.data || [];
    const cartNum = carts
      .map((cart) => cart.mount)
      .reduce((a, value) => a + value, 0);
    this.setState({
      cartNum: cartNum,
    });
  };



  render() {
    return (
      <div className="order-main mg-c">
        <Layout>
          <div className="confirm-container">
            <Link to="/cart" className="order-confirm pd-1 link">
              <span className="material-symbols-outlined cart-icon">
                shopping_cart
              </span>{" "}
              ({this.state.cartNum})
            </Link>
          </div>
          <div className="order-container d-flex mg-c">
            <div className="nav">
              <div className="nav-top txt-c" onClick={this.toggleDisplay}>
                <h1 className="nav-h1 pd-1 link">菜單列表</h1>
                <span
                  className="material-symbols-outlined expand-icon link"
                  onClick={this.toggleDisplay}
                >
                  arrow_drop_down
                </span>
              </div>
              {this.state.display && (
                <ul className="nav-list mb-1">
                  <li className="list-item txt-c">
                    <a href="#1" className="list-search link pd-1 link-font">
                      拉麵
                    </a>
                  </li>
                  <li className="list-item txt-c">
                    <a href="#10" className="list-search link pd-1 link-font">
                      小菜
                    </a>
                  </li>
                  <li className="list-item txt-c">
                    <a href="#16" className="list-search link pd-1 link-font">
                      飲品
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <div className="dish-main container">
              <div className="search-box d-flex">
                <span className="material-symbols-outlined search-icon">
                  search
                </span>
                <div className="control">
                  <input
                    type="text"
                    placeholder="搜尋"
                    className="input search-input"
                    value={this.state.searchText}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="control">
                  <button className="button link-font" onClick={this.clearText}>
                    X
                  </button>
                </div>
              </div>
              <div className="dish d-flex">
                {this.state.dishes.map((p) => {
                  return (
                    <div className="dish-box d-flex bdr-1" key={p.id} id={p.id}>
                      <Dish dish={p} updateCartNum={this.updateCartNum} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Order;
