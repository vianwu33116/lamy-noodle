import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "components/Home";
import Order from "components/Order";
import Cart from "components/Cart";
import FinishOrder from "components/FinishOrder";
import Login from "components/Login";
import Intro from "components/Intro";

class Router extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="order" element={<Order />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="finishOrder" element={<FinishOrder />} />
                        <Route path="login" element={<Login />} />
                        <Route path="introduction" element={<Intro />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router;