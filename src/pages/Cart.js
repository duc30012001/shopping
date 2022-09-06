import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems.value);
    return (
        <div className="cart-item">
            <h2 className="cart-item__title">Giỏ hàng của bạn</h2>
            {cartItems.length === 0 ? (
                <p>
                    Không có sản phẩm nào.{" "}
                    <Link to="/">Quay lại cửa hàng để tiếp tục mua sắm.</Link>
                </p>
            ) : (
                <CartItem products={cartItems} />
            )}
        </div>
    );
};

export default Cart;
