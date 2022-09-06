import React from "react";
import "./CartItem.scss";
import { useDispatch } from "react-redux";

import { BsTrash } from "react-icons/bs";
import numberWithCommas from "../../utils/numberWithCommas";

import {
    removeCartItem,
    increaseQuantity,
    decreaseQuantity,
} from "../../redux/cartItemsSlice";

const CartItem = ({ products }) => {
    let total = 0;
    const dispatch = useDispatch();

    const handleRemove = (product) => {
        dispatch(removeCartItem(product));
        // console.log("remove", product);
    };

    const handleDecrease = (product) => {
        dispatch(decreaseQuantity(product));
    };

    const handleIncrease = (product) => {
        dispatch(increaseQuantity(product));
    };

    return (
        <div>
            <ul className="cart-item__list">
                {products.map((product, index) => {
                    total += product.price * product.quantity;
                    return (
                        <li key={index} className="cart-item__product">
                            <div className="cart-item__product__img">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="cart-item__product__details">
                                <p className="cart-item__product__details__name">
                                    {product.name}
                                </p>
                                <div>
                                    {product.size ? (
                                        <span className="cart-item__product__details__size">
                                            {product.size}
                                        </span>
                                    ) : null}
                                    {product.color ? (
                                        <span className="cart-item__product__details__color">
                                            {" "}
                                            / {product.color}
                                        </span>
                                    ) : null}
                                </div>
                                <p className="cart-item__product__price">
                                    {numberWithCommas(product.price)}&#8363;
                                </p>
                            </div>
                            <div className="cart-item__function">
                                <button
                                    className="cart-item__function__decrease"
                                    onClick={() => handleDecrease(product)}
                                >
                                    -
                                </button>
                                <p className="cart-item__function__quantity">
                                    {product.quantity}
                                </p>
                                <button
                                    className="cart-item__function__increase"
                                    onClick={() => handleIncrease(product)}
                                >
                                    +
                                </button>
                            </div>
                            <div
                                className="cart-item__product__remove"
                                onClick={() => handleRemove(product)}
                            >
                                <BsTrash />
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="cart-item__checkout">
                <h3 className="cart-item__total">
                    Tổng tiền: {numberWithCommas(total)}&#8363;
                </h3>
                <button className="cart-item__buy">Tiến hành thanh toán</button>
            </div>
        </div>
    );
};

export default CartItem;
