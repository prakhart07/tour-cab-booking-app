import React from "react";
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import "../styles/FloatingButtons.css";
import { COMPANY_DETAILS } from "../ComponyDetails";

const FloatingButtons = () => {
    const phoneNumber = "919302538296";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi, I want to book a taxi!`;

    return (
        <div>
            <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/\s/g, '')}`}
                className="call-btn"
                target="_blank"
                rel="noreferrer"
            >
                <FaPhone />
                <span>Book Now</span>
            </a>
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
                className="instagram-btn"
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