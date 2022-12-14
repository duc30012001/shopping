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

import { setProducts } from "../redux/productsSlice";

// use fake data when api is limited
import { productsByCate, covers } from "../fakeData";

const Home = () => {
    window.scrollTo({ top: 0 });

    const products = useSelector((state) => {
        return state.products.value;
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
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        getCover("cover");
        getArrival("tops");

        // use when api is limited
        // setCover(covers);
        // dispatch(setProducts(productsByCate["tops"]));
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
            <ProductsList products={products} header={"S???N PH???M M???I"} />
        </div>
    );
};

export default Home;
