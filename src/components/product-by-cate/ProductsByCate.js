import React, { useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import { useSelector, useDispatch } from "react-redux";
import "./ProductsByCate.scss";
import ProductsList from "../product-list/ProductsList";
import { setProduct } from "../../redux/actions/product";

const ProductsByCate = ({ cate, categories }) => {
    window.scrollTo({ top: 0 });

    const products = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const getProducts = async (cate) => {
        const response = await axiosClient.get(cate).catch((err) => {
            console.log("Err: ", err);
        });
        dispatch(setProduct(response.data));
    };

    useEffect(() => {
        getProducts(cate);
    }, [cate]);

    return (
        <>
            <ProductsList products={products} header={categories[cate]} />
        </>
    );
};

export default ProductsByCate;
