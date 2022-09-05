import React, { useState } from "react";

import "./ProductDetail.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import numberWithCommas from "../../utils/numberWithCommas";

const ProductDetail = ({ product }) => {
    window.scrollTo({ top: 0 });
    const [img, setImg] = useState(product?.images[0]);

    const [selectColor, setSelectColor] = useState(undefined);
    const [selectSize, setSelectSize] = useState(undefined);
    const [quantity, setQuantity] = useState(1);
    const [productCart, setProductCart] = useState({});

    const handleAddToCart = () => {
        if (selectColor === undefined && product.color) {
            alert("Vui lòng chọn màu sắc");
            return;
        }

        if (selectSize === undefined && product.size) {
            alert("Vui lòng chọn kích thước");
            return;
        }

        setProductCart({
            id: product.id,
            name: product.name,
            color: selectColor,
            size: selectSize,
            quantity: quantity,
        });

        alert("Thêm thành công sản phẩm vào giỏ hàng");
    };

    return (
        <div className="product-detail">
            <div className="product-detail__images">
                <div className="product-detail__main-img">
                    <img src={img} alt="" />
                </div>
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    slidesPerView={4}
                    spaceBetween={30}
                >
                    {product?.images.map((image, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="product-detail__thumb">
                                    <img
                                        src={image}
                                        alt=""
                                        onClick={() => setImg(image)}
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="product-detail__infor">
                <h3 className="product-detail__name">{product.name}</h3>
                <p className="product-detail__price">
                    {numberWithCommas(product.price)}&#8363;
                </p>
                <div className="product-detail__color">
                    {product.color ? (
                        <h4 className="product-detail__title">Màu sắc</h4>
                    ) : (
                        ""
                    )}
                    <ul className="product-detail__color__list">
                        {product.color?.map((color, idx) => {
                            return (
                                <li
                                    className={
                                        color === selectColor
                                            ? "product-detail__color__item active"
                                            : "product-detail__color__item"
                                    }
                                    key={idx}
                                    onClick={() => setSelectColor(color)}
                                >
                                    {color}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="product-detail__size">
                    {product.size ? (
                        <h4 className="product-detail__title">Kích thước</h4>
                    ) : (
                        ""
                    )}
                    <ul className="product-detail__size__list">
                        {product.size?.map((size, idx) => {
                            return (
                                <li
                                    className={
                                        size === selectSize
                                            ? "product-detail__size__item active"
                                            : "product-detail__size__item"
                                    }
                                    key={idx}
                                    onClick={() => setSelectSize(size)}
                                >
                                    {size}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="product-detail__quantity">
                    <h4 className="product-detail__title">Số lượng</h4>
                    <button
                        className="product-detail__quantity__btn product-detail__quantity__btn--descrease"
                        onClick={() =>
                            setQuantity((prev) => (prev === 0 ? 0 : prev - 1))
                        }
                    >
                        -
                    </button>
                    <input
                        type="text"
                        pattern="[0-9]*"
                        className="product-detail__quantity__input"
                        value={quantity}
                        onChange={(e) =>
                            setQuantity((prev) =>
                                e.target.validity.valid
                                    ? e.target.value - 0
                                    : prev,
                            )
                        }
                    />
                    <button
                        className="product-detail__quantity__btn product-detail__quantity__btn--increase"
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>
                </div>
                <button
                    className="product-detail__buy"
                    onClick={handleAddToCart}
                >
                    THÊM VÀO GIỎ HÀNG
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
