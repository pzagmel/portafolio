import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaJs, FaPython } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import mui from '../../img/mui.png';
import './index.css';


const Footer = () => {
    return (
        <div className="footer text-center bg-info">
            <Carousel interval={3000}>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="icon"><FaReact /></span>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="icon"><FaHtml5 /></span>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="icon"><FaCss3Alt /></span>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="icon"><FaBootstrap /></span>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="icon"><FaGithub /></span>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="icon"><FaJs /></span>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center">
                        <span className="icon"><FaPython /></span>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center justify-content-center">
                    <span className="icon carousel-image"><img src={mui} alt="Material-UI" className="img-fluid" /></span>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Footer;