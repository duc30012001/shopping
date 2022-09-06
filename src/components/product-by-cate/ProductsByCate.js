import React, { useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import { useSelector, useDispatch } from "react-redux";
import "./ProductsByCate.scss";
import ProductsList from "../product-list/ProductsList";
import { setProducts } from "../../redux/productsSlice";

// import fake data when api is limited
// import { productsByCate } from "../../fakeData";

const ProductsByCate = ({ cate, categories }) => {
    window.scrollTo({ top: 0 });

    const products = useSelector((state) => state.products.value);
    const dispatch = useDispatch();

    const getProducts = async (cate) => {
        const response = await axiosClient.get(cate).catch((err) => {
            console.log("Err: ", err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        getProducts(cate);

        // use when api is limited
        // dispatch(setProducts(productsByCate[cate]));
    }, [cate]);

    return (
        <>
            <ProductsList products={products} header={categories[cate]} />
        </>
    );
};

export default ProductsByCate;
