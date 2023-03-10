import React from "react";


const ProyectCards = ({img, title, descripcion, ruta}) =>{
    
    return (
        <div className="card ">
          <img src={img} className="card-img-top" style={{"width":"100%","height":"120px"}} />
          <div className="card-body" style={{"height":"230px"}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {descripcion}
            </p>
          </div>
          <div className="card-footer">
            <a href={ruta} className="btn btn-primary">
              Click to visit!
            </a>
          </div>
        </div>
      );
    };
export default ProyectCards;