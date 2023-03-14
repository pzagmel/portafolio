import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const BasicCard = ({ title, description }) => {
  return (
    <Card >
      <CardContent>
        <Typography
          variant="h3"
          style={{ fontStyle: 'italic' }}
        >
          {title}
        </Typography>
        <Typography  variant="h5"
          style={{ fontStyle: 'italic' }}
         >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
export default BasicCard;