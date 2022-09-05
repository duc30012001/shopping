import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { BsBagCheck } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [showMenu, setShowMenu] = useState("");

    const handleBar = () => {
        setShowNav(!showNav);
    };

    const hideNav = () => {
        setShowNav(false);
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__toolbar">
                    <div className="header__toolbar--bar" onClick={handleBar}>
                        <VscThreeBars />
                    </div>
                    <Link to="/cart" className="header__toolbar--cart">
                        <BsBagCheck />
                    </Link>
                </div>
                <nav className={showNav ? "header__nav show" : "header__nav"}>
                    <li className="header__nav__item" onClick={hideNav}>
                        <Link to="/" className="header__nav__item__link">
                            Trang chủ
                        </Link>
                    </li>
                    <li className="header__nav__item">
                        <div>
                            <Link
                                to="/tops"
                                className="header__nav__item__link"
                                onClick={hideNav}
                            >
                                Áo nam
                            </Link>
                            <i
                                className="header__nav__item__btn"
                                onClick={() =>
                                    setShowMenu((prev) =>
                                        prev === "tops" ? "" : "tops",
                                    )
                                }
                            >
                                <AiFillCaretDown />
                            </i>
                        </div>
                        <ul
                            className={
                                showMenu === "tops"
                                    ? "header__nav__item-menu show-menu"
                                    : "header__nav__item-menu"
                            }
                        >
                            <li className="header__nav__item-menu__item">
                                <Link
                                    onClick={hideNav}
                                    to="/tshirts"
                                    className="header__nav__item-menu__item--link"
                                >
                                    Áo phông
                                </Link>
                            </li>
                            <li className="header__nav__item-menu__item">
                                <Link
                                    onClick={hideNav}
                                    to="/polos"
                                    className="header__nav__item-menu__item--link"
                                >
                                    Áo polo
                                </Link>
                            </li>
                            <li className="header__nav__item-menu__item">
                                <Link
                                    onClick={hideNav}
                                    to="/shirts"
                                    className="header__nav__item-menu__item--link"
                                >
                                    Áo sơ mi
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="header__nav__item">
                        <div>
                            <Link
                                onClick={hideNav}
                                to="/bottoms"
                                className="header__nav__item__link"
                            >
                                Quần nam
                            </Link>
                            <i
                                className="header__nav__item__btn"
                                onClick={() =>
                                    setShowMenu((prev) =>
                                        prev === "bottoms" ? "" : "bottoms",
                                    )
                                }
                            >
                                <AiFillCaretDown />
                            </i>
                        </div>
                        <ul
                            className={
                                showMenu === "bottoms"
                                    ? "header__nav__item-menu show-menu"
                                    : "header__nav__item-menu"
                            }
                        >
                            <li className="header__nav__item-menu__item">
                                <Link
                                    onClick={hideNav}
                                    to="/jeans"
                                    className="header__nav__item-menu__item--link"
                                >
                                    Quần jean
                                </Link>
                            </li>
                            <li className="header__nav__item-menu__item">
                                <Link
                                    onClick={hideNav}
                                    to="/trousers"
                                    className="header__nav__item-menu__item--link"
                                >
                                    Quần âu
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="header__nav__item">
                        <Link
                            onClick={hideNav}
                            to="/outfits"
                            className="header__nav__item__link"
                        >
                            Đồ bộ
                        </Link>
                    </li>
                    <li className="header__nav__item">
                        <div>
                            <Link
                                onClick={hideNav}
                                to="/accessories"
                                className="header__nav__item__link"
                            >
                                Phụ kiện
                            </Link>
                            <i
                                className="header__nav__item__btn"
                                onClick={() =>
                                    setShowMenu((prev) =>
                                        prev === "accessories"
                                            ? ""
                                            : "accessories",
                                    )
                                }
                            >
                                <AiFillCaretDown />
                            </i>
                        </div>
                        <ul
                            className={
                                showMenu === "accessories"
                                    ? "header__nav__item-menu show-menu"
                                    : "header__nav__item-menu"
                            }
                        >
                            <li className="header__nav__item-menu__item">
                                <Link
                                    onClick={hideNav}
                                    to="/belts"
                                    className="header__nav__item-menu__item--link"
                                >
                                    Thăt lưng
                                </Link>
                            </li>
                            <li className="header__nav__item-menu__item">
                                <Link
                                    onClick={hideNav}
                                    to="/bags"
                                    className="header__nav__item-menu__item--link"
                                >
                                    Balo
                                </Link>
                            </li>
                            <li className="header__nav__item-menu__item">
                                <Link
                                    onClick={hideNav}
                                    to="/shoes"
                                    className="header__nav__item-menu__item--link"
                                >
                                    Giày nam
                                </Link>
                            </li>
                        </ul>
                    </li>
                </nav>
            </div>
        </header>
    );
};

export default Header;
