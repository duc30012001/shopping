import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Không tìm thấy nội dung</h1>
            <Link to="/">Bấm vào đây để quay lại trang chủ</Link>
        </div>
    );
};

export default NotFound;
