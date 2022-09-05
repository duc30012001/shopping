import React, { useState } from "react";
import "./ProductsList.scss";
import { Link } from "react-router-dom";

import numberWithCommas from "../../utils/numberWithCommas";

const ProductsList = ({ products = [], header }) => {
    // console.log(products);
    return (
        <div className="product">
            <h2 className="product__header">{header}</h2>
            <ul className="product__list">
                {products.map((product, index) => {
                    return (
                        <Link
                            to={`/${product.id}`}
                            key={index}
                            className="product__item"
                        >
                            <div className="product__img">
                                <img src={product.images[0]} alt="" />
                            </div>
                            <div className="product__details">
                                <p className="product__name">{product.name}</p>
                                <p className="product__price">
                                    {numberWithCommas(product.price)}&#8363;
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductsList;
