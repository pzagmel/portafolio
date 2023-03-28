import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

const ProyectCards = ({ img, title, descripcion, ruta }) => {

  return (
    <div className="card ">
      <img src={img} className="card-img-top" alt="P" style={{ "width": "100%", "height": "150px" }} />
      <div className="card-body" style={{ "height": "220px" }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {descripcion}
        </p>
      </div>
      <div className="card-footer">
        <a href={ruta}>
          <Button variant="contained">
            Visit here  <GitHubIcon sx={{ marginLeft: '0.5rem' }} />
          </Button>
        </a>
      </div>

    </div>
  );
};
export default ProyectCards;