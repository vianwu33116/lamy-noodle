import React from "react";
import axios from "axios";

class Dish extends React.Component {

  addCart = async() => {
    try{
      const {id, name, image, price} =this.props.dish;
      const res = await axios.get(`http://localhost:3004/carts?productId=${id}`);
      const carts = res.data;
      console.log(carts);
      if(carts && carts.length > 0){
        const cart = carts[0];
        cart.mount += 1;
        await axios.put(`http://localhost:3004/carts/${cart.id}`, cart);
      }
      else{
        const cart = {
          productId: id,
          name,
          image,
          price,
          mount: 1
        };
        await axios.post(`http://localhost:3004/carts`, cart);
      }
      alert(`Add Success!`);
      this.props.updateCartNum();
    }
    catch(error){
      alert(`Add Failed!`)
    }
  }

  render() {
    const { name, image, price } = this.props.dish;
    return (
      <>
        <h2 className="d-name mb-1">{name}</h2>
        <img src={image} alt={name} className="d-img mb-1 bdr-1" />
        <p className="p-price mb-1">NT {price}</p>
        <button type="button" className="add-to-cart link bdr-1" onClick={this.addCart}>
          Add
        </button>
      </>
    );
  }
}
export default Dish;
