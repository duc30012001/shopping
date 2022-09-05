import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.scss";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
    const categories = {
        products: "tất cả sản phẩm",
        tops: "áo nam",
        tshirts: "áo phông",
        shirts: "áo sơ mi",
        polos: "áo polo",
        bottoms: "quần nam",
        jeans: "quần jean",
        trousers: "quần âu",
        outfits: "đồ bộ",
        accessories: "phụ kiện",
        shoes: "giày nam",
        belts: "thắt lưng",
        bags: "balo",
    };

    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route
                        path="/:param"
                        element={<Products categories={categories} />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
