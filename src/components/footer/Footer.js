import React from "react";
import { Link } from "react-router-dom";

import listFooter from "./listFooter";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__lists">
                {listFooter.map((footer, index) => {
                    return (
                        <li key={index} className="footer__list">
                            <p className="footer__title">{footer.title}</p>
                            <ul className="footer_items">
                                {footer.items.map((item, i) => {
                                    return (
                                        <li key={i} className="footer__item">
                                            <Link to={item.link}>
                                                {item.cap}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

export default Footer;
