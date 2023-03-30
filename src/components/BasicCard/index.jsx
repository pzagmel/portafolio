import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  './index.css';


const BasicCard = ({ title, description }) => {
  return (
    <Card  >
      <CardContent id="fondo">
        < Typography 
          variant="h3"
          style={{ fontStyle: 'italic', color: 'white' }}
        >
          {title}
        </Typography>
        <Typography  variant="h5"
          style={{ fontStyle: 'italic', color: 'white' }}
         >
          {description}
        </Typography  >
      </CardContent>
    </Card>

  );
}
export default BasicCard;