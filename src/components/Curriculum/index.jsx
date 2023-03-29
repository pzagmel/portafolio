import React from "react";
import './index.css';


const Curriculum = ({ rutacv }) => {
    return (
        <div className="container">
            <a href={rutacv} target="_blank" rel="noreferrer">
                <button className="btn-round">
                    Descarga mi CV
                </button>
            </a>

        </div>
    );
}

export default Curriculum;

