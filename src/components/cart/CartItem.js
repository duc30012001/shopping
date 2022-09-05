import React from "react";
import { Link } from "react-router-dom";
import "./CartItem.scss";

const CartItem = () => {
    return (
        <div className="cart-item">
            <h2 className="cart-item__title">Giỏ hàng của bạn</h2>
            <p>
                Không có sản phẩm nào.{" "}
                <Link to="/">Quay lại cửa hàng để tiếp tục mua sắm.</Link>
            </p>
        </div>
    );
};

export default CartItem;
