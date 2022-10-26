import React from "react";

const CartWidget = () => {
    return (
        <div className="Wrapper">
            <div className="CarritoCompra">
                <a href="#" className="carrito">
                    <i className="fas fa-shopping-cart"></i>
                    <span id="cart_menu_num" className="badge rounded-cicle">10</span>
                </a>
            </div>
        </div>
    );
}

export default CartWidget;