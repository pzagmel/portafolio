import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import mui from '../../assets/img/mui2.png';
import bootstrap from '../../assets/img/bootstrap.webp';
import css from '../../assets/img/css.webp';
import git from '../../assets/img/git.webp';
import github from '../../assets/img/github.webp';
import html from '../../assets/img/html.webp';
import js from '../../assets/img/js.webp';
import python from '../../assets/img/python.webp';
import react from '../../assets/img/reactjs.png';
import './index.css';

const imgList = [[html, css, js], [mui, bootstrap, react], [git, github, python]];



export default function Stack() {

    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            <Typography variant="h4" style={{
                textAlign: 'center',
                marginBottom: '1rem',
                fontWeight: 'bold',
                fontStyle: "italic"
            }}>STACK</Typography>
            <Carousel
                style={{
                    maxWidth: '100%',
                    flexGrow: 1,
                    marginBottom: '1rem'
                }}
                // classes={{ paper: classes.customPaper }} // Aquí se aplica la clase personalizada al carrusel
                activeStep={activeStep}
                onChange={handleStepChange}
                interval={3000}
                animation="fade"
                timeout={500}
                navButtonsAlwaysVisible={false}
            >
                {imgList.map((img, index) => (
                    <Paper key={index} style={{ boxShadow: 'none'  }}>
                        <img src={img[0]} alt={`Imagen ${index}`} className="img" />
                        <img src={img[1]} alt={`Imagen ${index}`} className="img" />
                        <img src={img[2]} alt={`Imagen ${index}`} className="img" />
                    </Paper>
                ))}
            </Carousel>
        </>
    );
}


// .MuiPaper-elevation1 {