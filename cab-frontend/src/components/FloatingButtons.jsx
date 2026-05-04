import React from "react";
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import "../styles/FloatingButtons.css";

const FloatingButtons = () => {
    const phoneNumber = "919302538296";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=I want to book a taxi`;

    return (
        <div>
            {/* WhatsApp - FIXED */}
            <a
                href={whatsappLink}
                className="whatsapp-btn"
                target="_blank"
                rel="noreferrer"
            >
                <FaWhatsapp />
                <span>WhatsApp</span>
            </a>

            {/* Instagram - NOT FIXED (absolute inside page) */}
           

            <a
                href="https://www.instagram.com/st_royal_trips/"
                className="float-item instagram"
                target="_blank"
                rel="noreferrer"
            >
                <FaInstagram />
                <span>Instagram</span>
            </a>
            
        </div>
    );
};

export default FloatingButtons;