import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const BasicCard =({title,description})=> {
  return (
    <Card >
      <CardContent>
        <Typography variant="h5" component="div">
        {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <CardActions>      
      </CardActions>
    </Card>
  );
}
export default BasicCard;