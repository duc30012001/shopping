import React from "react";
import { useParams } from "react-router-dom";
import ProductsByCate from "../components/product-by-cate/ProductsByCate";
import ProductDetail from "../components/product-detail/ProductDetail";
import { useSelector } from "react-redux";
import NotFound from "../components/error/NotFound";

const Products = ({ categories }) => {
    const cateKeys = Object.keys(categories);
    const { param } = useParams();
    const products = useSelector((state) => state.product);

    const filter = products.filter((product) => product.id === param);

    if (cateKeys.findIndex((cates) => cates === param) !== -1) {
        return <ProductsByCate cate={param} categories={categories} />;
    }

    if (filter.length === 0) {
        return <NotFound />;
    }

    const product = filter[0];

    if (cateKeys.findIndex((cates) => cates === param) === -1) {
        return <ProductDetail product={product} />;
    }
};

export default Products;
