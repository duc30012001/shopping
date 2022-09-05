import React, { useState, useEffect } from "react";
import ProductsList from "../components/product-list/ProductsList";
import axiosClient from "../api/axiosClient";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Navigation } from "swiper";

import { setProduct } from "../redux/actions/product";

const Home = () => {
    window.scrollTo({ top: 0 });

    const products = useSelector((state) => {
        return state.product;
    });
    const dispatch = useDispatch();

    const [cover, setCover] = useState([]);

    const getCover = async (param) => {
        const response = await axiosClient.get(param).catch((err) => {
            console.log("Err: ", err);
        });
        setCover(response.data);
    };

    const getArrival = async (param) => {
        const response = await axiosClient.get(param).catch((err) => {
            console.log("Err: ", err);
        });
        dispatch(setProduct(response.data));
    };

    useEffect(() => {
        getCover("cover");
        getArrival("tops");
    }, []);

    return (
        <div>
            <Swiper
                modules={[Autoplay, Navigation]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
            >
                {cover.map((img, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={img} alt="cover" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <ProductsList products={products} header={"SẢN PHẨM MỚI"} />
        </div>
    );
};

export default Home;
